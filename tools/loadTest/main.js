"use strict";

const command = require('./command');
const SocketBuffer = require('./socket_buffer');
const net = require('net');
const log = require('./log');

const c2s = require('./proto/c2s').Protocol.C2S;
const s2c = require('./proto/s2c').Protocol.S2C;

//-----------------params------------------
const connectCnt = 100;
const defaultVersion = '1.2.0';
const defaultResVersion = 'unknown';
const defaultServerId = 1;

// login server id
const defaultIp = '123.59.128.118';
const defaultPort = 7779;

// const defaultIp = '172.16.1.106';
// const defaultPort = 5566;
//-----------------params------------------

// const skillIdArray = [7001101];
const bFullLog = false;
const defaultScene = '4-101';

//-----------------main--------------------
log.init(__dirname);

command.initOpCode(c2s);
command.initOpCode(s2c);

log.sInfo('finish init');

let allInterval = {};
let totoalSuccessCnt = 0;

class TcpClient {
    constructor(port, ip, connectionId, uid, firstPck) {
        this.pid = uid;
        this.socketBuffer = new SocketBuffer();
        this.client = null;
        this.connectionId = 0;

        this.battleClock = [];
        this.sendFreq = 0;
        this.recvFreq = 0;
        this.ping = 0;
        this.delta = 0;
        this.initTime = 0;
        this.idx = 0;

        this.client = net.connect(port, ip);
        this.client.on('connect', () => {
            this.connectionId = connectionId;
            log.uInfo(this.pid, 'connection ' + this.connectionId + ' connected');
            this.send(firstPck);

            if (firstPck.$type.name === 'CS_BATTLE_MULTI_CONNECT') {
                setInterval(() => {
                    this.send(new c2s['CS_BATTLE_MULTI_HEARTBEAT']());
                }, 3000);
            }
            else if (firstPck.$type.name === 'CS_GAME_AUTH') {
                setInterval(() => {
                    this.send(new c2s['CS_ECHO']({msg: 'robot' + this.pid}));
                }, 30000);
            }
        });

        this.client.on('data', (data) => {
            let retArray = [], pck, name;
            this.socketBuffer.readBuffer(data, retArray);
            for (let i = 0; i < retArray.length; ++i) {
                pck = retArray[i];
                // decode error filled with opcode
                if (typeof pck === 'number') {
                    // SC_BATTLE_MULTI_INIT
                    if (pck === 20650) {
                        allInterval['clock' + this.pid] = setInterval(() => {
                            if (this.sendFreq >= 8) {
                                clearInterval(allInterval['clock' + this.pid]);
                                delete allInterval['clock' + this.pid];
                                return;
                            }

                            ++this.sendFreq;
                            let now = Math.round(new Date().getTime() / 1000);
                            this.battleClock.push([now]);
                            this.send(new c2s['CS_BATTLE_MULTI_SYNC_TIME_REQ']({
                                idx: ++this.idx,
                                clientTs: now
                            }));
                        }, 100);
                    }
                    continue;
                }
                name = pck.$type.name;
                if (bFullLog && name !== 'SC_BATTLE_MULTI_UPDATE')
                    log.uInfo(this.pid, 'recv, code=%d, name=%s, data=%j', command.getCodeId(pck), name, pck);

                if (name === 'SC_INIT_COMPLETE') {
                    this.send(new c2s['CS_ROOM_GET_INFO']({
                        root_room: defaultScene,
                        depth: 0
                    }));
                }
                else if (name === 'SC_ROOM_UPDATE_INFO') {
                    let findRoomId = -1;
                    for (let j = 0; j < pck.room_info.length; j++) {
                        let room = pck.room_info[j];
                        if (room.max_num !== -1 && room.current_num !== -1 &&
                            room.max_num > room.current_num) {
                            findRoomId = room.room_id;
                            break;
                        }
                    }

                    if (findRoomId !== -1) {
                        this.send(new c2s['CS_ROOM_JOIN']({
                            room_id: findRoomId
                        }));
                    }
                    else {
                        this.send(new c2s['CS_ROOM_GET_INFO']({
                            root_room: defaultScene,
                            depth: 0
                        }));
                    }
                }
                else if (name === 'SC_BATTLE_SERVER_INFO') {
                    new TcpClient(pck.server_port, pck.server_ip, this.connectionId + 100000000, this.pid, new c2s['CS_BATTLE_MULTI_CONNECT']({
                        id: pck.team_id
                    }));
                }
                else if (name === 'SC_BATTLE_MULTI_SYNC_TIME_RES') {
                    ++this.recvFreq;

                    this.battleClock[pck.idx - 1].push(new Date().getTime() / 1000);

                    if (this.recvFreq === 8 && this.battleClock[7].length === 2) {
                        let sum = 0;
                        for (let j = 0; j < this.battleClock.length; j++) {
                            let obj = this.battleClock[j];
                            sum += (obj[1] - obj[0]);
                        }

                        this.ping = sum / 8;
                        this.delta = pck.serverTs - new Date().getTime() / 1000 + this.ping / 2;

                        this.send(new c2s['CS_BATTLE_MULTI_READY']());
                        ++totoalSuccessCnt;
                    }
                }
                else if (name === 'SC_BATTLE_MULTI_START') {
                    this.initTimeRecordTime = new Date().getTime() / 1000;
                    this.initTime = pck.battleTs + this.initTimeRecordTime - pck.ts + this.delta;
                    setInterval(() => {
                        let ts = Math.max(0, new Date().getTime() / 1000 - this.initTimeRecordTime + this.initTime);
                        // log.sInfo('-----------' + ts + '-----------');
                        this.send(new c2s['CS_BATTLE_MULTI_OPR']({
                            uid: this.pid,
                            ts: ts,
                            command: 5,
                            argsInt: [3]
                        }));
                    }, 2000);

                    // setInterval(() => {
                    //     let ts = Math.max(0, new Date().getTime() / 1000 - this.initTimeRecordTime + this.initTime);
                    //     let angle = randInt(0, 360);
                    //     // log.sInfo('-----------' + ts + '-----------');
                    //     this.send(new c2s['CS_BATTLE_MULTI_OPR']({
                    //         uid: this.pid,
                    //         ts: ts,
                    //         command: 6,
                    //         argsFloat: [Math.cos(angle), 0, Math.sin(angle)]
                    //     }))
                    // }, 100);
                    //
                    // setInterval(() => {
                    //     let ts = Math.max(0, new Date().getTime() / 1000 - this.initTimeRecordTime + this.initTime);
                    //     // log.sInfo('-----------' + ts + '-----------');
                    //     this.send(new c2s['CS_BATTLE_MULTI_OPR']({
                    //         uid: this.pid,
                    //         ts: ts,
                    //         command: 14,
                    //         argsInt: [skillIdArray[randInt(0, skillIdArray.length)], 0]
                    //     }))
                    // }, 80);
                }
                else if (name === 'SC_BATTLE_MULTI_UPDATE') {
                    if (pck.command === 41) {
                        let ts = Math.max(0, new Date().getTime() / 1000 - this.initTimeRecordTime + this.initTime);
                        // log.sInfo('!-----------' + ts + '-----------!');
                        this.send(new c2s['CS_BATTLE_MULTI_OPR']({
                            uid: this.pid,
                            ts: ts,
                            command: 12,
                        }));
                    }

                }
                else if (name === 'SC_ROOM_JOIN_RESULT') {
                    if (pck.join_result !== 0) {
                        this.send(new c2s['CS_ROOM_GET_INFO']({
                            root_room: defaultScene,
                            depth: 0
                        }));
                    }
                }
                else if (name === 'LOGIN_SC_LOGIN_RESULT') {
                    if (pck.result === 0) {
                        this.send(new c2s['LOGIN_CS_GET_SERVER']({
                            res_version: defaultResVersion,
                            version: defaultVersion
                        }));
                    }
                    else {
                        log.uError('login error, pid=' + this.pid + ', result=' + pck.result);
                        this.client.end();
                    }
                }
                else if (name === 'LOGIN_SC_SERVER_LIST') {
                    this.send(new c2s['LOGIN_CS_CHOOSE_SERVER']({
                        server_id: defaultServerId,
                    }));
                }
                else if (name === 'LOGIN_SC_CHOOSE_RESULT') {
                    let roleId = pck.role_id;
                    new TcpClient(pck.port, pck.ip, this.connectionId + 10000, roleId, new c2s['CS_GAME_AUTH']({
                        role_id: roleId,
                        device: 'device' + roleId,
                        device_type: 'device_type' + roleId,
                        device_uid: 'device_uid' + roleId,
                        reconnect: false
                    }));
                    this.client.end();
                }
            }
        });

        this.client.on('end', () => {
            log.uError(this.pid, 'connection ' + this.connectionId + ' disconnected');
            //--totoalSuccessCnt;
        });

        this.client.on('error', (msg) => {
            log.sError(msg);
        });
    }

    send(msg) {
        this.client.write(command.encodeProtoBuf(msg));
        let name = msg.$type.name;
        if (bFullLog)
            log.uInfo(this.pid, 'send, code=%d, name=%s, data=%j', command.getCodeId(msg), msg.$type.name, msg);
    }
}

// function randInt(low, high) {
//     return Math.floor(Math.random() * Math.abs(high - low) + Math.min(low, high));
// }

setInterval(() => {
    log.sInfo('total connect count=%d, success=%d', connectCnt, totoalSuccessCnt);
}, 3000);

let account = 0, client = null;
for (let i = 0; i < connectCnt; ++i) {
    account = 'rzr' + (i + 1);
    client = new TcpClient(defaultPort, defaultIp, i + 1, account, new c2s['LOGIN_CS_ACCOUNT_LOGIN']({
        account: account,
        pwd_md5: 'c4ca4238a0b923820dcc509a6f75849b',
        platform_id: 0
    }));
}