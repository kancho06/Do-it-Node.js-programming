var person = {};

person.name = '소녀시대';
person['age'] = 20;
//객체 안에 함수를 할당가능
person.add = function(a, b) {
    return a + b;
}

console.log('더하기 : ' + person.add(20, 20));
