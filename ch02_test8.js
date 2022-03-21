// path 내장모듈 사용

var path = require('path')

var directories = ['Users', 'Mars', 'docs'];
// 1. join 함수는 배열을 string으로 반환하고 배열사이에 , 가 들어간다.
var dirStr = directories.join();
console.log('dir : ' + dirStr);

// 2. path.sep을 사용하면 사이에 , 가아닌 / 가 들어가서 경로처럼 표시가 된다.
var dirStr2 = directories.join(path.sep);
console.log('dir2 : ' + dirStr2);
// 3. path.join();은 파일의 path를 구성하는 요소를 붙여준다
// 세번째가 가장 많이 쓰는 방법
var filepath = path.join('/Users/Mars', 'notepad.exe');
console.log('dir3 : ' + filepath);
// 4. 파일명을 제외한 폴더 path만 나타낸다
 var dirname = path.dirname(filepath);
 console.log('dirname : ' + dirname);
// 5. 파일명만 나타낸다.
 var basename = path.basename(filepath);
 console.log('basename : ' + basename);
// 6. 파일의 확장자만 나타낸다.
 var extname = path.extname(filepath);
 console.log('extname : ' + extname);


