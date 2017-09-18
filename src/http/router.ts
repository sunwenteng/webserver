import express = require('express');
import url = require('url');
import CtlMgr = require('../http/ctl_mgr');
import ErrorCode = require('../util/error_code');
import Dispatcher = require('./dispatcher');
import log = require('../util/log');
import Global = require('../global');
var cmd = require('../share/cmd')['cmd'];

/**
 * 参数拼装解析
 * @param req
 * @param res
 * @return {undefined}
 */
export function index(req:express.Request, res:express.Response) {
    var urlData = url.parse(req.url);
    var ctlName = urlData.pathname;          //去掉controller路径的第一个'/'
    ctlName = ctlName.replace(/\/+/g, '');
    ctlName = ctlName.replace(/\/+$/g, '');

    try {
        // 如果服务不可用，阻挡用户请求
        if (!Global.stateInfo.canLogin) {
            Global.send(res, {error: Global.stateInfo.errorCode});
        }
        // 判断控制器是否存在
        if (!CtlMgr.hasCtl(ctlName)) {
            return Global.send(res, {error: ErrorCode.COMMON.CTL_NOT_FOUND});
        }

        var args = {};
        // 获取get参数
        if (urlData.query) {
            var querySplits = urlData.query.split('&');
            for (var Key in querySplits) {
                if (querySplits[Key]) {
                    var argSplits = querySplits[Key].split('=');
                    args[argSplits[0]] = argSplits[1];
                }
            }
        }
        // 如果请求方式为POST，将post参数合并到args中
        if (typeof req.body === 'object') {
            for (var key in req.body) {
                args[key] = req.body[key];
            }
        }
        else if(typeof req.body === 'string') {
            var pbData = cmd['cs_' + ctlName + '_'+ args['cmd']].decode(req.body);
            for (var key in pbData) {
                if(typeof pbData[key] !== 'function')
                    args[key] = pbData[key];
            }
        }

        var ipAddress = null;
        if (req && typeof(req.headers['x-forwarded-for']) != 'undefined') {
            var forwardedIpsStr = req.headers['x-forwarded-for'];
            var forwardedIps = forwardedIpsStr.split(',');
            ipAddress = forwardedIps[0];
        }

        if (req && !ipAddress) {
            ipAddress = req.ip;
        }
        args["IP"] = ipAddress;

        // 调度入队
        Dispatcher.push({controllerName: ctlName, args: args, req: req, res: res});
    } catch (e) {
        log.sError('error happen:' + e.stack);
        return Global.send(res, {error: ErrorCode.COMMON.SYSTEM_ERROR});
    }
}