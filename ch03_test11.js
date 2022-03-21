var users = [{name : '소녀시대', age : 30}, {name : '에스파', age : 20}];
console.log('배열 원소의 개수 : ' + users.length);

users.push({name : '티아라', age : 32});
console.log('배열 원소의 개수 : ' + users.length);

var elem = users.pop();
console.log('배열 원소의 개수 : ' + users.length);

console.log('pop로 꺼낸 세번째 원소');
console.dir(elem);