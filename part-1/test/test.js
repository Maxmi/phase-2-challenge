const expect = require('chai').expect;
const functions = require('../functions');
// const snippet = require('../functions');


describe('weekday', function() {
  it('should return correct weekday for valid input', function() {
    expect(functions.weekday(new Date('2017,09,10'))).to.equal('Sun');
  });
  it('should return correct weekday for valid input', function() {
    expect(functions.weekday(new Date('2017,09,09'))).to.equal('Sat');
  });
  it('should return correct weekday for valid input', function() {
    expect(functions.weekday(new Date('2017,09,08'))).to.equal('Fri');
  });

});

describe('snippet', function() {
  it('should return shortened string if its longer than given maxlength', function() {
    expect(functions.snippet('For the following exersices', 10)).to.equal('For the fo...');
  });
  it('should return unchanged string if its shorter than given maxlength', function() {
    expect(functions.snippet('Hello World', 20)).to.equal('Hello World');
  });

});

describe('numProps', function() {
  it('should return number of objects own properties', function() {
    let testObj = {
      name: 'Dominique',
      age: 30,
      phone: '555-555-5555'
    };
    expect(functions.numProps(testObj)).to.equal(3);
  });
  it('should return 0 if object has no propertis', function() {
    expect(functions.numProps({})).to.equal(0);
  });

})

describe('filterBetween', function() {
  it('should return array with values that meet conditions', function() {
    let testArr = [5, 10, 15, 20, 25, 30, 35];
    let expArr = [15, 20, 25, 30];
    expect(functions.filterBetween(testArr, 15, 34)).to.deep.equal(expArr);
  });
  it('should return empty array if no value meets conditions', function() {
    let testArr = [1, 2, 3, 4];
    expect(functions.filterBetween(testArr, 22, 34)).to.deep.equal([]);
  });

})
