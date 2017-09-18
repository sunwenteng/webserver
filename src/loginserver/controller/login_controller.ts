/**
 * 这种控制器是不需要拦截器拦截的写法
 */

import log = require('../../util/log');
import Dispatcher = require('../../http/dispatcher');
import index = require('../../../index')
import express = require('express');
import Enum = require('../../util/enum');
import SDK = require('../sdk');
import Global = require('../../global');
import LoginDB = require('../../database/impl/login_db');
import ErrorCode = require('../../util/error_code');
import RedisMgr = require('../../redis/redis_mgr');
import TimeUtil = require('../../util/time');
import GameUtil = require('../../util/game_util');
var cmd = require('../../share/cmd')['cmd'];

var config = Global.config;

var weixinappId = config['info']['weixinappid'];
var weixinsecret = config['info']['weixinsecret'];
var loginValidTime = 86400 * 1000;

// TODO need to be put on cdn
export function index(invoke:Dispatcher.Invoke):void {
    //var token = invoke.args['token'];
    //var uid = invoke.args['uid'];
    //invoke.res.sendFile(index.sourceRoot + '/src/page/index.html');
}

export function login(invoke:Dispatcher.Invoke):void {
    var username = invoke.args['username'];
    var password = invoke.args['password'];

    LoginDB.conn.execute("select uid, token from passport where ?", {username: username}, (err, conn, result) => {
        if (err) {
            throw err;
        }

        if (result.length) {
            var accountTokenRedis = RedisMgr.getInstance('accountTokenRedis');
            accountTokenRedis.del(result[0].token, () => {
                processLogin(result[0].uid);
            });
        }
        else {
            LoginDB.conn.execute("insert into passport set ?", {
                username: username,
                password: password
            }, (err, conn, result) => {
                if (err) {
                    throw err;
                }
                processLogin(result.insertId);
            });
        }
    });

    function processLogin(uid:number) {
        var accountTokenRedis = RedisMgr.getInstance('accountTokenRedis');
        var token = TimeUtil.realNow() + '' + uid + +'' + GameUtil.randInt(0, 1000);
        accountTokenRedis.hmset(token, {uid: uid}, loginValidTime, () => {
            Global.sendPB(invoke.res, new cmd['sc_login_login']({token: token}));
        });
    }
}

export function wx_login(invoke:Dispatcher.Invoke):void {
    var gameid = invoke.args['gameid'];

    if (invoke.req.headers['user-agent'].indexOf('MicroMessenger') === -1) {
        //invoke.res.sendFile(index.sourceRoot + '/src/page/index.html?gameid=' + gameid);
    }
    else {
        // TODO
        var urlInfo = '';
        var redirectUrl =
            invoke.res.redirect(urlInfo);
    }
}

export function wx_ret(invoke:Dispatcher.Invoke):void {
    var code = invoke.args['code'];
    if (code) {
        accessToken(code, (uid, token)=> {
            var now = parseInt((Date.now() / 1000).toString());
            // TODO
            var url = 'aaa' + now + '&token=' + token + '&uid=' + uid;
            invoke.res.redirect(url);
        })
    }

    function accessToken(code:any, cb:(uid, token)=>void):void {
        //TODO
        var url = 'aaa' + weixinappId + '&secret=' + weixinsecret + '&code=' + code + 'grant_type=authorization_code';
        GameUtil.httpGet(url, (err, data) => {
            if (err) {
                throw err;
            }

            var obj = JSON.parse(data);
            getUserInfo(obj['token'], obj['openid'], (headimgurl, nickname, openid) => {
                if (err) {
                    throw err;
                }

                // insert
                var ret = GameUtil.md5(code);

                SDK.insert(headimgurl, nickname, openid, ret, (uid)=> {
                    cb(uid, obj['token']);
                });
            });
        }, Enum.HTTP_RES_DATA_TYPE.RAW_DATA, 15);
    }

    function getUserInfo(token, openId, cb:(headimgurl, nickname, openid)=>void) {
        //TODO
        var url = 'aaa' + token + '&openid=' + openId + '&lang=zh_CN';
        GameUtil.httpGet(url, (err, data) => {
            if (err) {
                throw err;
            }
            var obj = JSON.parse(data);
            cb(obj['headimgurl'], obj['nickname'], obj['openid']);
        }, Enum.HTTP_RES_DATA_TYPE.RAW_DATA, 15);
    }
}