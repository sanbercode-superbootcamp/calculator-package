var assert = require('assert')
var publish = require('../src/index')

describe('Calculator', () => {

    //should
    it('should return 9 for 6 + 3', () => { 
        var result = publish.plus(6, 3)   
        assert.equal(result, 9)
    })

    it('should return 3 for 6 - 3', () => { 
        var result = publish.minus(6, 3)   
        assert.equal(result, 3)
    })

    it('should return 18 for 6 * 3', () => { 
        var result = publish.multiply(6, 3)   
        assert.equal(result, 18)
    })

    it('should return 2 for 6 / 3', () => { 
        var result = publish.div(6, 3)   
        assert.equal(result, 2)
    })

    //should not    
    it('should not return 9 for 10 + 3', () => { 
        var result = publish.plus(10, 3)   
        assert.notEqual(result, 9)
    })

    it('should not return 3 for 10 - 3', () => { 
        var result = publish.minus(10, 3)   
        assert.notEqual(result, 3)
    })

    it('should not return 18 for 10 * 3', () => { 
        var result = publish.multiply(10, 3)   
        assert.notEqual(result, 18)
    })

    it('should not return 2 for 10 / 3', () => { 
        var result = publish.div(10, 3)   
        assert.notEqual(result, 2)
    })
})