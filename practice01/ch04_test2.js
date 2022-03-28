// 이 프로세스가 끝날 때 실행('exit')
process.on('exit', function() {
    console.log('exit event 발생함.');
});

//2초후 실행
setTimeout(function() {
    console.log('2초 후에 실행되었음.');
}, 2000);

// 첫 실행
console.log('2초 후에 실행될 것임.');
