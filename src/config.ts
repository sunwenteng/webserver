import zlib = require('zlib');
import fs = require('fs');
import tar = require('tar');
import async = require('async');
import ncp = require('ncp');

import ConfigStruct = require('./config/data/config_struct');
import index = require('../index');
import log = require('./util/log');
import Util = require('./util/game_util');

export var configMgr = new ConfigStruct.ConfigMgr();

export function reloadAllConfig() {
    var dataPath = index.sourceRoot + '/src/config/data/';
    configMgr.loadAllConfig(dataPath);
    log.sInfo('all config has been loaded');
}

export function updateConfigRevision(baseUrl:string, revision:number, callback:(err)=>void):void {
    async.waterfall([
        (next) => {
            if (!baseUrl || baseUrl === '') {
                next(new Error('config base url Error: baseUrl=' + baseUrl));
                return ;
            }
            downloadConfigData(baseUrl, revision, next);
        },
        (next) => {
            targzConfigData(revision, next);
        },
        (next) => {
            // TODO check tmp and current data config diff

            // do update config data
            var configPath = index.sourceRoot + '/src/config/';
            Util.deleteFileInDir(configPath + 'data', /.*\.json/, (err) => {
                if (err) {
                    log.sError('Config', 'deleteFileInDir Error: ', err.message);
                }
                ncp.ncp(configPath + 'tmp', configPath + 'data', {
                    filter: /^.*(tmp|\.json)$/,
                    clobber: true       //  if set to false, ncp will not overwrite destination files that already exist.
                }, (err) => {
                    if (err) {
                        log.sError('Config', 'ncp Error: configPath=' + configPath);
                    }
                    next(err);
                });
            });
        },

        (next) => {
            reloadAllConfig();
            next();
        }
    ], (err) =>{
        if (err) {
            console.log(err.message);
        }
        callback(err);
    });
}

function downloadConfigData(baseUrl:string, revision:number, callback:(err)=>void):void {
    var configPath = index.sourceRoot + '/src/config/';

    var fileName = 'dh-config-' + revision + '.tar.gz';
    var url = baseUrl + fileName;
    var dest = configPath + "archive/" + fileName;

    var archivePath = configPath + 'archive/';
    if (!fs.existsSync(archivePath)) {
        console.log('mkdir ' + archivePath);
        fs.mkdirSync(archivePath);
    }
    Util.httpDownload(url, dest, (err) => {
        if (err) {
            log.sError('Config', 'Download ' + url + ' Failed, ' + err.message);
            callback(err);
        } else {
            log.sInfo('Config', 'Download ' + url + ' Successfully, Destination=' + dest);
            callback(null);
        }
    });
}

function targzConfigData(revision, callback:(err)=>void):void {
    var configPath = index.sourceRoot + '/src/config/';
    var fileName = 'dh-config-' + revision + '.tar.gz';
    var src = configPath + "archive/" + fileName;

    var streamZlib = zlib.createGunzip();
    var streamRead = fs.createReadStream(src);
    var streamTar = tar.Extract({
        path: configPath + 'tmp',
        strip: 0
    });

    streamRead.pipe(streamZlib).pipe(streamTar);

    streamTar.on('finish', function () {
        console.log('streamTar done');
        callback(null);
    });
    streamTar.on('error', function (err) {
        console.log('streamTar Error: ' + err.stack);
        callback(err);
    });

    streamZlib.on('finish', function () {
        console.log('streamZlib done');
    });
    streamZlib.on('error', function (err) {
        console.log('streamZlib Error: ' + err.stack);
        callback(err);
    });

    streamRead.on('error', function (err) {
        console.log('streamRead Error: ' + err.stack);
    });
}