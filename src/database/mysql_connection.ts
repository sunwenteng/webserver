import mysql = require('mysql');
import async = require('async');
import util = require('util');
import log = require('../util/log');

interface MysqlCallBack {
    (err?:any, conn?:mysql.IConnection, result?:any) : void;
}

interface MysqlConfig extends mysql.IPoolConfig{
    name?:string;
}

class MysqlConnection {
    _pool:mysql.IPool;
    configCopy:MysqlConfig;

    constructor() {
    }

    public startDb(config:MysqlConfig):void {
        config.acquireTimeout = 600000;
        this._pool = mysql.createPool(config);
        this.configCopy = config;
        log.sInfo('mysql pool ' + this.configCopy.name + ' created, db=' + this.configCopy.database + ', ip=' + this.configCopy.host +
            ', auth=' + this.configCopy.user + ':' + this.configCopy.password);
        this._pool.on('connection', (connection:mysql.IConnection) => {
            connection.query('SET SESSION auto_increment_increment=1');
            connection.on('error', (err) => {
                if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                    setTimeout(() => {
                        this.startDb(this.configCopy);
                    }, 2000);
                    log.sInfo('server disconnect, so reconnect');
                }
                log.sError(err.code);
            });
            log.sInfo(this.configCopy.name + ' connected as id successfully, connectionId=' + connection.threadId);
        });

        this._pool.on('enqueue', () => {
            //log.sInfo(this.configCopy.name + ' Waiting for available connection slot');
        });
    }

    public closeDb(callback:(err) => void) {
        this._pool.end((err) => {
            if (err) {
                log.sError(this.configCopy.name + ' database pool close failed');
                callback(err);
            }

            callback(null);
        });
    }

    public execute(sql:string, param:any, callback:MysqlCallBack):void {
        this._pool.getConnection((err, connection) => {
            if (err) {
                log.sError('sql:' + sql + '\nparam:' + JSON.stringify(param) + '\n' + err.stack);
                callback(err, null, null);
                return;
            }
            // Use the connection
            connection.query(sql, param, (err, result) => {
                if (err) {
                    log.sError('sql:' + sql + '\nparam:' + JSON.stringify(param) + '\n' + err.stack);
                    connection.release();
                    callback(err, null, null);
                    return;
                }
                // And done with the connection.
                callback(null, connection, result);
                connection.release();
                // Don't use the connection here, it has been returned to the pool.
            });
        });
    }

    public existColumn(table:string, column:string, callback:MysqlCallBack):void {
        var sql = "select 1 as res from information_schema.columns where table_name=? and column_name=? and table_schema = ?";
        this._pool.getConnection((err, connection) => {
            if (err) {
                callback(err, null, null);
                return;
            }
            connection.query(sql, [table, column, this.configCopy.database], (err, result) => {
                if (err) {
                    connection.release();
                    callback(err, null, null);
                    return;
                }
                callback(null, connection, result);
                connection.release();
            });
        });
    }

    public existIndex(table:string, index:string, callback:MysqlCallBack):void {
        var sql = "select 1 as res from information_schema.statistics where table_name=? and index_name=? and table_schema=?";
        this._pool.getConnection((err, connection) => {
            if (err) {
                callback(err, null, null);
                return;
            }
            connection.query(sql, [table, index, this.configCopy.database], (err, result) => {
                if (err) {
                    connection.release();
                    callback(err, null, null);
                    return;
                }
                callback(null, connection, result);
                connection.release();
            });
        });
    }

    public createTables(tables:{[tableName:string]:string}, next:(err, ret:string) => void):void {
        var createTasks = [];
        for (var createSql in tables) {
            if (tables.hasOwnProperty(createSql)) {
                createTasks.push(createSql);
            }
        }
        async.eachSeries(createTasks, (item, done) => {
            log.sInfo('checking create table ' + item);
            this.execute(tables[item], null, (err, conn, result) => {
                if (err) {
                    //log.sError('error occurs when checking create table ' + item);
                    log.sError(err.stack);
                    done(err);
                    return;
                }
                log.sInfo('checked create table ' + item);
                done(err);
            });
        }, (err) => {
            log.sDebug('checked all tables');
            next(err, 'tables');
        });
    }

    public addColumns(columns:string[][], next:(err, ret:string) => void):void {
        var i, name, sqls = {}, tasks = [];
        for (i = 0; i < columns.length; i += 1) {
            name = columns[i][0] + '-' + columns[i][1];
            sqls[name] = columns[i];
            tasks.push(name);
        }

        var sql = ["ALTER TABLE %s ADD COLUMN %s %s"];
        async.eachSeries(tasks, (item, done) => {
            log.sInfo('checking column ' + item);
            var col = sqls[item];
            this.existColumn(col[0], col[1], (err, conn, result) => {
                if (err) {
                    log.sError('error occurs when checking column ' + item);
                    done(err);
                } else {
                    if (result.length === 0) {
                        var sqldo = util.format.apply(util, sql.concat(col));
                        this.execute(sqldo, null, (err, conn, result) => {
                            if (err) {
                                log.sError('error occurs when execute add column ' + item);
                                done(err);
                            } else {
                                log.sInfo('checked column ' + item);
                                done(null);
                            }
                        });
                    } else {
                        done(null);
                    }
                }
            });
        }, (err) => {
            log.sDebug('checked all columns');
            next(err, 'columns');
        });
    }

    public addIndexes(indexes:any, next:(err, ret:string) => void):void {
        var i, tasks = [], sqls = {};
        for (i = 0; i < indexes.length; i += 1) {
            tasks.push(indexes[i][0]);
            sqls[indexes[i][0]] = indexes[i];
        }

        var sql = "CREATE INDEX ?? ON ??(??)";
        async.eachSeries(tasks, (item, done) => {
            log.sInfo('checking index ' + item);
            var index = sqls[item];
            this.existIndex(index[1], index[0], (err, conn, result) => {
                if (err) {
                    log.sError('error occurs when checking index ' + item);
                    done(err);
                } else {
                    if (result.length === 0) {
                        this.execute(sql, index, (err, conn, result) => {
                            if (err) {
                                log.sError('error occurs when execute create index ' + item);
                                done(err);
                            } else {
                                log.sInfo('checked index ' + item);
                                done(null);
                            }
                        });
                    } else {
                        done(null);
                    }
                }
            });
        }, (err) => {
            log.sDebug('checked all indexes');
            next(err, 'indexes');
        });
    }

    public fetchTableColumns(table:string, callback:(err, columns:{[columnName:string]:any}) => void):void {
        var sql = "show columns from ??";
        this.execute(sql, [table], (err, connnection, result) => {
            if (err) {
                callback(err, null);
                return;
            }

            var columns:{[columnName:string]:any} = {}, column:any = {};
            for(var i = 0; i < result.length; i += 1) {
                column = {
                    field: result[i].Field,
                    type: result[i].Type,
                    isNull: result[i].Null,
                    key: result[i].Key,
                    defaultVal: result[i].Default
                };
                columns[column.field] = column;
            }
            callback(null, columns);
        });
    }

}

export = MysqlConnection;