// 배열에 함수를 넣을 수 있다. (엘리먼트로)
var users = [{name : '소녀시대', age : 32}, {name : '에스파', age: 20}];

var oper = function(a, b) {
    return a + b;
};

users.push(oper);

console.dir(users);
// 넣은 함수를 실행 
console.log('세번째 배열 요소 : ' + users[2](10, 10));