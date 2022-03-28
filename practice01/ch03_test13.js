
var users = [{name : '소녀시대', age : 32}, 
{name : '에스파', age : 20}, {name : '걸스데이', age : 30}];

delete users[1];
// delete를 쓰면 내용은 삭제 되지만 빈 item이 그대로 들어가 잇어서 인덱스 길이는 유지됨
// 그래서 가운데 요소를 삭제할 때 delete를 사용하지 않음.
console.dir(users);

// 삭제되도 인덱스번호가 그대로 인것을 확인할 수 있음
users.forEach(function(elem, index) {
    console.log('원소 #' + index);
    console.dir(elem);
});

// 1번째 인덱스에, 0(추가한다), 객체
users.splice(1, 0, {name : '에프터스쿨', age : 34});
console.dir(users);

// 인덱스2부터, 1개를 삭제하겠다.
users.splice(2, 1);
console.dir(users);

