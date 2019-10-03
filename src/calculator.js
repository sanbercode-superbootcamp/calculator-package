var calculator = {
    plus: function(a, b) {
        if(typeof a != "number" || typeof b != "number") {
            return undefined;
        } else {
            return a + b;
        }
    },
    minus: function(a, b) {
        if(typeof a != "number" || typeof b != "number") {
            return undefined;
        } else {
            return a - b;
        }
    },
    multi: function(a, b) {
        if(typeof a != "number" || typeof b != "number") {
            return undefined;
        } else {
            return a * b;
        }
    },
    divide: function(a, b) {
        if(typeof a != "number" || typeof b != "number") {
            return undefined;
        } else {
            return a / b;
        }
    }
}

// console.log(calculator.plus("a", 5));

module.exports = calculator;