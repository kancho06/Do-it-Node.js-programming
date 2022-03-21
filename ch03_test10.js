var users = [{name : '소녀시대', age : 32}, {name : '에스파', age : 20}, {name : '티아라', age : 32}];;

//c스타일 포문 (요즘언어에서는 권장하지 않음)
//성능이 좋지 않다.
for (var i = 0; i < users.length; i++) {
    console.log('배열 원소 #' + i + ' : ' + users[i].name);
};

// c스타일 포문 대신 forEach함수를 써서 안에 함수를 전달한다.
users.forEach(function(elem, index) {
    console.log('배열 원소 #' + index + ' : ' + elem.name)
});