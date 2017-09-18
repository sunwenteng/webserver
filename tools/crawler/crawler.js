var Crawler = require('crawler');
var url = require('url');
var fs = require('fs');

var testUrl = 'http://swords-potions2.wikidot.com';
//var testUrl = 'http://172.16.0.79:3000/';
var formulaFileName = 'formula.csv';
var allLink = {};
var allName = {};

var formalaStartId = 1000;

var queryArr = ['/amulets', '/axes', '/bows', '/boots', '/bracers', '/clothes', '/daggers', '/gauntlets', '/gloves', '/guns', '/hats', '/heavy-armor', '/heavy-boots', '/heavy-helmets'
 , '/helmets', '/herbs', '/maces', '/medium-armor', '/musical-instruments', '/potions', '/rings', '/scrolls', '/shields', '/shoes', '/spears', '/staves', '/swords', '/thrown'];

var items = {};

if (fs.existsSync(formulaFileName)) {
    fs.unlinkSync(formulaFileName);
}

//            0        1    2       3          4     5        6         7        8          9
var head = ['编号', '名称', '工匠', '工作台', '售價', '材料', '製作速度', '類別', '解鎖條件', '解鎖配方', '可升級成', '升級後'];
var id = 0;

//fs.appendFileSync(formulaFileName, head.toString() + '\n');
//fs.appendFileSync(itemFileName, ['编号', '名称'].toString() + '\n');

var c = new Crawler({
    retries: 100000,
    retryTimeout: 30000,
    maxConnections: 10,
    callback: function (error, result, $) {
        if (result && result.uri != testUrl && result.body) {
            $('table').each(function (/*index, table*/) {
                var ret = [];
                var data = $(this).text().split('\n');
                for (var i = 0; i < data.length; i++) {
                    var obj = data[i].trim();
                    if (obj !== "") {
                        ret.push(obj);
                    }
                }

                var bianhao, mingcheng, gongjiang, gongzuotai,
                    shoujia, cailiao, zhizuosudu, leibie,
                    jiesuotiaojian, jiesuopeifang,
                    record, tName, tLevel;

                while (ret.indexOf(head[2]) !== -1) {
                    mingcheng = ret[ret.indexOf(head[2]) - 1];
                    tName = mingcheng.substring(0, mingcheng.indexOf('(')).replace('*', '').replace('shoess', 'shoes').toLowerCase();
                    tLevel = mingcheng.substring(mingcheng.indexOf('(Level ') + '(Level '.length, mingcheng.length - 1).toLowerCase();

                    ret = ret.slice(ret.indexOf(head[2]) + 1, ret.length);
                    if (allName[tName]) {
                        console.log('duplicate: ' + tName);
                        continue;
                    }
                    bianhao = ++id + formalaStartId;
                    gongjiang = ret[0];
                    gongzuotai = ret[ret.indexOf(head[3]) + 1];
                    shoujia = ret[ret.indexOf(head[4]) + 1].replace(/,/g, '');

                    cailiao = ret.slice(ret.indexOf(head[5]) + 1, ret.indexOf(head[6]));
                    var t = '';
                    for (i = 0; i < cailiao.length; i++) {
                        obj = cailiao[i];
                        obj = obj.split(' ');
                        if (obj[obj.length - 1] === '+') {
                            obj.length = obj.length - 1;
                        }
                        var reqNum = parseInt(obj.shift());
                        var itemName = obj.join(' ');
                        t += itemName + ':' + reqNum + ';';
                    }
                    cailiao = t;

                    zhizuosudu = ret[ret.indexOf(head[6]) + 1];
                    leibie = ret[ret.indexOf(head[7]) + 1];

                    jiesuotiaojian = [];
                    var start = ret.indexOf(head[8]);
                    i = 0;
                    if (start !== -1) {
                        i = 1;
                        while (head.indexOf(ret[start + i]) === -1 && (start + i) < ret.length && ret[start + i][0] != '+') {
                            jiesuotiaojian.push(ret[start + i]);
                            ++i;
                        }
                    }
                    if(jiesuotiaojian.length === 0) {
                        jiesuotiaojian = [0];
                    }
                    jiesuotiaojian = jiesuotiaojian.toString().replace(/,/g, ';');

                    jiesuopeifang = [];
                    start = ret.indexOf(head[9]);
                    if (start !== -1) {
                        i = 1;
                        while (head.indexOf(ret[start + i]) === -1 && (start + i) < ret.length && ret[start + i][0] != '+') {
                            if(ret[start + i].toLowerCase() !== tName )
                                jiesuopeifang.push(ret[start + i]);
                            ++i;
                        }
                    }
                    if(jiesuopeifang.length === 0) {
                        jiesuopeifang = [0];
                    }
                    jiesuopeifang = jiesuopeifang.toString().replace(/,/g, ';');

                    record = [
                            bianhao,
                            //mingcheng.toLowerCase(),
                            tName,
                            tLevel,
                            gongjiang.toLowerCase(),
                            gongzuotai.toLowerCase(),
                            shoujia,
                            cailiao.toLowerCase(),
                            zhizuosudu.toLowerCase(),
                            leibie.toLowerCase(),
                            jiesuotiaojian.toLowerCase(),
                            jiesuopeifang.toLowerCase()
                        ].toString() + '\n';

                    allName[tName] = true;
                    console.log(record);
                    fs.appendFileSync(formulaFileName, record.toString());
                }
            });
        }

        if ($) {
            $('a').each(function (index, a) {
                var toQueueUrl = $(a).attr('href');
                if (toQueueUrl && toQueueUrl[0] === '/' && !allLink[toQueueUrl]) {
                    if (queryArr.indexOf(toQueueUrl) !== -1) {
                        console.log(toQueueUrl);
                        allLink[toQueueUrl] = true;
                        c.queue(testUrl + toQueueUrl);
                    }
                }
            });
        }
    }
});

c.queue(testUrl);