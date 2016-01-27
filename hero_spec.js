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
  it('Should replenish 1.5x the normal replenishment value, if is favourite food', function(){
    var cherries = new Food("Cherries", 20);
    var ourHero = new Hero("pacman", 56, cherries);

    var startHealth = ourHero.health;

    ourHero.eat(cherries);

    assert.equal(startHealth + 30, ourHero.health);
  });
  it('Should damage health by 60%  of the consumed poisoned foods hp', function(){
    var fish = new Food("Fish", 50);
    var ourHero = new Hero("Rick", 100, "burgers - not invented yet");
    var rat = new Rat();
    rat.touchFood(fish);
    var startHealth = ourHero.health;
    var expectValue = (ourHero.health - (fish.hp * 0.6)); 
    ourHero.eat(fish);
    assert.equal(expectValue, ourHero.health);

  });
});







ourHero = new Hero("Yogle the fat bear", 100, "Pickanik baskets")

ourHero.talk();
