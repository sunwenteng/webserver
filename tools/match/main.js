var str = 'a6a1234567';
var reg = /(\d{7,25})(^\d{26,})/;
console.log(str.match(reg));