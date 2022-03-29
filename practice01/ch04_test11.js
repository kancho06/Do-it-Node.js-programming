var fs = require('fs');

var infile = fs.createReadStream('./output.txt', {flags:'r'});
// 파일을 읽어들이는 과정에서 이벤트가 발생함
infile.on('data', function(data) {
    console.log('읽어들인 데이터 : ' + data);
});

infile.on('end', function() {
    console.log('읽기 종료');    
});

