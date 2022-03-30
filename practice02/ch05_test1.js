var http = require('http');

var server = http.createServer();

var port = 3000;

var host = '192.168.32.73';

// 파라미터 '50000' 은 동시접속제한수 설정
server.listen(port, host, '50000', function() {
    console.log('웹 서버가 실행되었습니다. -> ', host + ':' + port);
});



