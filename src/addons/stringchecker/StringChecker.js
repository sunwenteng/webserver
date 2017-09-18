var checker = require('./StringChecker.node');

var stringChecker = new checker.StringChecker();
stringChecker.add('abc');
stringChecker.build();
console.log('[' + stringChecker.replace('hello world') + ']');
console.log('[' + stringChecker.replace('HELLO world') + ']');
console.log('[' + stringChecker.replace('abc world') + ']');
console.log('[' + stringChecker.replace('world') + ']');