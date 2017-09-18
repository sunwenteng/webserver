import HttpServer = require('../http/http_server');
import GameUtil = require('../util/game_util');
import log = require('../util/log');
import WorldDB = require('../database/impl/world_db');
import RedisMgr = require('../redis/redis_mgr');
import async = require('async');
import sourceMapSupport = require('source-map-support');
import CtlMgr = require('../http/ctl_mgr');
import ConfigMgr = require('../config');
import Global = require('../global');

// 配置设置
Global.config = require('../config/untrack/server.json');
Global.interceptor = require('./game_interceptor');
// 日志输出目录初始化
log.init('gameserver');
// ts到js的映射预装
sourceMapSupport.install();
// web服务器实例
var server:HttpServer;
// 进程文件创建
GameUtil.createPidFile();
// 加载所有controller
CtlMgr.init(__dirname);
// 表加载
ConfigMgr.reloadAllConfig();
// 进程关闭事件注册
GameUtil.registerProcessEnd(() => {
    async.series(
        [
            (cb:(err) => void) => {
                WorldDB.shutDownDB(cb);
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
            WorldDB.init(Global.config['mysql']['worlddb'], cb);
        },
        (cb:(err) => void) => {
            // 服务器初始化
            server = new HttpServer();
            server.start(
                Global.config['server']['gameserver'],
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