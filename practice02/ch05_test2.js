var http = require('http');

var server = http.createServer();

var host = '192.168.32.73';

var port = 3000;


server.listen(port, host, '50000', function() {
    console.log('웹서버 실행됨.');
});

// 서버객체가 EventEmitter를 상속해서 on() 함수로 이벤트를 발생시킬 수 있다.
server.on('connection', function(socket) {
    console.log('클라이언트 소켓이 접속함.');
});

server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');
    // console.dir(req);

    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    res.write('<h1>웹 서버로부터 받은 응답<h1>');
    res.end();
});