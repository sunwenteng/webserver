import os = require('os');
import fs = require('fs');
import path = require('path');
import http = require('http');
import async = require('async');
import log = require('./log');
import request = require('request');
import Enum = require('./enum')
import ErrorCode = require('./error_code');
import crypto = require('crypto');

export function md5(param:string):string {
    var md5sum = crypto.createHash('md5');
    md5sum.update( param, 'utf-8' );
    return md5sum.digest('hex');
}

export function sha1(param:string):string {
    var md5sum = crypto.createHash('sha1');
    md5sum.update( param, 'utf-8' );
    return md5sum.digest('hex');
}

export function isInteger(n:number) {
    return Number(n) === n && n % 1 === 0;
}

export function isFloat(n:number) {
    return n === Number(n) && n % 1 !== 0
}

export function createArray(size:number, initValue:any):any[] {
    var ret = [];
    for (var i = 0; i < size; i++) {
        ret.push(initValue);
    }
    return ret;
}

export function copyObject(obj:any):any {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    var result = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = copyObject(obj[key]);
        }
    }
    return result;
}

export function addObject(left:any, right:any):void {
    for (var key in right) {
        if (right.hasOwnProperty(key)) {
            if (isNaN(parseInt(right[key]))) {
                continue;
            }
            if (!left[key]) {
                left[key] = right[key];
            } else {
                left[key] += right[key];
            }
        }
    }
}

export function copyArray(array:Object[]):any[] {
    var tempArray:any[] = [];

    array.forEach((item)=> {
        var temp = copyObject(item);
        tempArray.push(temp);
    });

    return tempArray;
}

/**
 * 在预排序数组二分查找search的下界位置
 * 说明：查找第一个**大于等于**search的下标
 * @param search    查找内容
 * @param length    数组长度
 * @param getValue  获取比较值方法
 * @returns {number}    下界的下标
 */
export function lowerBound(search:number, length:number, getValue:(index:number)=>number):number {
    var left = 0, mid = 0, right = length, value;
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        value = getValue(mid);
        if (value >= search) {
            right = mid;
        } else if (value < search) {
            left = mid + 1;
        }
    }
    return left;
}

/**
 * 在预排序数组二分查找search的上界位置
 * 说明： 查找第一个**大于**search的下标
 * @param search    查找内容
 * @param length    数组长度
 * @param getValue  获取比较值方法
 * @returns {number}    上界的下标
 */
export function upperBound(length:number, search:number, getValue:(index:number)=>number):number {
    var left = 0, mid = 0, right = length, value;
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        value = getValue(mid);
        if (value > search) {
            right = mid;
        } else if (value <= search) {
            left = mid + 1;
        }
    }
    return left;
}


/**
 *
 * @param obj
 * @return {boolean}
 */
export function isEmpty(obj:any):boolean {
    // null and undefined are "empty"
    if (obj === null) {
        return true;
    }

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) {
        return false;
    }
    if (obj.length === 0) {
        return true;
    }

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }

    return true;
}

/**
 * get random [0, 100]
 * @return {number}
 */
export function randChance():number {
    return Math.floor(Math.random() * 101);
}

/**
 * get random float number (high <= low also ok)
 *      Math.random return number [0.0, 1.0)
 * @param low
 * @param high
 * @return {number}
 */
export function randFloat(low:number, high:number):number {
    return Math.random() * Math.abs(high - low) + Math.min(low, high);
}

/**
 * get random array sequence
 * @param low
 * @param high
 * @return {number}
 */
export function randInt(low:number, high:number):number {
    return Math.floor(Math.random() * Math.abs(high - low) + Math.min(low, high));
}

/**
 * get random array sequence
 * @param array
 * @param count - if not given, will rand the whole length of array
 * @return {number[]}
 */
export function randArray(array:number[], count:number):number[] {
    var i, cnt = Math.min(array.length, count || array.length), pos = 0, tmp;
    for (i = 0; i < cnt - 1; i += 1) {
        pos = randInt(i + 1, array.length);
        tmp = array[i];                 // see more about the performance of swap two values in http://jsperf.com/swap-two-numbers-without-tmp-var/9
        array[i] = array[pos];          // use [with a tmp var] for it support not only number value arrays
        array[pos] = tmp;
    }
    return array;
}

