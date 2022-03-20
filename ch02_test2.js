console.log('argv 속성의 파라미터 수 : ' + process.argv.length);
console.dir(process.argv) 
// process 에는 전체 경로가 들어가 있다. 전역객체 
process.argv.forEach(function(item, index) {
    console.log(index + ' : ' + item)
});