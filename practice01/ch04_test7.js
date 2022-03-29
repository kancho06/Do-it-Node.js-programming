var fs = require('fs');

fs.writeFile('./output.txt', 'Hello.', function(err) {
    if(err) {
        console.log('Error.');
        console.dir(err);
        return;
    }
    
    console.log('output.txt 파일에 데이터 쓰기 완료')
});