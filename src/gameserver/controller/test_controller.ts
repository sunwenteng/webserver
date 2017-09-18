/**
 * 这种控制器是不需要拦截器拦截的写法
 */

import log = require('../../util/log');
import WorldDB = require('../../database/impl/world_db');
import Role = require('../role');
import Dispatcher = require('../../http/dispatcher');

export function echo1(invoke:Dispatcher.Invoke):void {
    invoke.res.json('echo1: give ur args back, ret=' + JSON.stringify(invoke.args));
}

export function echo2(invoke:Dispatcher.Invoke):void {
    invoke.res.json('echo2: give ur fucking args back, ret=' + JSON.stringify(invoke.args));
}