var Hero = require('./hero');
var Rat = require('./rat');
var Food = require('./food');
var Room = require('./room');
var chai = require('chai');
var assert = chai.assert;

describe('room', function(){
  it('Should be have a number, have contents',function(){
    var testRoom = new Room();
    testRoom.generateNumber();
    assert.isNumber(testRoom.number);
    
    
  });
  it('Should have at least 4 potential paths', function(){
    var testRoom = new Room();
    testRoom.generatePaths();
    assert.equal(4, testRoom.paths.length);
  });

});
