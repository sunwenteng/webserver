"use strict";

const util = require('util');
const Command = require('./command');
const log = require('./log');

const MAX_PACKET_LEN = 81920;   // 包长上限
const HEAD_SIZE = 8;

class SocketBuffer {
    constructor() {
        //this.socketBuffer = new Buffer(MAX_PACKET_LEN);
        //this.socketBufferSize = 0;

        this.headBuffer = new Buffer(HEAD_SIZE);
        this.dataBuffer = null;
        this.resetBuffer();
    }

    readBuffer(cache, packetArray) {
        let rpos = 0, leftCacheSize = 0, writeSize = 0;
        while (rpos < cache.length) {
            writeSize = 0;
            leftCacheSize = cache.length - rpos;

            if (this.getLeftHeadSize() > 0) {
                // write head
                writeSize = Math.min(this.getLeftHeadSize(), leftCacheSize);
                this.writeHead(cache, rpos, writeSize);

            } else if (this.getLeftDataSize() > 0) {
                // write data
                writeSize = Math.min(this.getLeftDataSize(), leftCacheSize);
                this.writeData(cache, rpos, writeSize);
            }

            // must do
            rpos += writeSize;

            if (this.isFullPacket()) {
                this.handleFullPacket(packetArray);
            }
        }
        return true;
    }


    resetBuffer() {
        this.packetSize = -1;
        this.headBufferSize = 0;
        this.dataBufferSize = 0;
        this.dataBuffer = null;
    }

    getLeftHeadSize() {
        return HEAD_SIZE - this.headBufferSize;
    }

    getLeftDataSize() {
        return this.packetSize - HEAD_SIZE - this.dataBufferSize;
    }

    isFullPacket() {
        return this.getLeftHeadSize() === 0 && this.getLeftDataSize() === 0;
    }

    isOverMaxLimit() {
        return this.packetSize >= MAX_PACKET_LEN;
    }

    writeHead(data, rpos, size) {
        data.copy(this.headBuffer, this.headBufferSize, rpos, rpos + size);
        this.headBufferSize += size;
        if (this.headBufferSize >= HEAD_SIZE) {
            this.packetSize = this.headBuffer.readUInt32LE(0);
            //log.sWarn('packetSize=' + this.packetSize);
            if (!this.isOverMaxLimit()) {
                this.dataBuffer = new Buffer(this.packetSize - HEAD_SIZE);
            }
        }
    }

    getOpcode() {
        return this.headBufferSize >= HEAD_SIZE ? this.headBuffer.readUInt32LE(4) : 0;
    }

    writeData(data, rpos, size) {
        if (!this.isOverMaxLimit()) {
            data.copy(this.dataBuffer, this.dataBufferSize, rpos, rpos + size);
        }
        this.dataBufferSize += size;
    }

    handleFullPacket(packetArray) {
        let opCode = this.getOpcode();
        if (opCode > 0) {
            if (this.isOverMaxLimit()) {
                log.sError('SocketBuffer', 'OverMaxLimit, opCode=' + opCode + ', packetSize=' + this.packetSize +
                    ', maxSize=' + MAX_PACKET_LEN);
            } else {
                try {
                    let message = Command.decodeProtoBuf(opCode, this.dataBuffer);
                    if(message)
                        packetArray.push(message);
                    else {
                        packetArray.push(opCode);
                    }
                    //log.sWarn('decodeProtoBuf: opCode=' + opCode + ', packetSize=' + this.packetSize);
                } catch (err) {
                    log.sError('SocketBuffer', 'decodeProtoBuf Error: opCode=' + opCode + ', packetSize=' + this.packetSize +
                        ', message=\"' + err.message + '\"');
                }
            }

        } else {
            log.sError('SocketBuffer', 'opCode Error: opCode=' + opCode);
        }
        this.resetBuffer();
    }

    // read(data, pckArray) {
    //     let dataReadIdx = 0, copySize, readIdx, size, opCode, pckData;
    //     while (dataReadIdx < data.length) {
    //         copySize = Math.min(this.socketBuffer.length - this.socketBufferSize, data.length - dataReadIdx);
    //         data.copy(this.socketBuffer, this.socketBufferSize, dataReadIdx, copySize);
    //         this.socketBufferSize += copySize;
    //         dataReadIdx += copySize;
    //         readIdx = 0;
    //         while (readIdx < this.socketBufferSize) {
    //             if ((this.socketBufferSize - readIdx) < HEAD_SIZE) {
    //                 break;
    //             }
    //
    //             size = this.socketBuffer.readUInt32LE(readIdx);
    //             opCode = this.socketBuffer.readUInt32LE(readIdx + HEAD_SIZE);
    //
    //             console.log('------data=%d, readIdx=%d, socketBufferSize=%d, code=%d, size=%d', data.length, readIdx, this.socketBufferSize, opCode, size);
    //             // packet too long
    //             if (size > MAX_PACKET_LEN) {
    //                 console.error('Too Long Packet');
    //                 // TODO it is better not to destroy socket but to expand the socket.socketBuffer size
    //                 return false;
    //             }
    //
    //             if ((this.socketBufferSize - readIdx) < size) {
    //                 break;
    //             }
    //
    //             pckData = new Buffer(size - HEAD_SIZE);
    //             this.socketBuffer.copy(pckData, 0, readIdx + HEAD_SIZE, readIdx + size);
    //             let ret = Command.decodeProtoBuf(opCode, pckData);
    //             if (ret !== null) {
    //                 pckArray.push(ret);
    //             }
    //
    //             readIdx += size;
    //             console.log('data=%d, readIdx=%d, socketBufferSize=%d, code=%d, size=%d', data.length, readIdx, this.socketBufferSize, opCode, size);
    //             // log.sDebug('data=%d, readIdx=%d, socketBufferSize=%d, code=%d, size=%d', data.length, readIdx, this.socketBufferSize, opCode, size);
    //         }
    //
    //         if (readIdx !== this.socketBufferSize) {
    //             // align to head, so it is easy to operate
    //             this.socketBufferSize = this.socketBufferSize - readIdx;
    //             this.socketBuffer.copy(this.socketBuffer, 0, readIdx, this.socketBufferSize);
    //             console.log('align to head');
    //         } else {
    //             this.socketBufferSize = 0;
    //             console.log('full');
    //         }
    //     }

}

module.exports = SocketBuffer;