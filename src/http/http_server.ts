import express = require('express');
import http = require('http');
import bodyParser = require('body-parser');
import log = require('../util/log');
import Router = require('./router');

class HttpServer {
    app:express.Express = null;
    config:any = null;

    public start(config:any,
                 cb:(err)=>void):void {
        this.config = config;

        this.app = express();

        this.app.set('port', config['port']);

        this.app.use(log.getLogger());
        this.app.use("/*", bodyParser.text({type: "*/*"}));
        //this.app.use(bodyParser.text({limit: '1mb'}));
        //this.app.use(bodyParser.raw());
        this.app.use(bodyParser.urlencoded({extended: true, limit: '1mb'}));
        if (config['allowCrossdomain']) {
            this.app.use((req:express.Request, res:express.Response, next)=> {
                var origin = (req.headers['origin'] || "*");
                //res.header("Access-Control-Allow-Credentials", 'true');
                res.header("Access-Control-Allow-Origin", "*");
                //res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
                //res.header("Access-Control-Allow-Headers", "*");
                //res.header("Content-Type", "application/json;charset=utf-8");
                if ("OPTIONS" == req.method) {
                    res.send(200);
                } else {
                    next();
                }
            });
        }

        this.app.all("/*", Router.index);

        http.createServer(this.app).listen(this.app.get("port"), () => {
            log.sInfo('http server is now listening on ' + this.config['port']);
            cb(null);
        });
    }
}

export = HttpServer;