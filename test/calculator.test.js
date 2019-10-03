var assert = require('assert');
var should = require('chai').should();
var calculator = require('../src/calculator');

describe('Calculator', function() {
    it('should return 10 for 5 + 5', function() {
        var result = calculator.plus(5, 5);
        assert.equal(result, 10);
    });
    it('should return 0 for 5 - 5', function() {
        var result = calculator.minus(5, 5);
        assert.equal(result, 0);
    });
    it('should return 25 for 5 * 5', function() {
        var result = calculator.multi(5, 5);
        assert.equal(result, 25); 
    });
    it('should return 1 for 5 / 5', function() {
        var result = calculator.divide(5, 5);
        assert.equal(result, 1);
    });
    it('should not return 10 for 6 + 5', function() {
        var result = calculator.plus(6, 5);
        assert.notEqual(result, 10);
    });
    it('should not return 0 for 6 - 5', function() {
        var result = calculator.minus(6, 5);
        assert.notEqual(result, 0);
    });
    it('should not retur 25 for 6 * 5', function() {
        var result = calculator.multi(6, 5);
        assert.notEqual(result, 25);
    });
    it('should not return 1 for 6 / 5', function() {
        var result = calculator.divide(6, 5);
        assert.notEqual(result, 1);
    });
    it('should return undefined for invalid type in term of addition', function() {
        var result = calculator.plus("a", 5);
        assert.equal(result, undefined);
    });
    it('should return undefined for invalid type in term of subtraction', function() {
        var result = calculator.minus("a", 5);
        assert.equal(result, undefined);
    });
    it('should return undefined for invalid type in term of multipilcation', function() {
        var result = calculator.multi("a", 5);
        assert.equal(result, undefined);
    });
    it('should return undefined for invalid type in term of division', function() {
        var result = calculator.divide("a", 5);
        assert.equal(result, undefined);
    });
});