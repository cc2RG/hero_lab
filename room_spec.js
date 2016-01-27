var Hero = require('./hero');
var Rat = require('./rat');
var Food = require('./food');
var Room = require('./room');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('room', function(){
  it('Should be have a number',function(){
    var testRoom = new Room();
    testRoom.generateNumber();
    assert.isNumber(testRoom.number);
    
    
  });
  it('Should have at least 1 potential path', function(){
    var testRoom = new Room();
    testRoom.generatePaths();
    expect(testRoom.paths.length).to.be.within(1,4);
  });
  it('Should either have / have no loot, depending if the room number is divisible by 7 ', function(){
    var testRoom = new Room();
    testRoom.generateLoot();
    assert.isBoolean(testRoom.loot);
  });
});
