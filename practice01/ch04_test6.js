var fs = require('fs');

//readFile은 비동기 방식 (콜백함수형식으로 사용)
// test5.js 방식은 파일을 다 읽을때까지 대기하는 것이고
// test6.js 방식은 그냥 넘어가고 파일이 끝났을때 실행을 한다.
fs.readFile('./package.json', 'utf-8', function(err, data) {
    console.log(data);
});
