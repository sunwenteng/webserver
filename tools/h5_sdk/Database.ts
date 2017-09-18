//import mongo    = require( 'mongodb' );
//import async    = require( 'async' );
//
//class Database
//{
//    public constructor()
//    {
//    }
//
//    public run()
//    {
//        var url = 'mongodb://172.16.0.77:27017/h5';
//        mongo.MongoClient.connect( url, ( err, db ) => {
//            if ( err )
//            {
//                console.log( "%s", err.message );
//                return;
//            }
//
//            console.log( "connected to %s", url );
//
//            var c:mongo.Collection = db.collection('test');
//
//            async.waterfall( [
//                ( cb ) => {
//                    c.insert( [ {a:1, b:2}, {a:2, b:3}, {a:3, b:4} ], cb );
//                },
//                ( res, cb ) => {
//                    console.log( "[insert] %j" );
//                    c.update( { a:2 }, { $inc:{b:1} }, cb );
//                },
//                ( res, cb ) => {
//                    console.log( "[update] %j", res );
//                    db.close();
//                    cb( null );
//                }
//            ], ( err:Error ) => {
//                if ( err ) console.log( "[error] %s", err.message );
//            }  );
//        } );
//    }
//}
//
//export = Database;