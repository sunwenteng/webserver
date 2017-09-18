/**
 * 腾讯平台可能使用到的一些api接口
 */

import crypto = require('crypto');
var url = require("url");

/**
 * MD5加密
 * @param text
 * @returns {*}
 */
export function md5(text) {
    var md5sum = crypto.createHash("md5");
    md5sum.update(text);
    text = md5sum.digest('hex');
    return text;
}

/**
 * hash 字符串转换成数字
 * @param key
 */

export function rotating(key) {
    key = key instanceof Buffer ? key : new Buffer(key);
    for (var hash = key.length, i = 0; i<key.length; ++i)
    {
        hash = (hash << 4) ^ (hash >> 28) ^ key[i];
    }
    return hash
}

export function fnv(key) {
    key = key instanceof Buffer ? key : new Buffer(key);
    var p = 16777619, hash = 0x811C9DC5;
    for(var i=0; i< key.length; i++)
    {
        hash = (hash * p) ^ key[i];
    }
    hash += hash << 13;
    hash ^= hash >> 7;
    hash += hash << 3;
    hash ^= hash >> 17;
    hash += hash << 5;
    return hash
};


export function hashText(key)
{
    key = key instanceof Buffer ? key : new Buffer(key);
    var hash = key.length;
    for (var i = 0; i < key.length; i++)
    {
        hash = key[i] + (hash << 6) + (hash << 16) - hash;
    }
    return (hash & 0x7FFFFFFF);
}

/**
 * self.customFunc.getSignData(access_token_url,null, self.CONFIG.APPKEY,'GET')
 * @param url
 * @param excludes
 * @param appkey
 * @param type
 * @returns {*|string}
 */
export function getSignData(url, excludes, appkey, type)
{
    type = type ? type : "GET";
    var urlData = url.parse(url);
    var args = {};
    var querySplits = urlData.query.split('&');
    for (var key in querySplits)
    {
        if (querySplits[key])
        {
            var argSplits = querySplits[key].split('=');
            args[argSplits[0]] = argSplits[1];
        }
    }

    var list = [];
    for (var key in args)
    {
        list.push(key);
    }
    list.sort();

    var content = "";
    for (var i in list)
    {
        var key = list[i];
        var value = args[key];
        if (key == "sig" || (excludes && excludes.indexOf(key) >= 0))
        {
            continue;
        }

        if (value)
        {
            content += ((i == 0 ? "" : "&") + key + "=" + value);
        }
        else
        {
            content += ((i == 0 ? "" : "&") + key + "=");
        }
    }
    content = type + "&" + encodeURIComponent(urlData.pathname) + "&" + encodeURIComponent(content);
    // “*” 号手动替换
    content = content.replace(/\*+/g, '%2A');
    return crypto.createHmac("sha1", appkey + "&").update(content).digest().toString("base64");
}