const assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
const calculator = require('../src/calculator');

describe('Calculator', function() {
  describe ('plus', function() {
    it('should return 4 for 2 + 2', function() {
      var result = calculator.plus(2, 2);
      result.should.equal(4);
    });

    it ('shouldn\'t return 4 for 3 + 2', function() {
      var result = calculator.plus(3, 2);
      result.should.not.equal(4);
    });

    it ('should return -1 for 2 + -3', function() {
      var result = calculator.plus(2, -3);
      result.should.equal(-1);
    });

    it ('should return -5 for -2 + -3', function() {
      var result = calculator.plus(-2, -3);
      result.should.equal(-5);
    });

    it ('should return string for addition of string and number', function() {
      var result = calculator.plus('a', 2);
      expect(result).to.be.a('string');
    });
  });

  describe ('minus', function() {
    it('should return 2 for 4 - 2', function() {
      var result = calculator.minus(4, 2);
      result.should.equal(2);
    });

    it ('shouldn\'t return 3 for 4 - 2', function() {
      var result = calculator.minus(4, 2);
      result.should.not.equal(3);
    });

    it('should return 6 for 4 - -2', function() {
      var result = calculator.minus(4, -2);
      result.should.equal(6);
    });

    it('should return -2 for -4 - -2', function() {
      var result = calculator.minus(-4, -2);
      result.should.equal(-2);
    });

    it ('should return NaN for substraction of string by number', function() {
      var result = calculator.minus('a', 2);
      expect(result).to.be.NaN;
    });
  });

  describe ('multiply', function() {
    it('should return 8 for 4 * 2', function() {
      var result = calculator.multiply(4, 2);
      result.should.equal(8);
    });

    it ('shouldn\'t return 7 for 4 * 2', function() {
      var result = calculator.multiply(4, 2);
      result.should.not.equal(7);
    });

    it('should return -8 for 4 * -2', function() {
      var result = calculator.multiply(4, -2);
      result.should.equal(-8);
    });

    it('should return 8 for -4 * -2', function() {
      var result = calculator.multiply(-4, -2);
      result.should.equal(8);
    });

    it ('should return NaN for multiplication of string by number', function() {
      var result = calculator.multiply('a', 2);
      expect(result).to.be.NaN;
    });
  });

  describe ('division', function() {
    it('should return 3 for 6 / 2', function() {
      var result = calculator.divide(6, 2);
      result.should.equal(3);
    });

    it ('shouldn\'t return 2 for 6 / 2', function() {
      var result = calculator.divide(6, 2);
      result.should.not.equal(2);
    });

    it('should return -3 for 6 / -2', function() {
      var result = calculator.divide(6, -2);
      result.should.equal(-3);
    });

    it('should return 3 for -6 / -2', function() {
      var result = calculator.divide(-6, -2);
      result.should.equal(3);
    });

    it ('should return NaN for division of string by number', function() {
      var result = calculator.divide('a', 2);
      expect(result).to.be.NaN;
    });

    it ('should return Infinity for division of a number by 0', function() {
      var result = calculator.divide(3, 0);
      expect(result).to.not.be.finite;
    });

    it ('should return 0 for division of 0 by any number', function() {
      var result = calculator.divide(0, 3);
      result.should.equal(0);
    });
  });
});