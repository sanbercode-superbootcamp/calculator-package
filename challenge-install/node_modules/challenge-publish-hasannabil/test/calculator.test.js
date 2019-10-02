var assert = require('assert');
var expect = require('chai').expect;
var calculator = require('../src/calculator');

describe('Calculator --- Base Case Test', function() {
    // test base case
    it('should return 8 for 3 + 5', function() {
        // step case
        var result = calculator.pls(3,5);
        assert.equal(result, 8);
        expect(result).to.equal(8);
    });

    it('should return 0 for 2 - 2', function() {
        // step case
        var result = calculator.min(2,2);
        assert.equal(result, 0);
        expect(result).to.equal(0);
    });

    it('should return 4 for 8 / 2', function() {
        // step case
        var result = calculator.div(8,2);
        assert.equal(result, 4);
        expect(result).to.equal(4);
    });

    it('should return 6 for 3 * 2', function() {
        // step case
        var result = calculator.mul(3,2);
        assert.equal(result, 6);
        expect(result).to.equal(6);
    });
});

describe('Calculator --- Edge Case Test', function() {
    // test edge case
    it('should not return 7 for 3 + 5', function() {
        // step case
        var result = calculator.pls(3,5);
        assert.notEqual(result, 7);
        expect(result).to.not.equal(7);
    });

    it('should not return 1 for 2 - 2', function() {
        // step case
        var result = calculator.min(2,2);
        assert.notEqual(result, 1);
        expect(result).to.not.equal(1);
    });

    it('should not return 2 for 8 / 2', function() {
        // step case
        var result = calculator.div(8,2);
        assert.notEqual(result, 2);
        expect(result).to.not.equal(2);
    });

    it('should return 5 for 3 * 2', function() {
        // step case
        var result = calculator.mul(3,2);
        assert.notEqual(result, 5);
        expect(result).to.not.equal(5);
    });
});