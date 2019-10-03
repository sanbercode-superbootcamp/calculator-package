var assert = require("assert");
var calculator = require('../src/calculator');
//var should = require("chai").should();
//var sinon = require("sinon");

describe('Calculator Base Case', function() {
    it('should return 4 for 2+2', function(){
        var result = calculator.plus(2, 2);
        assert.equal(result, 4);
        //should.notEqual(result, 4);
    });

    it('should return 0 for 2-2', function(){
        var result = calculator.minus(2, 2);
        assert.equal(result, 0);
        //should.notEqual(result, 4);
    });

    it('should return 4 for 2*2', function(){
        var result = calculator.times(2, 2);
        assert.equal(result, 4);
        //should.notEqual(result, 4);
    });

    it('should return 1 for 2/2', function(){
        var result = calculator.divide(2, 2);
        assert.equal(result, 1);
        //should.notEqual(result, 4);
    });
});

describe('Calculator Edge Case', function() {
    it('should not return 4 for 2+3', function(){
        var result = calculator.plus(2, 3);
        assert.notEqual(result, 4);
        //should.notEqual(result, 4);
    });

    it('should not return 0 for 2-1', function(){
        var result = calculator.minus(2, 1);
        assert.notEqual(result, 0);
        //should.notEqual(result, 4);
    });

    it('should not return 4 for 2*3', function(){
        var result = calculator.times(2, 3);
        assert.notEqual(result, 4);
        //should.notEqual(result, 4);
    });

    it('should not return 1 for 4/2', function(){
        var result = calculator.divide(4, 2);
        assert.notEqual(result, 1);
        //should.notEqual(result, 4);
    });
});