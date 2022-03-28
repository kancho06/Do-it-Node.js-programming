// 여러함수가 있을때는 객체자체를 exports 한다.
var calc = {};

calc.add = function(a, b) {
    return a + b;
};

module.exports = calc;