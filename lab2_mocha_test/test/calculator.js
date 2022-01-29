const chai = require('chai')
const expect = chai.expect

const calculator = require('../calculator')

describe('Calculator', () => {
    describe('Addition', () => {
        it('add(5, 2) expected result 7 PASS', () => {
            expect(calculator.add(5,2)).to.equal(7)
        })
        it('add(5, 2) expected result 8 FAIL', () => {
            expect(calculator.add(5,2)).to.equal(8)
        })
    })
})

describe('Calculator', () => {
    describe('Subtraction', () => {
        it('sub(5, 2) expected result 3 PASS', () => {
            expect(calculator.sub(5,2)).to.equal(3)
        })
        it('sub(5, 2) expected result 5 FAIL', () => {
            expect(calculator.sub(5,2)).to.equal(5)
        })
    })
})


describe('Calculator', () => {
    describe('Multiplication', () => {
        it('mul(5, 2) expected result 10 PASS', () => {
            expect(calculator.mul(5,2)).to.equal(10)
        })
        it('mul(5, 2) expected result 8 FAIL', () => {
            expect(calculator.mul(5,2)).to.equal(12)
        })
    })
})


describe('Calculator', () => {
    describe('Division', () => {
        it('div(10, 2) expected result 5 PASS', () => {
            expect(calculator.div(10,2)).to.equal(5)
        })
        it('div(10, 2) expected result 2 FAIL', () => {
            expect(calculator.div(10,2)).to.equal(2)
        })
    })
})