//var cmd = require('../../src/share/cmd')['cmd'];

var protobuf = require('protobufjs');
protobuf.loadProtoFile('../../src/share/cmd.proto', function(err, builder){
    var cmd = builder.build()['cmd'];

    var test = new cmd['testMap']({
        a : {
            1: 1
        }
    });

    console.log(test.constructor.prototype);

    console.log(JSON.stringify(test));
});
