// 객체로 받아서 객체안에있는 함수를 꺼내쓴다.
var calc2 = require('./calc2');
console.log('모듈로 분리한 후 - calc2.add : ' + calc2.add(30, 30));

// 환경변수값 찾는법
var nconf = require('nconf');
nconf.env(); // 환경변수 확인
// nconf 는 자동으로 import되지 않으므로 터미널에서 npm install nconf를 해주고 출력
// nconf 출력하면 undefined가 나오는데 권한이 없어서 그런다.
var value = nconf.get('OS')
console.log('OS 환경변수의 값 : ' + value);
