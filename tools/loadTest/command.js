"use strict";

const util = require('util');
const log = require('./log');

let mapIdName = {};

exports.getCodeId = function (msg) {
    return msg.$type.children[0].defaultValue;
};

exports.initOpCode = function (cmd) {
    for (let strCode in cmd) {
        let msg = cmd[strCode];
        if (!msg.$type || !msg.$type.children.length || msg.$type.children[0].name !== 'cmd_id')
            continue;

        let code = this.getCodeId(msg);
        if (!code) {
            continue;
        }

        if (mapIdName.hasOwnProperty(code)) {
            throw new Error('OpCode Duplicate: ' + strCode + ' code=' + code + ', map=' + mapIdName[cmd[strCode]]);
        }

        mapIdName[code] = msg;
    }
};

exports.decodeProtoBuf = function (opCode, data) {
    if (!mapIdName.hasOwnProperty(opCode)) {
        log.sError('OpCode Not Exist, opCode=' + opCode);
        return null;
    }

    let ret = null;
    try {
        ret = mapIdName[opCode].decode(data);
    }
    catch (err) {
        log.sError('data decode error, code=' + opCode);
    }

    return ret;
};

exports.encodeProtoBuf = function (msg) {
    let code = this.getCodeId(msg);
    let dataBuffer = msg.toBuffer();
    let size = 8 + dataBuffer.length;
    let buffer = new Buffer(size);
    buffer.writeUInt32LE(size, 0);
    buffer.writeUInt32LE(code, 4);
    // buffer.writeUInt32LE(dataBuffer.length, 8);
    dataBuffer.copy(buffer, 8);
    return buffer;
};