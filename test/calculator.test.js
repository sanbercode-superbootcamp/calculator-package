var calculator = require('../index')
var sinon = require('sinon')
var assert =  require('assert')

describe('Calculator', () => {
    describe('#testCalcBase', () => {
        it('should return 3 for 1+2', () => {
            var result = calculator.add(1, 2)
            assert.equal(result, 3)
        })
        it('should return 1 for 2-1', () => {
            var result = calculator.substract(2, 1)
            assert.equal(result, 1)
        })
        it('should return 2 for 1*2', () => {
            var result = calculator.multiple(1, 2)
            assert.equal(result, 2)
        })
        it('should return 0.33 for 1/3', () => {
            var result = calculator.division(1, 3)
            assert.equal(result, 1/3)
        })
        it('should return 9 for 3**2', () => {
            var result = calculator.exponen(3, 2)
            assert.equal(result, 9)
        })
        it('should return 1 for 3 mod 2', () => {
            var result = calculator.modulus(3, 2)
            assert.equal(result, 1)
        })
    })

    describe('#testCall', () => {
        it('calls orginal function', () => {
            var spyAdd = sinon.spy(calculator, 'add')
            for(var i=0;i<10;i++){
                calculator.add(i, i+2)
            }
            assert.equal(spyAdd.callCount, 10)
        })
    })

    describe('#testCalcEdge', () => {
        it('should return 30111206 for 1828282+28282924', () => {
            var result = calculator.add(1828282, 28282924)
            assert.equal(result, 30111206)
        })
        it('should return -26454642 for 1828282+28282924', () => {
            var result = calculator.substract(1828282, 28282924)
            assert.equal(result, -26454642)
        })
        it('should return 32012964 for 5658*5658', () => {
            var result = calculator.multiple(5658, 5658)
            assert.equal(result, 32012964)
        })
        it('should return 788889/3 for 788889/3', () => {
            var result = calculator.division(788889, 3)
            assert.equal(result, 788889/3)
        })
    })
})

