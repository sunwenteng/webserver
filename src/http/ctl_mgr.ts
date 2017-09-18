import fs = require('fs');

var allController = {};

/**
 * 将指定文件路径下所有*_controller进行加载
 * @param path
 */
export function init(path) {
    var fileNames = fs.readdirSync(path);
    for (var i = 0; i < fileNames.length; i++) {
        var fileName = fileNames[i];
        if(fileName.indexOf('js.map') != -1) {
            continue;
        }
        var fullPath = path + '/' + fileName;
        var stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            init(fullPath);
        }
        else {
            if(fileName.indexOf('_controller') != -1) {
                allController[fileName.substring(0, fileName.indexOf('_controller'))] = require(fullPath);
            }
        }
    }
}

export function getCtl(name:string):any {
    return allController[name];
}

export function hasCtl(name:string):any {
    return allController[name] != null;
}