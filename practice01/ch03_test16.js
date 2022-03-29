
function add(a, b, callback) {
    var result = a + b;
    // 내부함수에서 어떤 변수를 참조했을 경우
    // 그 변수의 값이 메모리에 계속 유지가된다 이것을 클로저 라고 부른다.
    callback(result);

    var history = function() {
        return a + ' + ' + b + ' = ' + result;
    };

    return history;
};

var add_history = add(20, 20, function(result) {
    console.log('더하기 결과 : ' + result);
});

console.log('add_history의 자료형 : ' + typeof(add_history));

console.log('결과값으로 받은 함수 실행 : ' + add_history());