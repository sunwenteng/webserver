import WorldDB = require('../database/impl/world_db');
import RedisMgr = require('../redis/redis_mgr');

class SDK {
    public static insert(headimgurl, nickname, openid, codeToken, cb:(uid)=>void) {
        WorldDB.conn.execute('insert into passport set ?', {
            headimgurl: headimgurl,
            nickname: nickname,
            openid: openid,
            token: codeToken
        }, (err, result)=> {
            if (err) {
                throw err;
            }

            var uid = result['insertId'];
            RedisMgr.getInstance('accountTokenRedis').hmset(codeToken, {
                uid: uid,
                headimgurl: headimgurl,
                nickname: nickname,
                openid: openid,
                token: codeToken
            }, 86400, ()=> {
                cb(uid);
            });
        });
    }
}

export  = SDK;