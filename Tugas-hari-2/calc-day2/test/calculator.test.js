const calculator = require('../src/calculator');
const should = require('chai').should();
const expect = require('chai').expect;
describe('Calculator', function () {
    it('addition should return 7 for 3 + 4', function () {
        let result = calculator.addition(3, 4);
        should.equal(result, 7);
    });

    it('addition should not return 7 for 3 + 8', function () {
        let result = calculator.addition(3, 8);
        should.not.equal(result, 7);
    });

    it('subtraction should return 2 for 5 - 3', function () {
        let result = calculator.subtraction(5, 3);
        should.equal(result, 2);
    });

    it('subtraction should not return 5 for 10 - 4', function () {
        let result = calculator.subtraction(10, 4);
        should.not.equal(result, 5);
    });

    it('division should return 2 for 10 / 5', function () {
        let result = calculator.division(10, 5);
        should.equal(result, 2);
    });

    it('division should not return 1 for 15 / 5', function () {
        let result = calculator.division(15, 5);
        should.not.equal(result, 1);
    });

    it('multiplication should return 25 for 5 * 5', function () {
        let result = calculator.multiplication(5, 5);
        should.equal(result, 25);
    });

    it('multiplication should not return 10 for 3 * 5', function () {
        let result = calculator.multiplication(3, 5);
        should.not.equal(result, 10);
    });

    it('modulus should return 0 for 4 % 2', function () {
        let result = calculator.modulus(4, 2);
        should.equal(result, 0);
    });

    it('modulus should not return 0 for 10 % 4', function () {
        let result = calculator.modulus(3, 5);
        should.not.equal(result, 0);
    });
})