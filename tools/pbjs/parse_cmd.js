var exec = require('child_process').exec;
var async = require('async');

async.series([
        function (cb) {
            exec("cd ../../ && node_modules/protobufjs/bin/pbjs src/share/cmd.proto -t=commonjs > src/share/cmd.js", function (error, stdout, stderr) {
                console.log(stdout === '' ? stderr : stdout);
                cb(error, stdout, stderr);
            });
        }/*,
        function (cb) {
            exec("cd ../../ && node_modules/protobufjs/bin/pbjs src/share/cmd.proto -t=js > src/share/cmd.js.js", function (error, stdout, stderr) {
                console.log(stdout === '' ? stderr : stdout);
                cb(error, stdout, stderr);
            });
        }*/
    ],
    function (err, results) {
        if (err) {
            throw err;
        }
    });

