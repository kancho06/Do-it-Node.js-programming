// 함수를 변수에 담아서 쓴다.
// 함수에서 다른함수를 리턴할 수도 있다.
var add = function (a, b) {
    return a + b;
}


var result = add(10, 10);
console.log('더하기 결과 : ' + result);
