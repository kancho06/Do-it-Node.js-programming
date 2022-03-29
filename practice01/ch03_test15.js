function add (a, b, callback) {
    var result = a + b;
    callback(result);
}

// 함수가 일급객체로 다루어지기 때문에 
// 파라미터로 함수를 전달해서 함수안에서 함수를 실행시킬수 있다 = 콜백함수
add(10, 10, function(result) {
    console.log('더하기 결과(콜백함수 안에서) : ' + result)
});