/**
 * TODO
 * @param array
 * @param count
 * @param bRepeat ? 暂时没用
 * @return {Array}
 */
export function randByWeight(array:number[], count:number, bRepeat?:boolean):number[] {
    var i, sum:number = 0, result:number[] = [],
        repeat:boolean = bRepeat || false,
        cnt:number = Math.min(array.length, count || array.length),
        value:number = 0;
    if (cnt === 0) {
        return [];
    }

    for (i = 0; i < array.length; i += 1) {
        sum += array[i];
    }
    if (isNaN(sum)) {
        return [];
    }

    var j = 0, used = {};
    for (i = 0; i < cnt; i += 1) {
        value = randInt(0, sum);

        for (j = 0; j < array.length - i; j += 1) {
            if (!repeat && used[j]) {
                continue;
            }
            if (array[j] > value) {
                break;
            }
            value -= array[j];
        }

        result.push(j);

        if (!repeat) {
            used[j] = true;
        }
    }

    return result;
}

export function randOneByWeight(array:number[]):number {
    return array.length === 0 ? null : randByWeight(array, 1, false)[0];
}

export function randObjectByWeight(obj:{[key:number]:number}, count:number, bRepeat?:boolean):number[] {
    var keys = Object.keys(obj), values = [];
    keys.forEach((key) => {
        values.push(obj[key]);
    });
    var rand = randByWeight(values, count, bRepeat);
    var result:number[] = [];
    rand.forEach((pos) => {
        result.push(parseInt(keys[pos]));
    });
    return result;
}

export function randOneObjectByWeight(obj:{[key:number]:number}):number {
    var result = randObjectByWeight(obj, 1, false);
    return result.length === 0 ? null : result[0];
}


/**
 * TODO
 * @param rate
 * @return boolean
 */
export function selectByPercent(rate:number):boolean {
    return rate >= randChance();
}
/**
 * TODO
 * @param rate
 * @return boolean
 */
export function selectByTenThousand(rate:number):boolean {
    return rate >= randChance();
}
/**
 * @param obj
 * @return {Array}
 */
export function objectToArray(obj:any):any[] {
    var arr = [];
    for (var key in obj) {
        arr.push(obj[key]);
    }
    return arr;
}

var pidFile;
/**
 * 注册应用关闭事件
 * @param callback
 */
export function registerProcessEnd(callback:()=>void):void {
    process.on('cleanup', () => {
        if (pidFile !== null && fs.existsSync(pidFile)) {
            fs.unlink(pidFile);
        }
        callback();
    });

    process.on('beforeExit', () => {
        console.log('beforeExit');
    });

    process.on('exit', () => {
        console.log('exit');
    });

    process.on('SIGINT', () => {
        process.emit('cleanup');
        //console.log('got signal sigint');
        //process.exit(0);
    });

    process.on('uncaughtException', (e:Error) => {
        log.sError(e['stack']);
        //process.exit(99);
    });
}

export function createPidFile():void {
    pidFile = path.join(process.cwd(), '/.pid');
    fs.writeFileSync(pidFile, process.pid);
}

export function stringInsert(idx:number, str:string, strAppend:string):string {
    if(idx > str.length) {
        log.sError('string Append error, idx=%d, str=%s, strAppend=%s', idx, str, strAppend);
    }
    else if(idx === str.length) {
        return (str + strAppend);
    }
    else if(idx === 0) {
        return (strAppend + str);
    }
    else {
        var start = str.substring(0, idx),
            mid = strAppend,
            end = str.substring(idx);

        return (start + mid + end);
    }
}

export function stringReverse(str:string):string {
    return str.split('').reverse().join('');
}

