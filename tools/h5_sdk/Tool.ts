///**
// * Created by yinqing on 15-9-15.
// */
//import http			= require( 'http' );
//import querystring 	= require('querystring');
//import crypto		= require( 'crypto' );
//
//class Tools
//{
//    public static httpQuest( host, path, urlParams, method, data, cb ):void
//    {
//        var options:any = {};
//        options.host = host;
//        options.path = path;
//        if ( urlParams ) options.path += '?' + querystring.stringify( urlParams );
//        options.method = method;
//        if ( method == 'POST' && data )
//        {
//            options.headers = {
//                'Content-Type': 'application/x-www-form-urlencoded',
//                'Content-Length' : data.length
//            };
//        }
//        var str = "";
//        var req:http.ClientRequest = http.request( options, ( res ) => {
//            res.setEncoding('utf8');
//            res.on('data', ( chunk ) =>
//            {
//                str += chunk;
//            });
//            res.on('end', () => {
//                return cb( null, str );
//            });
//        } );
//        req.on( 'error', ( err ) => {
//            return cb( err );
//        } );
//        if ( method == 'POST' && data )
//        {
//            req.write( data, 'utf-8' );
//        }
//        req.end();
//    }
//
//    public static getSignData_1758( data ):string
//    {
//        var secretKey	= 'fecfb1650b03963e833ae65b5499ccff';
//        var keyArray	= [];
//
//        for ( var k in data )
//        {
//            if ( k == 'sign' || k == 'orderInfo' ) continue;
//            keyArray.push( k );
//        }
//        keyArray.sort();
//
//        var ret = '';
//        for ( var i = 0; i < keyArray.length; i++ )
//        {
//            if ( i > 0 ) ret += '&';
//            ret += keyArray[i] + '=' + data[keyArray[i]];
//        }
//        ret += secretKey;
//        return Tools.md5( ret );
//    }
//
//    public static getSignData_hgame( data ):string
//    {
//        var secretKey	= '3ef2573893788a79ec847ae852130774';
//        var keyArray	= [];
//
//        for ( var k in data )
//        {
//            if ( k == 'signature' ) continue;
//            keyArray.push( k );
//        }
//        keyArray.sort();
//
//        var ret = '';
//        for ( var i = 0; i < keyArray.length; i++ )
//        {
//            if ( i > 0 ) ret += '&';
//            ret += keyArray[i] + '=' + data[keyArray[i]];
//        }
//        ret += secretKey;
//        return Tools.sha1( ret );
//    }
//
//    public static getSignData_68( data ):string
//    {
//        var secretKey	= 'ad5edeae3445f5ced60caa690c79432e';
//        var keyArray	= [];
//
//        for ( var k in data )
//        {
//            if ( k == 'sign' ) continue;
//            keyArray.push( k );
//        }
//        keyArray.sort();
//
//        var ret = '';
//        for ( var i = 0; i < keyArray.length; i++ )
//        {
//            ret += data[keyArray[i]];
//        }
//        ret += secretKey;
//        console.log( ret );
//        return Tools.md5( ret );
//    }
//
//
//    public static md5( str:string ):string
//    {
//        var md5sum = crypto.createHash('md5');
//        md5sum.update( str, 'utf-8' );
//        return md5sum.digest('hex');
//    }
//
//    public static sha1( str:string ):string
//    {
//        var sha1sum = crypto.createHash('sha1');
//        sha1sum.update( str, 'utf-8' );
//        return sha1sum.digest('hex');
//    }
//
//    public static getTime():number
//    {
//        return Math.floor( new Date().getTime() / 1000 );
//    }
//}
//
//export = Tools;