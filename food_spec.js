var Hero = require('./hero');
var Rat = require('./rat');
var Food = require('./food');
var chai = require('chai');
var assert = chai.assert;



describe('food', function(){
  it('has a name and hp', function(){
    banana = new Food('banana', 30);
    assert.equal("banana", banana.name);
    assert.equal(30, banana.hp);
  });



});