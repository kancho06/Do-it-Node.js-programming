// 파일의 내용을 읽어드리는 모듈 
var fs = require('fs');

//readFileSync
var data = fs.readFileSync('./package.json', 'utf-8');
console.log(data);

