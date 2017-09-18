/**
 * 网络协议调度器
 */
import express = require('express');
import log = require('../util/log')
import ErrorCode = require('../util/error_code');
import CtlMgr = require('./ctl_mgr')
import Global = require('../global');
var cmd = require('../share/cmd')['cmd'];
/**
 * 协议调度结构
 */
export interface Invoke {
    controllerName: string;
    args: any;
    req: express.Request;
    res: express.Response;
}

/**
 * 用户协议调度队列
 */
interface InvokesInfo {
    list: Invoke[]; // 收包队列
    current: Invoke; // 当前处理的包
}

/**
 * 所有用户协议调度队列
 * @type {{}}
 */
var users:{[uid:string]:InvokesInfo} = {};

/**
 * 直接查找控制器，直接调用（不需要拦截的ctl）
 * @param invoke
 */
function processCtl(invoke) {
    var ctl = CtlMgr.getCtl(invoke.controllerName);
    var cmd = invoke.args['cmd'];
    if (typeof(ctl[cmd]) != 'function') {
        Global.send(invoke.res, {error: ErrorCode.COMMON.CTL_FUNC_NOT_FOUND});
    }
    else {
        ctl[cmd](invoke);
    }
}

/**
 * 协议入队
 * @param invoke
 */
export function push(invoke:Invoke):void {
    // 协议拦截器判断
    log.sInfo('url=%s, data=%j', invoke.req.originalUrl, invoke.args);
    if (Global.interceptor && Global.interceptor['doFilter']) {
        Global.interceptor['doFilter'](invoke, (err, uid)=> {
            if (err instanceof  Error) {
                log.sError('system error, stack=' + err['stack']);
                Global.sendPB(invoke.res, new cmd['sc_' + invoke.controllerName + '_' + invoke.args['cmd']]({error: err}));
            }
            // 控制器不需要拦截，直接查找控制器进行执行
            else if (err == ErrorCode.COMMON.CTL_NOT_INTERCEPT) {
                processCtl(invoke);
            }
            // 出现参数行或者业务自定义错误
            else if (err != ErrorCode.NO_ERROR) {
                log.sError('data error, missing data or too frequent, code=' + err);
                Global.sendPB(invoke.res, new cmd['sc_' + invoke.controllerName + '_' + invoke.args['cmd']]({error: err}));
            }
            // 正常通过游戏验证，进行[游戏控制器]执行
            else {
                add(parseInt(uid), invoke);
            }
        });
    }
    else {
        processCtl(invoke);
    }
}

/**
 * 回包，同时弹出下一个可用协议处理
 * @param uid
 * @param data
 * @param error
 */
export function pop(uid:number, data:any, error?:any):void {
    var user = users[uid];
    if (user) {
        if (user["current"]) {
            var res = user["current"]["res"];
            if (error) {
                data = data || {};
                data.error = error;
                Global.sendPB(res, data);
            }
            else if (data) {
                Global.sendPB(res, data);
            }
            else {
                log.sError('bad use pop! please check your program!');
                throw "bad use pop, no res data!";
            }
            user["current"] = null;
            next(uid);
        }
        else {
            log.sError('uid %s pop more than once!', uid);
            throw "pop operate more than once!";
        }
    }
}

function add(uid:number, invoke:Invoke):void {
    if (!users[uid]) {
        users[uid] = {"list": [], "current": null};
    }
    users[uid]["list"].push(invoke);
    next(uid);
}

function next(uid:number):void {
    var user = users[uid];
    if (user) {
        if (!user["current"]) {
            if (user["list"].length) {
                user["current"] = user["list"].shift();
                execute(uid, user["current"]);
            }
        }
    }
}

function execute(uid:number, invoke:Invoke):void {
    var controller = invoke.controllerName,
        args = invoke.args;

    var cmd = args["cmd"];
    if (cmd) {
        var ctl = CtlMgr.getCtl(controller);
        // 不用new，单线程没有问题
        if (typeof(ctl[cmd]) != 'function') {
            pop(uid, null, ErrorCode.COMMON.CTL_FUNC_NOT_FOUND);
        }
        else {
            try {
                ctl[cmd](uid, args);
            }
            catch (err) {
                log.sError(err);
                pop(uid, ErrorCode.COMMON.SYSTEM_ERROR);
            }
        }
    }
    else {
        pop(uid, null, ErrorCode.COMMON.CTL_FUNC_NOT_FOUND);
    }
}

function clear(uid:number):void {
    delete users[uid];
}