var assert = require('assert'),
    calculator = require('../src/calculator');

describe('Calculator', () => {
    describe('Addition', () => {
        it('should return 10 for 6 + 4', () => {
            var res = calculator.plus(6, 4);
            assert.equal(res, 10);
        })
        it('should not return 10 for 6 + 5', () => {
            var res = calculator.plus(6, 5);
            assert.notEqual(res, 10);
        })
        // It might be a 'Corner Case' probably
        it('should return undefined if input not a number', () => {
            var res = calculator.plus("a", 5);
            assert.equal(res, undefined);
        })
    })
    describe('Substraction', () => {
        it('should return 5 for 10 - 5', () => {
            var res = calculator.minus(10, 5);
            assert.equal(res, 5);
        })
        it('should not return 3 for 6 - 1', () => {
            var res = calculator.minus(6, 1);
            assert.notEqual(res, 3);
        })
        // It might be a 'Corner Case' probably
        it('should return undefined if input not a number', () => {
            var res = calculator.minus("a", 5);
            assert.equal(res, undefined);
        })
    })
    describe('Multiplication', () => {
        it('should return 10 for 5 x 2', () => {
            var res = calculator.times(5, 2);
            assert.equal(res, 10);
        })
        it('should not return 10 for 6 x 2', () => {
            var res = calculator.times(6, 2);
            assert.notEqual(res, 10);
        })
        // It might be a 'Corner Case' probably
        it('should return undefined if input not a number', () => {
            var res = calculator.times("a", 5);
            assert.equal(res, undefined);
        })
    })
    describe('Division', () => {
        it('should return 2 for 6 : 3', () => {
            var res = calculator.divide(6, 3);
            assert.equal(res, 2);
        })
        it('should not return 10 for 30 : 5', () => {
            var res = calculator.divide(30, 5);
            assert.notEqual(res, 10);
        })
        // It might be a 'Corner Case' probably
        it('should return undefined if input not a number', () => {
            var res = calculator.divide("a", 5);
            assert.equal(res, undefined);
        })
    })
})