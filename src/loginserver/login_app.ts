import HttpServer = require('../http/http_server');
import GameUtil = require('../util/game_util');
import log = require('../util/log');
import LoginDB = require('../database/impl/login_db');
import RedisMgr = require('../redis/redis_mgr');
import async = require('async');
import sourceMapSupport = require('source-map-support');
import CtlMgr = require('../http/ctl_mgr');
import Global = require('../global');

// 配置设置
Global.config = require('../config/untrack/server.json');
Global.interceptor = null;
// ts到js的映射预装
sourceMapSupport.install();
// web服务器实例
var server:HttpServer;
// 日志输出目录初始化
log.init('loginserver');
// 进程文件创建
GameUtil.createPidFile();
// 加载所有controller
CtlMgr.init(__dirname);
// 进程关闭事件注册
GameUtil.registerProcessEnd(() => {
    async.series(
        [
            (cb:(err) => void) => {
                LoginDB.shutDownDB(cb);
            }
        ],
        // if any of above err or all finish
        (err) => {
            if (err) {
                log.sError(err['stack']);
                process.nextTick(() => {
                    process.exit(1);
                });
            }
            else {
                log.sInfo('server has shutdown successfully');
                process.exit(0);
            }
        }
    );
});

async.series(
    [
        (cb:(err) => void) => {
            // 数据库初始化
            LoginDB.init(Global.config['mysql']['logindb'], cb);
        },
        (cb:(err) => void) => {
            // 服务器初始化
            server = new HttpServer();
            server.start(
                Global.config['server']['loginserver'],
                cb
            );
        }
    ],
    // if any of above err or all finish
    (err) => {
        if (err) {
            log.sError(err['stack']);
            process.nextTick(() => {
                process.exit(1);
            });
        }
        log.sInfo('server has started');
    }
);

console.log(1);