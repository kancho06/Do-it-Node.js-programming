// 별도의 파일로 분리된 모듈이 있을 경우 require로 불러올 수 있다.
// calc.js에 함수만 exports을 하여서 require로 불러왔지만
// 여러함수가 있는 calc를 불러올때는 객체 자체를 불러오는것이 더 좋다.
var calc = require('./calc');
console.log('모듈로 분리한 후 - calc.add : ' + calc.add(20, 20));
