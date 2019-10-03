module.exports = {
    plus: (a, b) => {
        if (typeof a != 'number' || typeof b != 'number') {
            return undefined;
        }
        return a + b;
    },
    minus: (a, b) => {
        if (typeof a != 'number' || typeof b != 'number') {
            return undefined;
        }
        return a - b;
    },
    divide: (a, b) => {
        if (typeof a != 'number' || typeof b != 'number') {
            return undefined;
        }
        return a / b;
    },
    times: (a, b) => {
        if (typeof a != 'number' || typeof b != 'number') {
            return undefined;
        }
        return a * b;
    }
}