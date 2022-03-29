var output = '안녕!';
// var buffer1 = new Buffer(10);
// 위와 같은 방법으로 사용할 수 있고 number,string관계 없이 들어가서 편하지만
// 보안에러가 뜨기 때문에 밑의 alloc으로 변수타입을 지정해서 넣어준다.
var buffer1 = Buffer.alloc(10);
var len = buffer1.write(output, 'utf-8');
console.log('버퍼에 쓰인 문자열이 길이 : ' + len);
console.log('첫번째 버퍼에 쓰인 문자열 : ' + buffer1.toString());

console.log('버퍼 객체인지 여부 : ' + Buffer.isBuffer(buffer1));

var byteLen = Buffer.byteLength(buffer1);
console.log('byteLen' + byteLen);

var str1 = buffer1.toString('utf-8', 0, 6);
console.log('str1 : ' + str1);

var buffer2 = Buffer.from('Hello', 'utf-8')
console.log('두번째 버퍼의 길이 : ' + Buffer.byteLength(buffer2));

var str2 = buffer2.toString('utf-8', 0, Buffer.byteLength(buffer2));
console.log('str2 : ' + str2);