var assert = require('assert');
var should = require('chai').should();
var calculator = require('../src/calculatorlib');

describe('BaseCase', function() {
    it('should return 4 for 2 + 2', function() {
        var result = calculator.plus(2, 2);
        assert.equal(result, 4);
    });
    it('should not return 13 for 3 - 2', function() {
        var result = calculator.minus(3, 2);
        assert.notEqual(result, 13);
    });
    it('should return 6 for 3 * 2', function() {
        var result = calculator.times(3, 2);
        assert.equal(result, 6);
    });
    it('should return 2 for 16 / 8', function() {
        var result = calculator.divide(16, 8);
        should.equal(result, 2);
    });
});

describe('EdgeCase', function() {
    it('should return 0.0000000008 for 0.0000000005 + 0.0000000003', function() {
        var result = calculator.plus(0.0000000005, 0.0000000003);
        assert.equal(result, 0.0000000008);
    });
    it('should not return 0 for 0 - 0.0000000002', function() {
        var result = calculator.minus(0, 0.0000000002);
        assert.notEqual(result, 0);
    });
    it('should return 974067840 for 123456 * 7890', function() {
        var result = calculator.times(123456, 7890);
        should.equal(result, 974067840);
    });
    it('should not return 0 for 2 / 0', function() {
        var result = calculator.divide(2, 0);
        should.not.equal(result, 2);
    });
});