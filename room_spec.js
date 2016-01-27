var Hero = require('./hero');
var Rat = require('./rat');
var Food = require('./food');
var Room = require('./room');
var chai = require('chai');
var assert = chai.assert;

describe('room', function(){
  it('Should be have a number, have contents and have paths',function(){
    var testRoom = new Room(34,[],[true,false,true,false]);
    assert.equal(34, testRoom.number);
    assert.deepEqual([], testRoom.contents);
    assert.deepEqual([true,false,true,false], testRoom.paths);
  });
});
