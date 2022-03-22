var person1 = {name : '소녀시대', age : 32};
var person2 = {name : '걸스데이', age : 30};

function Person(name, age) {
    this.name = name;
    this.age = age;
};

// Person 의 프로토타입 속성에 walk라는 속성을 추가할 수 있다.
// 그리고 함수를 할당
Person.prototype.walk = function(speed) {
    console.log(speed + 'km 속도로 걸어갑니다.');
}; 

// 생성자를 통해 만들면 walk라는 속성이 추가되서 만들어진다.
var person3 = new Person('소녀시대', 32);
var person4 = new Person('걸스데이', 30);

person3.walk(10);