export function fetchFileList(path:string, reg?:RegExp):string[] {
    if (path[path.length - 1] !== '/') {
        path = path + '/';
    }
    var fileList:string[] = [];
    var fileNames = fs.readdirSync(path);
    fileNames.forEach((fileName) => {
        var fullPath = path + fileName;
        var stat = fs.statSync(fullPath);
        if (!stat.isDirectory()) {
            if (reg) {
                if (reg.test(fileName)) {
                    fileList.push(fileName);
                }
            } else {
                fileList.push(fileName);
            }
        }
    });
    return fileList;
}

export function httpDownload(url, dest, callback) {
    var file:fs.WriteStream = fs.createWriteStream(dest);
    http.get(url, (response) => {
        if (response.statusCode !== 200) {
            callback(new Error('http response status code Error: ' +
                'code=' + response.statusCode + ', message=' + response.statusMessage));
            return ;
        }

        response.pipe(file);
        file.on('finish', () => {
            //file.closeS();  // close() is async, call cb after close completes.
            file.end();
            callback(null);
        });
    }).on('error', (err) => { // Handle errors
        fs.unlink(dest); // Delete the file async. (But we don't check the result)
        if (callback) callback(err.message);
    });
}

export function deleteFileInDir(dir:string, reg:RegExp, callback:(err)=>void):void {
    if (dir[dir.length - 1] !== '/') {
        dir = dir + '/';
    }
    fs.readdir(dir, (err, fileNames) => {
        async.eachSeries(fileNames, (fileName, next) => {
            var fullPath = dir + fileName;
            var stat = fs.statSync(fullPath);
            if (stat.isFile()) {
                if (reg) {
                    if (reg.test(fileName)) {
                        fs.unlink(fullPath, next);
                    } else {
                        next(null);
                    }
                } else {
                    fs.unlink(fullPath, next);
                }
            } else {
                next(null);
            }
        }, (err) => {
            callback(err);
        });
    });
}

/**
 * @example: httpGet('http://10.1.1.156/test?cmd=redis',function(error,body){},'json')
 *      获取http://10.1.1.156/test?cmd=redis返回的结果并解析为json对象
 */
export function httpGet(url:string, callback:(err, data)=>void, dataType?:Enum.HTTP_RES_DATA_TYPE, timeout?:number) {
    var options = {'url': url};
    typeof(timeout) != 'undefined' ? options['timeout'] = timeout : '';
    request.get(options, (error, response, body) => {
        var result = parseHttpResBody(error, response, body, dataType);
        return callback(result.error, result.data);
    });
}

/**
 * http POST请求
 * 比httpGet函数多了个form表单参数(Json对象)，其他参数参考httpGet
 * @example:
 */
export function httpPost(url:string, form:any, callback:(err, data)=>void, dataType?:Enum.HTTP_RES_DATA_TYPE, timeout?:number) {
    var options = {'url': url, 'form': form};
    typeof(timeout) != 'undefined' ? options['timeout'] = timeout : '';

    request.post(options, (error, response, body) => {
        var result = parseHttpResBody(error, response, body, dataType);
        return callback(result.error, result.data);
    });
}

//http get/post请求，返回包体解析函数
function parseHttpResBody(error:any, response:any, body:string, dataType:Enum.HTTP_RES_DATA_TYPE) {
    if (error) {
        //TODO:根据error.code是否为ETIMEDOUT可判断请求或响应是否超时
        //如果需要可在这里增加判断是否超时的错误码
        return {'error': ErrorCode.COMMON.HTTP_NO_RESPONSE, 'data': null};
    }
    if (response.statusCode == 200) {
        if (body) {
            if (dataType == Enum.HTTP_RES_DATA_TYPE.JSON) { //body返回的结果为json字符串
                try {
                    body = body.replace("\n", '');
                    var data = JSON.parse(body);
                    return {'error': 0, 'data': data};
                } catch (e) {
                    //TODO:json字符串解析为json对象失败，可能字符串中含有特殊编码字符
                    return {'error': ErrorCode.COMMON.JSON_PARSE_ERROR, 'data': null};
                }
            } else {
                return {'error': 0, 'data': body};
            }
        } else {
            return {'error': 0, 'data': body};
        }
    }
}