var users = [{name : '소녀시대', age : 32}, 
{name : '에스파', age : 20}, {name : '걸스데이', age : 30}];

// 1번째 인덱스부터 3번째 전까지 복사 (3번째 인덱스는 포함안됨)
var users2 = users.slice(1, 2);

console.log('users 객체');
console.dir(users);

console.log('users2 객체');
console.dir(users2);
