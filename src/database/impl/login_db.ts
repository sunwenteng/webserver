import MysqlConnection = require('../mysql_connection');
import async = require('async');
import mysql = require('mysql');
import log = require('../../util/log');

export var TABLE_SPLIT_NUM = 10;
export var conn:MysqlConnection;

export function init(config:any, callback:(err) => void):void {
    conn = new MysqlConnection();
    conn.startDb({
        name: 'world',
        connectionLimit: config.connectionLimit,
        host: config.hostname,
        user: config.user,
        password: config.password,
        database: config.database,
        charset: 'UTF8_GENERAL_CI',
        supportBigNumbers: true
    });

    var tables:{[tableName:string]:string} = {};
    var columns = [];
    var indexes = [];

    tables['passport'] = "CREATE TABLE IF NOT EXISTS passport (" +
        "uid 	        BIGINT(20) 	UNSIGNED 	NOT NULL AUTO_INCREMENT," +
        "nickname 		VARCHAR(50) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "headimgurl 	VARCHAR(200) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "token       	VARCHAR(64) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "openid      	VARCHAR(64) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "username 		VARCHAR(50) CHARACTER SET utf8," +
        "password 		VARCHAR(50) CHARACTER SET utf8," +
        "UNIQUE (username), " +
        "PRIMARY KEY (uid)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;";

    columns = columns.concat([
        //['passport', 'username', "VARCHAR(50) CHARACTER SET utf8 NOT NULL DEFAULT ''"],
        // add new update column here
    ]);

    async.waterfall([
            (next) => {
                conn.createTables(tables, (err, info) => {
                    if (err) {
                        log.sError('check ' + info + ' failed');
                    }
                    next(err);
                });
            },
            (next) => {
                conn.addColumns(columns, (err, info) => {
                    if (err) {
                        log.sError('check ' + info + ' failed');
                    }
                    next(err);
                });
            },
            (next) => {
                conn.addIndexes(indexes, (err, info) => {
                    if (err) {
                        log.sError('check ' + info + ' failed');
                    }
                    next(err);
                });
            }
        ], (err) => {
            if (err) {
                callback(err);
                return;
            }
            log.sInfo('checked all tables, columns, indexes');
            callback(null);
        }
    );

    setInterval(() => {
        conn.execute('select 1', null, () => {
            log.sInfo('keep mysql alive');
        });
    }, 1000 * 3600);
}

export function getDBTime(callback:(err, dbTime:number) => void):void {
    var sql = 'select unix_timestamp() as dbTime';
    conn.execute(sql, null, (err, connection, result) => {
        if (err) {
            callback(err, 0);
            return;
        }

        callback(null, result[0].dbTime);
    });
}

export function shutDownDB(callback:(err) => void):void {
    conn.closeDb((err) => {
        callback(err);
    });
}