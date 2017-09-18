import GameUtil = require('../util/game_util');
import Enum  = require('../util/enum');
import async = require('async');
var cmd = require('../share/cmd')['cmd'];

function encodePBDataBase64(cmdName:string, data:any) {
    return new cmd[cmdName](data).toBase64();
}

function decodePBDataBase64(data:any) {
    data = JSON.parse(data);
    for (var i = 0; i < data.length; i++) {
        data[i].data = cmd[data[i].cmd].decode(data[i].data);
    }

    return data;
}

async.waterfall(
    [
        (cb) => {
            GameUtil.httpPost('http://172.16.1.84:5556/login?cmd=login',
                encodePBDataBase64('cs_login_login', {
                    username: 'swt4',
                    password: 'swt'
                }), (err, data) => {
                    if (err) {
                        return cb(err);
                    }
                    data = decodePBDataBase64(data);
                    console.log('%j', data);
                    cb(null, data[data.length - 1].data.token)
                }, Enum.HTTP_RES_DATA_TYPE.RAW_DATA);
        },
        (token, cb) => {
            GameUtil.httpPost('http://172.16.1.84:5555/game?cmd=enter',
                encodePBDataBase64('cs_game_enter', {
                    token: token
                }), (err, data) => {
                    if (err) {
                        return cb(err);
                    }
                    data = decodePBDataBase64(data);
                    console.log('%j', data);
                    cb(null, token)
                }, Enum.HTTP_RES_DATA_TYPE.RAW_DATA);
        },
        (token, cb) => {
            GameUtil.httpPost('http://172.16.1.84:5555/game?cmd=pve',
                encodePBDataBase64('cs_game_pve', {
                    token: token,
                    monsterId: 10001,
                    atkIds: [1, 2, 3, 4, 5, 6, 31]
                }), (err, data) => {
                    if (err) {
                        return cb(err);
                    }
                    data = decodePBDataBase64(data);
                    console.log('%j', data);
                    cb(null, data)
                }, Enum.HTTP_RES_DATA_TYPE.RAW_DATA);
        }
    ], (err, rets) => {
        if (err) {
            console.error(err['stack']);
        }
        else {
            console.log(rets);
        }
    }
);

