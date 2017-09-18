import express = require('express');
import log = require('./util/log');
var cmd = require('./share/cmd');

export var stateInfo = {
    canLogin: true,
    errorCode: null
};

export var config = null;
export var interceptor:any = null;

/**
 * 游戏发包入口
 * @param res
 * @param data
 */

function getClassName(o):any {
    return Object.prototype.toString.call(o).split(' '.slice(0, -1));
}

export function sendPB(res:express.Response, data:any) {
    if (!Array.isArray(data)) {
        data = [{cmd: data.$type.name, data: data}];
    }

    log.sInfo('url=%s, data=%j', res['req']['originalUrl'], data);
    for (var i = 0; i < data.length; i++) {
        if (!data[i].data['toBase64']) {
            log.sError('msg type error');
            return;
        }
        data[i] = {cmd: data[i].cmd, data: data[i].data.toBase64()};
    }
    res.json(data);
}

export function send(res:express.Response, data:any) {
    log.sInfo('url=%s, data=%j', res['req']['originalUrl'], data);
    res.send(data.toBase64());
}