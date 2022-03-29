var fs = require('fs');

// w는 쓸 수 있는 권한을 넣어준다.
// r은 읽을 수 있는 권한
fs.open('./output.txt', 'w', function(err, fd) {
    if(err) {
        console.log('파일 오픈 시 에러 발생');
        console.dir(dir);
        return;
    }
    //쓸 내용을 Buffer에 넣어서 전달해 주어야한다.
    // \n은 다음줄로 가기 (엔터 역할)
    // new Buffer(string or number or args) -> Buffer.from(string) 으로 사용형식이 바뀌었다.
    // Buffer.alloc(number)
    // Buffer.from(string)
    // Buffer.from(string, encoding)
    // Buffer.from(...arguments)
    var buf = Buffer.from('안녕\n');
    // 0 은 인덱스 번호 
    fs.write(fd, buf, 0, buf.length, null, 
        function(err, written, buffer) {
            if(err) {
                console.log('파일 쓰기 시 에러 발생');
                console.dir(err);
            }

            console.log('파일 쓰기 완료');

            fs.close(fd, function() {
                console.log('파일 닫기 완료');
            });
    });
    fs.read(fd, buf, 0, buf.length, null, function(err) {
        if(err) {
            console.log('파일 읽기 에러 발생');
            console.dir(err);
        }
        console.log('파일 읽기 완료');
    });
});