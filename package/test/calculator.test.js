const chai = require('chai');
const calculator = require('../index');

describe('Calclulator', () => {

  it('SUMMATION should return 4 for 2 + 2', () => {
    let result = calculator.plus(2,2);
    chai.should().equal(result, 4);
  });
  it('SUMMATION should return 4 for 2 (string) + 2 (string)', () => {
    let result = calculator.plus('2','2');
    chai.should().equal(result, 4);
  });
  it('SUMMATION should return 4.5 for 4 + 0.5', () => {
    let result = calculator.plus(4,0.5);
    chai.should().equal(result, 4.5);
  });
  it('SUMMATION should return 40000000000.5 for 40000000000 + 0.5', () => {
    let result = calculator.plus(40000000000,0.5);
    chai.should().equal(result, 40000000000.5);
  });
  it('SUMMATION should not return 5 for 2 + 2', () => {
    let result = calculator.plus(2,2);
    chai.should().not.equal(result, 5);
  });
  it('SUMMATION should not return 22 for 2 (string) + 2 (string)', () => {
    let result = calculator.plus('2','2');
    chai.should().not.equal(result, '22');
  });
  it('SUMMATION should not return 40.5 for 4 + 0.5', () => {
    let result = calculator.plus(4,0.5);
    chai.should().not.equal(result, 40.5);
  });
  it('SUMMATION should not return 40000000000.5 for 40000000000 + 0.5', () => {
    let result = calculator.plus(40000000000,0.5);
    chai.should().not.equal(result, 400000000000.5);
  });


  it('SUBSTRACTION should return 0 for 2 - 2', () => {
    let result = calculator.minus(2,2);
    chai.should().equal(result, 0);
  });
  it('SUBSTRACTION should return -1 for 1 (string) - 2 (string)', () => {
    let result = calculator.minus('1','2');
    chai.should().equal(result, -1);
  });
  it('SUBSTRACTION should return 3.5 for 4 - 0.5', () => {
    let result = calculator.minus(4,0.5);
    chai.should().equal(result, 3.5);
  });
  it('SUBSTRACTION should return 40000000000 for 40000000000.5 - 0.5', () => {
    let result = calculator.minus(40000000000.5,0.5);
    chai.should().equal(result, 40000000000);
  });
  it('SUBSTRACTION should not return 5 for 2 - 2', () => {
    let result = calculator.minus(2,2);
    chai.should().not.equal(result, 5);
  });
  it('SUBSTRACTION should not return 1-2 for 1 (string) - 2 (string)', () => {
    let result = calculator.minus('1','2');
    chai.should().not.equal(result, '1-2');
  });
  it('SUBSTRACTION should not return 3 for 4 - 0.5', () => {
    let result = calculator.minus(4,0.5);
    chai.should().not.equal(result, 3);
  });
  it('SUBSTRACTION should not return 39999999999 for 40000000000.5 - 0.5', () => {
    let result = calculator.minus(40000000000.5,0.5);
    chai.should().not.equal(result, 39999999999);
  });

  it('MULTIPLICATION should return 4 for 2 * 2', () => {
    let result = calculator.times(2,2);
    chai.should().equal(result, 4);
  });
  it('MULTIPLICATION should return -2 for -1 (string) * 2 (string)', () => {
    let result = calculator.times('-1','2');
    chai.should().equal(result, -2);
  });
  it('MULTIPLICATION should return 2 for 4 * 0.5', () => {
    let result = calculator.times(4,0.5);
    chai.should().equal(result, 2);
  });
  it('MULTIPLICATION should return 20000000000 for 40000000000 * 0.5', () => {
    let result = calculator.times(40000000000,0.5);
    chai.should().equal(result, 20000000000);
  });
  it('MULTIPLICATION should not return 3 for 2 * 2', () => {
    let result = calculator.times(2,2);
    chai.should().not.equal(result, 3);
  });
  it('MULTIPLICATION should not return 2 for -1 (string) * 2 (string)', () => {
    let result = calculator.times('-1','2');
    chai.should().not.equal(result, 2);
  });
  it('MULTIPLICATION should not return 4 for 4 * 0.5', () => {
    let result = calculator.times(4,0.5);
    chai.should().not.equal(result, 4);
  });
  it('MULTIPLICATION should not return 30000000000 for 40000000000 * 0.5', () => {
    let result = calculator.times(40000000000,0.5);
    chai.should().not.equal(result, 30000000000);
  });


  it('DIVISION should return 1 for 2 / 2', () => {
    let result = calculator.divide(2,2);
    chai.should().equal(result, 1);
  });
  it('DIVISION should return -0.5 for -1 (string) / 2 (string)', () => {
    let result = calculator.divide('-1','2');
    chai.should().equal(result, -0.5);
  });
  it('DIVISION should return 8 for 4 / 0.5', () => {
    let result = calculator.divide(4,0.5);
    chai.should().equal(result, 8);
  });
  it('DIVISION should return 80.000.000.000 for 40.000.000.000 / 0.5', () => {
    let result = calculator.divide(40000000000,0.5);
    chai.should().equal(result, 80000000000);
  });
  it('DIVISION should not return 2 for 2 / 2', () => {
    let result = calculator.divide(2,2);
    chai.should().not.equal(result, 2);
  });
  it('DIVISION should not return 0.5 for -1 (string) / 2 (string)', () => {
    let result = calculator.divide('-1','2');
    chai.should().not.equal(result, 0.5);
  });
  it('DIVISION should not return 4 for 4 / 0.5', () => {
    let result = calculator.divide(4,0.5);
    chai.should().not.equal(result, 4);
  });
  it('DIVISION should not return 70.000.000.000 for 40.000.000.000 / 0.5', () => {
    let result = calculator.divide(40000000000,0.5);
    chai.should().not.equal(result, 70000000000);
  });

})
