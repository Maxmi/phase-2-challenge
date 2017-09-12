const expect = require('chai').expect;
const { weekday, snippet, numProps, filterBetween } = require('../functions');

//
describe('weekday', function() {
  it('should return Sun for Sep 10, 2017', function() {
    expect(weekday(new Date(2017,08,10))).to.equal('Sun');
  });
  it('should return Mon for Oct 24, 1977', function() {
    expect(weekday(new Date(1977,00,24))).to.equal('Mon');
  });
  it('should return Wed for Apr 12, 1961', function() {
    expect(weekday(new Date(1961,03,12))).to.equal('Wed');
  });
  it('should return error message if date not provided', function() {
    expect(weekday()).to.equal('Date object not provided');
  });

});

describe('snippet', function() {
  it('should return shortened string if string.length > maxlength', function() {
    expect(snippet('For the following exersices', 10)).to.equal('For the fo...');
  });
  it('should return unchanged string if string.length < maxlength', function() {
    expect(snippet('Hello World', 20)).to.equal('Hello World');
  });
  it('should return error message if nothing is passed to function', function() {
    expect(snippet()).to.equal('Data not provided');
  });

});

describe('numProps', function() {
  it('should return number of objects own properties', function() {
    let testObj = {
      name: 'Dominique',
      age: 30,
      phone: '555-555-5555'
    };
    expect(numProps(testObj)).to.equal(3);
  });
  it('should return 0 if object has no propertis', function() {
    expect(numProps({})).to.equal(0);
  });
  it('should return error message if nothing passed to function', function() {
    expect(numProps()).to.equal('Data not provided');
  });

})

describe('filterBetween', function() {
  it('should return array with filtered values', function() {
    let testArr = [5, 10, 15, 20, 25, 30, 35];
    let expArr = [15, 20, 25, 30];
    expect(filterBetween(testArr, 15, 34)).to.deep.equal(expArr);
  });
  it('should return empty array if no value meets conditions', function() {
    let testArr = [1, 2, 3, 4];
    expect(filterBetween(testArr, 22, 34)).to.deep.equal([]);
  });
  it('should return error message if nothng passed to function', function() {
    expect(filterBetween()).to.equal('Data not provided');
  });

})
