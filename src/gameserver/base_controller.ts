import log = require('../util/log');
import Role = require('./role');
import Dispatcher = require('../http/dispatcher');
import ErrorCode = require('../util/error_code');
var cmd = require('../share/cmd')['cmd'];

interface RolePck {
    cmd:string;
    data:any;
}
export var rolePckQueue:{[uid:number]:RolePck[]} = {};

export function loadRole(uid, cb:(role:Role)=>void):void {
    var role = new Role(uid);
    role.load((err, isExist)=> {
        if (err || !isExist) {
            Dispatcher.pop(uid, ErrorCode.COMMON.ROLE_NOT_EXIST);
        }
        else {
            cb(role);
        }
    });
}

export function send(uid:number, cmdName:string, data:any, bFinalPck:boolean = false) {
    var queue = rolePckQueue[uid];
    if (!queue) {
        queue = [];
        rolePckQueue[uid] = queue;
    }

    queue.push({cmd: cmdName, data: new cmd[cmdName](data)});

    if (bFinalPck) {
        Dispatcher.pop(uid, queue);
        rolePckQueue[uid] = [];
    }
}