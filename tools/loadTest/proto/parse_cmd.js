var exec = require('child_process').exec;
var async = require('async');

async.series([
        function (cb) {
            exec("cd ../../ && node_modules/protobufjs/bin/pbjs tools/loadTest/proto/c2s.proto -t=commonjs > tools/loadTest/proto/c2s.js", function (error, stdout, stderr) {
                console.log(stdout === '' ? stderr : stdout);
                cb(error, stdout, stderr);
            });
        },
        function (cb) {
            exec("cd ../../ && node_modules/protobufjs/bin/pbjs tools/loadTest/proto/s2c.proto -t=commonjs > tools/loadTest/proto/s2c.js", function (error, stdout, stderr) {
                console.log(stdout === '' ? stderr : stdout);
                cb(error, stdout, stderr);
            });
        }
    ],
    function (err, results) {公司
        if (err) {
            throw err;
        }
    });

