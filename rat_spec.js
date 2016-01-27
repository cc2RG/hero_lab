var Hero = require('./hero');
var Rat = require('./rat');
var Food = require('./food');
var chai = require('chai');
var assert = chai.assert;


describe('rat',function(){
  it('should be able to touch food and make it poisoned', function(){
    var ham = new Food("Ham", 45);
    var rat = new Rat();
    rat.touchFood(ham);
    assert.equal(true, ham.poisoned);
  });
});