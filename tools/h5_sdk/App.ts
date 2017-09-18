///**
// * Created by yinqing on 15-8-26.
// */
//
//import http		= require('http');
//import httpUrl	= require('url');
//import Portal	= require('./Portal');
//import querystring 	= require('querystring');
//
//var portal:Portal;
//
//export function start():void
//{
//    console.log( 'start' );
//
//    portal = new Portal();
//
//    portal.init( ( err ) => {
//        if ( err )
//        {
//            console.log( err.message );
//            return;
//        }
//
//        http.createServer( ( req, res ) => {
//            res.setHeader( 'Access-Control-Allow-Origin', '*' );
//
//            var postData = "";
//            req.addListener( "data", ( data ) => {
//                postData += data;
//            });
//            req.addListener( "end", () =>
//            {
//                //var params = querystring.parse(postData);//GET & POST  ////解释表单数据部分{name="zzl",email="zzl@sina.com"}
//                var url = req.url.replace( /\//g, "" );
//                console.log( 'addr=%s,url=%s,data=%s', req.connection.remoteAddress, url, postData );
//
//                try
//                {
//                    if ( portal[ url ] )
//                    {
//                        portal[ url ].call( portal, JSON.parse( postData ), ( err, output = {} ) =>
//                        {
//                            if ( err )
//                            {
//                                console.log( '[return error] %s', err.message );
//                                res.end( JSON.stringify( {ok : 0, data : err.message} ) );
//                            }
//                            else
//                            {
//                                console.log( '[return data] %j', output );
//                                res.end( JSON.stringify( {ok : 1, data : output} ) );
//                            }
//                        } );
//                    }
//                    else
//                    {
//                        res.end( JSON.stringify( {ok : 0, data : 'INVALID API'} ) );
//                    }
//                }
//                catch ( err )
//                {
//                    console.log( '[exception] %s', err.message );
//                    res.end( JSON.stringify( {ok : 0, data : err.message} ) );
//                }
//            } );
//        } ).listen( 8080 );
//
//        console.log('Server running at 8080');
//
//        http.createServer( ( req, res ) => {
//            res.setHeader( 'Access-Control-Allow-Origin', '*' );
//
//            var postData = "";
//            req.addListener( "data", ( data ) => {
//                postData += data;
//            });
//            req.addListener( "end", () =>
//            {
//                console.log( 'payNotify, url=%s, data=%s', req.url, postData );
//
//                portal.payNotify( req.url, postData, ( err, output ) => {
//                    if ( err || !output )
//                    {
//                        console.log( 'payNotify error: ' + ( err ? err.message : "" ) );
//                        res.end('fail');
//                    }
//                    else
//                    {
//                        console.log( 'payNotify OK' );
//                        res.end( output );
//                    }
//                } );
//            });
//        } ).listen( 8081 );
//
//        console.log('ServerPay running at 8081');
//        //portal.payNotify( '/payNotify_68?openid=5cad4c3007df83a87f35c4acd9117ee6&orderid=de8cf9cd6744a5d41143dd345a80af89&itemid=1&itemname=10钻石&price=1&count=1&money=1&currency=RMB&serverid=1&ts=1442992632&sign=85ee8c0ff6b6cf5ada1fafd57556b5f4', '', () => {
//        //
//        //});
//
//        //portal.payNotify( '/payNotify_hgame', 'description=&game_key=80f4fb897d930c18&game_orderno=h_5600efc9103eb82801_1442914881&orderno=20150922174121225b757e2110800009&signature=4ed727a0ed1b192215b371535da339ec89c6c2e7&subject=10%E9%92%BB%E7%9F%B3&total_fee=1.00', () => {
//        //
//        //} );
//
//        //payNotify, url=/payNotify_9g?orderid=9g_55f8ef34cd999e3ff7b7eeb4_1442384927984_95269&status=1&sign=0747a5f1c4cbc953e7cb5bef1a7d1449, query={"orderid":"9g_55f8ef34cd999e3ff7b7eeb4_1442384927984_95269","status":"1","sign":"0747a5f1c4cbc953e7cb5bef1a7d1449"}, data=
//
//        //portal.bindPassport( {oid:'55de7baffa080dd2c53a19d3', passport:'abc1234', password:'123456', name:'hellokitty'}, ( err, output ) => {
//        //	console.log( err );
//        //	console.log( output );
//        //});
//
//        //portal.getRank( {oid:'55de7baffa080dd2c53a19d3'}, ( err, output ) => {
//        //	console.log( output );
//        //} );﻿55f7ad80f3298f45c1bf8d7d
//
//        //portal.checkPay( {oid:'55f7ad80f3298f45c1bf8d7d'}, ( err, output ) => {
//        //} );
//    } );
//
//}