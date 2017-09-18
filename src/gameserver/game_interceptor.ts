import Dispatcher = require('../http/dispatcher');
import RedisMgr = require('../redis/redis_mgr');
import ErrorCode = require('../util/error_code');
import async = require('async');
import Global = require('../global');

var config = Global.config['server']['gameserver']['interceptors'];

/**
 * 防刷和统计在线拦截器
 * @param uid
 * @param ip
 * @param callback
 */
function userMonitor(uid, ip, callback:(err:any, uid:number)=>void) {
    //没有配置，则绕过此步骤
    if (typeof(config['userMonitor']) == 'undefined') {
        return callback(ErrorCode.NO_ERROR, uid);
    }
    //如果isNeedMonitorReq防刷和isNeedStatOnline统计在线都没有开启，则绕过此步骤
    if (!(config['userMonitor']['isNeedMonitorReq']) && !(config['userMonitor']['isNeedStatOnline'])) {
        return callback(ErrorCode.NO_ERROR, uid);
    }
    var redis = RedisMgr.getInstance("monitorRedis");
    //如果仅仅配置了统计在线
    if (config['userMonitor']['isNeedStatOnline'] && !(config['userMonitor']['isNeedMonitorReq'])) {
        redis.set(uid, ip, 60, ()=> {
        });
        return callback(ErrorCode.NO_ERROR, uid);
    } else { //如果配置了防刷
        var maxReq = parseInt(config['userMonitor']['maxReq']);
        var perTime = parseInt(config['userMonitor']['perTime']);
        var key:any = (new Date()).valueOf();
        key = 'req_' + Math.ceil(parseInt(key) / (perTime * 1000)) + '_' + uid;
        redis.get(key, (error, reply) => {
            if (error) {
                return callback(ErrorCode.NO_ERROR, uid);
            }
            if (reply != null) {
                var hasReq = parseInt(reply);
                if (hasReq > maxReq) {
                    //如果配置了防刷，频繁请求时返回频繁请求的错误码
                    if (config['userMonitor']['isNeedMonitorReq']) {
                        // 将有问题的帐号IP保存在db=1中 TODO db最好有个定义的地方，后续补全吧
                        redis.set('bad_' + ip, uid, 0, () => {
                        }, 1);
                        return callback(ErrorCode.COMMON.REQ_FREQUENT, uid);
                    } else {
                        return callback(ErrorCode.NO_ERROR, uid);
                    }
                }
                //请求次数加1
                redis.incr(key, () => {
                    return callback(ErrorCode.NO_ERROR, uid);
                });
            } else {
                redis.set(key, 1, perTime, () => {
                    return callback(ErrorCode.NO_ERROR, uid);
                });
            }
        });
    }
}

/**
 * 登陆拦截器
 * @param args
 * @param callback
 */
function checkLogin(args:any, callback:(err:any, uid:number)=>void) {
    var token = args["token"];
    if (!token) {
        return callback(ErrorCode.COMMON.TOKEN_MISSING, 0);
    }
    //如果游戏需要维护登录状态，首先检查游戏是否已保存了token
    if (config['checkLogin']['needSave']) {
        var gameTokenRedis = RedisMgr.getInstance('gameTokenRedis');
        gameTokenRedis.get(token, (error, uid) => {
            if (error) {
                return callback(error, 0);
            }
            if (uid) {
                return callback(ErrorCode.NO_ERROR, uid);
            } else {
                //游戏没有查到这个token，则向帐号服务查询其是否有效
                checkAccountToken(token, (error, uid) => {
                    if (error) {
                        return callback(error, 0);
                    }
                    //如果帐号服务器验证有效，游戏要将该token保存
                    if (uid) {
                        //游戏保存token，并设置有效期
                        gameTokenRedis.set(token, uid, config['checkLogin']['gameSaveTokenTime'], ()=> {
                        });
                        return callback(ErrorCode.NO_ERROR, uid);
                    } else {
                        return callback(ErrorCode.COMMON.UID_MISSING, 0);
                    }
                });
            }
        });
    } else {
        checkAccountToken(token, (error, uid) => {
            if (error) {
                return callback(error, 0);
            }
            if (uid) {
                return callback(ErrorCode.NO_ERROR, uid);
            } else {
                return callback(ErrorCode.COMMON.UID_MISSING, 0);
            }
        });
    }
}
/**
 * 向帐号服务器检查token是否有效
 * @param token
 * @param callback
 */
function checkAccountToken(token:string, callback:(err, uid)=>void) {
    //检查账户服务的redis中，用户是否已登录
    var accountTokenRedis = RedisMgr.getInstance('accountTokenRedis');
    accountTokenRedis.hmget(token, ['uid'], (error, reply) => {
        return callback(error, reply['uid']);
    });
}


/**
 * 拦截器拦截方法入口
 * @param invoke
 * @param cb
 */
export function doFilter(invoke:Dispatcher.Invoke, cb:(err:any, uid?:any)=>void):void {
    if(config['ctlName'].indexOf(invoke.controllerName) != -1) {
        // 可以在这里添加自己的拦截器
        async.waterfall([
            (next:(err, uid, IP) => void) => {
                checkLogin(invoke.args, (err, uid)=> {
                    next(err, uid, invoke.args.IP);
                });
            },
            (uid, IP, next:(err, uid) => void) => {
                userMonitor(uid, IP, (error, uid) => {
                    next(error, uid);
                });
            }
        ], (err, uid) => {
            cb(err, uid);
        })
    }
    else {
        cb(ErrorCode.COMMON.CTL_NOT_INTERCEPT, 0);
    }
}