var toDot = require('../');
var should = require('chai').should();

describe('to-dot', function () {
  it('should return an object with dot notation given a normal object', function () {
    var obj = {
      name: {
        first: 'Nathan',
        last: 'Tran'
      },
      price: {
        min: 10,
        max: 11,
        night: {
          min: 1,
          max: 10
        }
      }
    };

    var dot = toDot(obj);

    dot['name.first'].should.equal('Nathan');
    dot['name.last'].should.equal('Tran');
    dot['price.min'].should.equal(10);
    dot['price.max'].should.equal(11);
    dot['price.night.min'].should.equal(1);
    dot['price.night.max'].should.equal(10);
  });
});