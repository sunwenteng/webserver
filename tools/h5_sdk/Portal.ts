///**
// * Created by yinqing on 15-8-27.
// */
//
//import mongo    = require( 'mongodb' );
//import async	= require( 'async' );
//import querystring = require('querystring');
//import Tools	= require('./Tools');
//import httpUrl	= require( 'url' );
//
//interface HandlerCallback { (err, output?): void; }
//
//var CHARGE_INFO	= [
//    { id:1, icon:'1.png', 	diamond:10		, rmb:1 	, code_1758:105047 	},
//    { id:2,	icon:'2.png',	diamond:100		, rmb:6 	, code_1758:105048	},
//    { id:3,	icon:'4.png',	diamond:588		, rmb:20	, code_1758:105049	},
//    { id:4,	icon:'6.png',	diamond:3888	, rmb:100	, code_1758:105050	},
//    { id:5,	icon:'7.png',	diamond:18888	, rmb:388	, code_1758:105051	}
//];
//
//class Portal
//{
//    private collection		:mongo.Collection;
//    private collectionPay	:mongo.Collection;
//
//    public init( cb ):void
//    {
//        var url = 'mongodb://172.16.0.77:27017/h5';
//        //var url = 'mongodb://127.0.0.1/h5';
//        mongo.MongoClient.connect( url, ( err, db ) =>
//        {
//            if ( err )
//            {
//                console.log( "[db] connect error: %s", err.message );
//                return cb( err );
//            }
//
//            console.log( "[db] connected to %s", url );
//            this.collection = db.collection( 'test' );
//            this.collectionPay = db.collection( 'pay' );
//            return cb( null );
//        } );
//    }
//
//    public register( input:{}, cb:HandlerCallback ):void
//    {
//        this.collection.insertOne( {}, ( err, res ) => {
//            if ( err ) return cb( err );
//            //console.log( res.insertedId );
//            //console.log( res.insertedCount );
//            //console.log( res.ops[ 0 ]._id );
//            //console.log( res.result.n );
//            //console.log( res.result.ok );
//            cb( null, {oid:res['insertedId']} );
//        } );
//    }
//
//    public registerPlatform( input:{passport; name; platform}, cb:HandlerCallback ):void
//    {
//        this.collection.findOne( {passport:input.passport}, ( err, doc ) => {
//            if ( err ) return cb( err );
//            if ( doc )
//            {
//                this.collection.updateOne( doc, {$set:{name:input.name, platform:input.platform}}, ( err, res ) => {
//                    if ( err ) return cb( err );
//                    cb( null, {oid:doc._id} );
//                } );
//            }
//            else
//            {
//                this.collection.insertOne( {passport:input.passport, name:input.name, platform:input.platform}, ( err, res ) => {
//                    if ( err ) return cb( err );
//                    cb( null, {oid:res['insertedId']} );
//                } );
//            }
//        } );
//    }
//
//    public bindPassport( input:{oid; passport; password; name}, cb:HandlerCallback ):void
//    {
//        if ( input.passport == "" || input.password == "" || input.name == "" )
//        {
//            return cb( new Error('账号或密码不能为空') );
//        }
//
//        async.series( [
//            ( cb ) => {
//                this.collection.findOne( { passport:input.passport }, ( err, doc ) => {
//                    if ( err ) return cb( err );
//                    if ( doc ) return cb( new Error( '此账号名已被注册' ) );
//                    cb( null );
//                });
//            },
//            ( cb ) => {
//                this.collection.findOne( { name:input.name }, ( err, doc ) => {
//                    if ( err ) return cb( err );
//                    if ( doc ) return cb( new Error( '此昵称已被使用' ) );
//                    cb( null );
//                } );
//            },
//            ( cb ) => {
//                this.collection.findOne( {_id:new mongo.ObjectID(input.oid)}, ( err, doc ) => {
//                    if ( err ) return cb( err );
//                    if ( doc.passport != undefined )
//                    {
//                        return cb( new Error('此账号已绑定，不能重复绑定') );
//                    }
//
//                    this.collection.updateOne( doc, {$set:{passport:input.passport, password:Tools.md5(input.password), name:input.name}},( err, res ) => {
//                        if ( err ) return cb( err );
//                        cb( null, {} );
//                    } );
//                } );
//            }
//        ], ( err ) => {
//            if ( err ) return cb( err );
//            cb( null, {} );
//        } );
//    }
//
//    public login( input:{passport; password}, cb:HandlerCallback ):void
//    {
//        this.collection.findOne( {passport:input.passport}, ( err, doc ) => {
//            if ( err ) return cb( err );
//            if ( doc == undefined ) return cb( new Error('此账号不存在') );
//            if ( doc['password'] != Tools.md5( input.password ) ) return cb( new Error('密码错误') );
//            cb( null, {oid:doc._id, name:doc.name} );
//        } );
//    }
//
//    public login_1758( input:{appKey;token;sign}, cb:HandlerCallback ):void
//    {
//        var data = {
//            userToken	: input.token,
//            appKey		: input.appKey };
//        data['sign'] = Tools.getSignData_1758( data );
//        var encodeData = querystring.stringify( data );
//
//        Tools.httpQuest( 'wx.1758.com', '/game/platform/v1.0/user/verify', null, 'POST', encodeData, ( err, str ) => {
//
//            if ( err ) return cb( err );
//
//            var response = JSON.parse( str );
//
//            if ( response.code != 0 )
//            {
//                cb( new Error('用户验证错误[' + response.code + ']') );
//            }
//            else
//            {
//                this.registerPlatform( {passport:response.userInfo.gid, name:response.userInfo.nickName, platform:'1758'},
//                    ( err, output ) => {
//                        if ( err ) return cb( err );
//                        cb( null, { oid:output.oid, userName:response.userInfo.nickName } );
//                    } );
//            }
//
//        } );
//    }
//
//    public login_9g( input:{token}, cb:HandlerCallback ):void
//    {
//        var data = { token : input.token };
//        //http://www.yourdomain.com/?token=TOKEN
//        Tools.httpQuest( 'wx.9g.com', '/open/userinfo', data, 'GET', null, ( err, str ) => {
//
//            if ( err ) return cb( err );
//            var response = JSON.parse( str );
//
//            if ( !response.uid )
//            {
//                cb( new Error('用户验证错误[' + response.errmsg + ']') );
//            }
//            else
//            {
//                var name = response.nickname ? response.nickname : response.uid;
//                this.registerPlatform( {passport:response.uid, name:name, platform:'9g' },
//                    ( err, output ) => {
//                        if ( err ) return cb( err );
//                        cb( null, { oid:output.oid, userName:name } );
//                    } );
//            }
//        } );
//    }
//
//    public login_hgame( input:{ticket; loginType}, cb:HandlerCallback ):void
//    {
//        var gameKey = '80f4fb897d930c18';
//        var data =
//        {
//            game_key 	: gameKey,
//            timestamp	: Math.floor( new Date().getTime() / 1000 ),
//            nonce		: Math.random().toString(36).substr(2),
//            login_type	: input.loginType,
//            login_ticket: input.ticket,
//        };
//        data['signature'] = Tools.getSignData_hgame( data );
//
//        Tools.httpQuest( 'gc.hgame.com', '/user/getticketuserinfo', data, 'GET', null, ( err, str ) => {
//            if ( err ) return cb( err );
//            var response = JSON.parse( str );
//            if ( response.code != 0 )
//            {
//                cb( new Error('用户验证错误[' + response.message + ']') );
//            }
//            else
//            {
//                var name = response.data.nickname;
//
//                this.registerPlatform( {passport:response.data.open_id, name:name, platform:'hgame' },
//                    ( err, output ) => {
//                        if ( err ) return cb( err );
//                        cb( null, { oid:output.oid, userName:name } );
//                    } );
//            }
//        } );
//    }
//
//    public login_68( input:{openId}, cb:HandlerCallback ):void
//    {
//        var appId = 567;
//        var data =
//        {
//            appid	: appId,
//            openid	: input.openId,
//            ts		: Tools.getTime()
//        };
//        data['sign'] = Tools.getSignData_68( data );
//
//        Tools.httpQuest( 'www.play68.com', '/api/userinfo', data, 'GET', null, ( err, str ) => {
//
//            if ( err ) return cb( err );
//            var response = JSON.parse( str );
//
//            if ( response.ret != 0 )
//            {
//                cb( new Error('用户验证错误[' + response.ret + response.msg + ']') );
//            }
//            else
//            {
//                var name = response.nickname;
//                this.registerPlatform( {passport:input.openId, name:name, platform:'68' },
//                    ( err, output ) => {
//                        if ( err ) return cb( err );
//                        cb( null, { oid:output.oid, userName:name } );
//                    } );
//            }
//        } );
//    }
//
//    public loadRole( input:{oid}, cb:HandlerCallback ):void
//    {
//        this.collection.findOne( {_id:new mongo.ObjectID(input.oid)}, ( err, doc ) => {
//            if ( err ) return cb( err );
//            if ( doc == undefined ) return cb( new Error('未找到玩家数据') );
//            cb( null, doc['roleData'] );
//        } );
//    }
//
//    public saveRole( input:{oid; roleData}, cb:HandlerCallback ):void
//    {
//        this.collection.updateOne( {_id:new mongo.ObjectID(input.oid)}, {$set:{roleData:JSON.parse(input.roleData)}}, ( err, res ) => {
//            if ( err ) return cb( err );
//            if ( res.result.n == 0 ) return cb( new Error('未找到玩家数据') );
//            cb( null );
//        } );
//    }
//
//    public checkPay( input:{oid}, cb:HandlerCallback ):void
//    {
//        this.collectionPay.find( {oid:new mongo.ObjectID(input.oid), state:0}, ( err, res ) => {
//            if ( err ) return cb( err );
//
//            res.toArray( ( err, item ) => {
//                if ( err ) return cb( err );
//
//                var diamond = 0;
//                for ( var i = 0; i < item.length; i++ )
//                {
//                    diamond += item[i].diamond;
//                    this.collectionPay.updateOne( {_id:item[i]._id}, {$set:{state:1}}, ( err, res ) => {
//                        if ( err ) console.log( err );
//                    } );
//                }
//                cb( null, {diamond:diamond} );
//            } );
//        } );
//    }
//
//    public getRank( input:{oid}, cb:HandlerCallback ):void
//    {
//        this.collection.find( {}, {"name":1, "roleData.starCnt":1}, { limit:1000, sort:{"roleData.starCnt":-1, "roleData.starUpdateTime":1} }, ( err, cursor:mongo.Cursor ) => {
//            if ( err ) return cb( err );
//            cursor.toArray( ( err, docs ) => {
//                if ( err ) return cb( err );
//                var output = { rankList:[], selfRank:0 };
//
//                docs.forEach( ( e, idx ) => {
//                    var star = ( e.roleData && e.roleData.starCnt ? e.roleData.starCnt : 0 );
//                    if ( idx < 20 )
//                    {
//                        output.rankList.push( { name: ( e.name ? e.name : '' ), rank:idx + 1, star:star } );
//                    }
//                    if ( e._id == input.oid ) output.selfRank = idx + 1;
//                } );
//                cb( null, output );
//            } );
//        } );
//    }
//
//    public preparePay_9g( input:{oid; money; diamond}, cb:HandlerCallback ):void
//    {
//        var spid	= 'dcys';
//        var spkey	= '4e9edf630bf377cabd07cf174ab982e8';
//
//        this.collection.findOne( {_id:new mongo.ObjectID(input.oid)}, ( err, doc ) => {
//            if ( err ) return cb( err );
//            if ( !doc ) return cb( new Error('未找到玩家数据') );
//
//            var orderId = '9g_' + doc.passport + '_' + Math.floor(( new Date().getTime() / 1000 )) + '_' + Math.floor( Math.random() * 1000 );
//            var sign	= Tools.md5( orderId + input.money + spid + spkey );
//
//            this.collectionPay.insertOne( {
//                orderId	: orderId,
//                oid		: doc._id,
//                diamond	: input.diamond,
//                state	: 2,
//                platform: '9g'
//            }, ( err, res ) => {
//                if ( err ) return cb( err );
//                console.log( 'create 9g orderId =' + orderId );
//                cb( null, { orderId:orderId, spid:spid, sign:sign, uid:doc.passport } );
//            } );
//        } );
//    }
//
//    public preparePay_hgame( input:{oid; diamond}, cb:HandlerCallback ):void
//    {
//        //var data = {
//        //	oid         : Game.oid,
//        //	diamond     :info.diamond,
//        //	game_key    : '80f4fb897d930c18',
//        //	//open_id     : res.data.openId,
//        //	total_fee   : info.rmb,
//        //	//game_orderno: res.data.orderId,
//        //	subject     : info.diamond + '钻石',
//        //	notify_url  : Game.serverPay + 'payNotify_hgame',
//        //	//timestamp   : Tools.getTime(),
//        //	//nonce       : Math.random().toString(36).substr(2),
//        //};
//
//        this.collection.findOne( {_id:new mongo.ObjectID(input.oid)}, ( err, doc ) => {
//            if ( err ) return cb( err );
//            if ( !doc ) return cb( new Error('未找到玩家数据') );
//
//            var orderId = 'h_' + doc.passport + '_' + Math.floor(( new Date().getTime() / 1000 ));
//
//            this.collectionPay.insertOne({
//                orderId	: orderId,
//                oid		: doc._id,
//                diamond	: input.diamond,
//                state	: 2,
//                platform: 'hgame'
//            }, ( err, res ) => {
//                if ( err ) return cb( err );
//                console.log( 'create hgame orderId =' + orderId );
//
//                delete input.oid;
//                delete input.diamond;
//
//                input['open_id']		= doc.passport;
//                input['game_orderno']	= orderId;
//                input['timestamp']		= Math.floor(( new Date().getTime() / 1000 ));
//                input['nonce']			= Math.random().toString(36).substr(2);
//                input['signature']		= Tools.getSignData_hgame( input );
//
//                cb( null, input );
//            });
//        } );
//    }
//
//    // state = 0 已支付  1 已发货  2 未付费
//    public payNotify( url:string, encodeData:string, cb:HandlerCallback ):void
//    {
//        var urlInfo = httpUrl.parse( url );
//
//        if ( urlInfo.pathname == '/payNotify_1758' )
//        {
//            var data = querystring.parse( encodeData );
//            if ( Tools.getSignData_1758( data ) != data['sign'] )
//            {
//                return cb( new Error( '签名错误' ) );
//            }
//            var orderInfo = JSON.parse( data['orderInfo'] );
//
//            var diamond = 0;
//            for ( var i = 0; i < CHARGE_INFO.length; i++ )
//            {
//                if ( CHARGE_INFO[i].code_1758 == orderInfo['itemCode'] )
//                {
//                    diamond = CHARGE_INFO[i].diamond;
//                }
//            }
//            if ( diamond == 0 )
//            {
//                return cb( new Error( '充值档次未找到') );
//            }
//
//            this.collectionPay.findOne( {orderId:data['orderId']}, ( err, doc ) => {
//                if ( err ) return cb( err );
//                if ( doc )
//                {
//                    console.log( 'orderId duplicate' + data[ 'orderId' ] );
//                    return cb( null, 'success_already' );
//                }
//                this.collection.findOne( {passport:data['gid']}, ( err, doc ) => {
//                    if ( err ) return cb( err );
//                    if ( doc == undefined ) return cb( new Error('充值玩家不存在') );
//
//                    this.collectionPay.insertOne(
//                        {
//                            orderId	: data['orderId'],
//                            oid		: doc._id,
//                            code	: data['itemCode'],
//                            diamond	: diamond,
//                            state	: 0,
//                            platform: '1758'
//                        }, ( err, res ) => {
//                            if ( err ) return cb( err );
//
//                            console.log( 'orderId insert success' );
//                            cb( null, 'success' );
//                        } );
//                } );
//            } );
//            //{ sign: 'fe3129e1a193cd2ef94d39cd08c79249',
//            //	orderInfo: '{"gid":"101e053a63bf5b0ebf542fdb9dfc4232","orderId":"B9O53002548U9B","txId":"","title":"地城勇士 - 1元\\u003d10钻石","productFee":0.01,"itemCode":"105047","itemFee":0.01,"buyAmount":1,"transportFee":0.0,"discountFee":0.0,"totalFee":0.01,"status":20,"state":"10","createTime":1442299402000}',
//            //	status: '20',
//            //	gid: '101e053a63bf5b0ebf542fdb9dfc4232',
//            //	buyAmount: '1',
//            //	orderId: 'B9O53002548U9B',
//            //	itemCode: '105047',
//            //	appKey: '572624c908961fcd89c6d3ff80dd4f29' }
//        }
//        else if ( urlInfo.pathname == '/payNotify_9g' )
//        {
//            var data	= querystring.parse( urlInfo.query );
//            var spkey	= '4e9edf630bf377cabd07cf174ab982e8';
//
//            if ( Tools.md5( data['orderid'] + data['status'] + spkey ) != data['sign'] )
//            {
//                return cb( new Error( '签名错误' ) );
//            }
//
//            this.collectionPay.findOne( {orderId:data['orderid']}, ( err, doc ) => {
//                if ( err ) return cb( err );
//                if ( !doc ) return cb( new Error('订单不存在') );
//                if ( doc.state == 2 )
//                {
//                    this.collectionPay.updateOne( doc, {$set:{state:0}}, ( err, res ) => {
//                        if ( err ) return cb( err );
//                        cb( null, 'OK' );
//                    } );
//                }
//                else
//                {
//                    cb( null, 'OK' );
//                }
//            } );
//
//            // /payNotify_9g?orderid=9g_55f8ef34cd999e3ff7b7eeb4_1442384927984_95269&status=1&sign=0747a5f1c4cbc953e7cb5bef1a7d1449
//        }
//        else if ( urlInfo.pathname == '/payNotify_hgame' )
//        {
//            var data = querystring.parse( encodeData );
//            if ( Tools.getSignData_hgame( data ) != data['signature'] )
//            {
//                console.log( '[hgame] signature error' );
//                return cb( new Error('signature') );
//            }
//
//            this.collectionPay.findOne( { orderId:data['game_orderno'] }, ( err, doc ) => {
//                if ( err ) return cb( err );
//                if ( !doc ) return cb( null, JSON.stringify( { code:-3, message:'订单不存在'} ) );
//
//                if ( doc.state == 2 )
//                {
//                    this.collectionPay.updateOne( doc, {$set:{state:0, platformOrderId:data['orderno']}}, ( err, res ) => {
//                        if ( err ) return cb( err );
//                        cb( null, JSON.stringify( { code:0, message:'游戏支付成功' } ) );
//                    } );
//                }
//                else
//                {
//                    cb( null, JSON.stringify( { code:-2, message:'订单重复' } ) );
//                }
//            } );
//        }
//        else if ( urlInfo.pathname == '/payNotify_68' )
//        {
//            var data	= querystring.parse( urlInfo.query );
//
//            var diamond = 0;
//            for ( var i = 0; i < CHARGE_INFO.length; i++ )
//            {
//                if ( CHARGE_INFO[i].id == data['itemid'] )
//                {
//                    diamond = CHARGE_INFO[i].diamond;
//                    break;
//                }
//            }
//            if ( diamond == 0 )
//            {
//                return cb( new Error( '充值档次未找到') );
//            }
//
//            data['itemname'] = diamond + '钻石';
//
//            if ( Tools.getSignData_68( data ) != data['sign'] )
//            {
//                return cb( new Error( '签名错误' ) );
//            }
//
//            this.collectionPay.findOne( {orderId:data['orderid']}, ( err, doc ) => {
//                if ( err ) return cb( err );
//                if ( doc )
//                {
//                    console.log( '[68] orderId duplicate' + data[ 'orderid' ] );
//                    return cb( null, JSON.stringify({ret:0, msg:''}));
//                }
//                this.collection.findOne( {passport:data['openid']}, ( err, doc ) => {
//                    if ( err ) return cb( err );
//                    if ( doc == undefined ) return cb( new Error('充值玩家不存在') );
//
//                    this.collectionPay.insertOne(
//                        {
//                            orderId	: data['orderid'],
//                            oid		: doc._id,
//                            diamond	: diamond,
//                            state	: 0,
//                            platform: '68'
//                        }, ( err, res ) => {
//                            if ( err ) return cb( err );
//
//                            console.log( '[68] orderId insert success' );
//                            cb( null, JSON.stringify({ret:0, msg:''}) );
//                        } );
//                } );
//            } );
//        }
//        else
//        {
//            cb( null, 'invalid' );
//        }
//    }
//
//    public submitScore_9g( input:{oid; token}, cb:HandlerCallback ):void
//    {
//        this.collection.findOne( {_id:new mongo.ObjectID(input.oid)}, ( err, doc ) => {
//            if ( err ) return cb( err );
//            if ( !doc ) return cb( new Error('未找到玩家数据') );
//
//            if ( doc.roleData && doc.roleData.starCnt )
//            {
//                var star = doc.roleData.starCnt;
//                var param = {
//                    gameid	: 'dcys',
//                    token	: input.token,
//                    score	: doc.roleData.starCnt,
//                    scorename : '冒险星数 ' + star,
//                    title	: '我在地城勇士中已经获得了' + star + '个星星，你能比我厉害？'
//                };
//                //http://?gameid=[gameid]&token=[token]&score=[score]&scorename=[scorename]&title=[title]
//                Tools.httpQuest( 'wx.9g.com', '/open/submit', param, 'GET', null, ( err, str ) => {
//                    if ( err ) return cb( err );
//                    var response = JSON.parse( str );
//                    if ( response.success )
//                    {
//                        console.log( 'submitScore success' );
//                    }
//                    else
//                    {
//                        console.log( 'submitScore error :' + response.error );
//                    }
//                } );
//            }
//            cb( null, {} );
//        } );
//    }
//
//    public getSubscribe_1758( input:{oid; appKey}, cb:HandlerCallback ):void
//    {
//        this.collection.findOne( {_id:new mongo.ObjectID(input.oid)}, ( err, doc ) => {
//            if ( err ) return cb( err );
//            if ( !doc ) return cb( new Error('未找到玩家数据') );
//            if ( !doc['subReward'] )
//            {
//                var data = {
//                    appKey	:input.appKey,
//                    gid		:doc.passport
//                };
//                data['sign'] = Tools.getSignData_1758( data );
//                var encodeData = querystring.stringify( data );
//                Tools.httpQuest( 'wx.1758.com', '/game/platform/v1.0/user/query', null, 'POST', encodeData, ( err, str ) => {
//                    if ( err ) return cb( err );
//                    var response = JSON.parse( str );
//
//                    if ( response.code != 0 )
//                    {
//                        cb( new Error('获取关注错误[' + response.code + ']') );
//                    }
//                    else
//                    {
//                        console.log( response );
//                        cb( null, {subscribe:response.userInfo.subscribe} );
//                    }
//                } );
//            }
//            else
//            {
//                cb( null, {subscribe:2} );
//            }
//        } );
//    }
//
//    public getSubscribeReward_1758( input:{oid}, cb:HandlerCallback ):void
//    {
//        this.collection.updateOne( {_id:new mongo.ObjectID(input.oid), subReward:null }, {$set:{subReward:1}}, ( err, res ) => {
//            if ( err ) return cb( err );
//            if ( res.result.nModified )
//            {
//                cb( null, {} );
//            }
//            else
//            {
//                cb( new Error( '重复领取' ) );
//            }
//        } );
//    }
//}
//
//export = Portal;