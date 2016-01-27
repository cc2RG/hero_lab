var Hero = require('./hero');
var Rat = require('./rat');
var Food = require('./food');
var chai = require('chai');
var assert = chai.assert;


describe('hero',function(){
  it('the hero has a name, and can talk',function(){
    var ourHero = new Hero("Yogle the fat bear", 100, "Pickanik baskets")
   ourHero.talk();
   assert.equal("My name is Yogle the fat bear", ourHero.talk() );
  });

  it('the hero has health',function(){
    var ourHero = new Hero("Yogle the fat bear", 100, "Pickanik baskets")
   assert.equal(100, ourHero.health);
  });

  it('the hero has favourite food',function(){
    var ourHero = new Hero("Yogle the fat bear", 100, "Pickanik baskets")
   assert.equal("Pickanik baskets", ourHero.favouriteFood);
  });

  it('should be able to eat food which replenishes health',function(){
    var ourHero = new Hero("pacman", 56, "cherries");
    var cherries = new Food("Cherries", 20);

    var startHealth = ourHero.health;

    ourHero.eat(cherries);

    assert.equal((startHealth + 20), ourHero.health);
  });


});







ourHero = new Hero("Yogle the fat bear", 100, "Pickanik baskets")

ourHero.talk();
