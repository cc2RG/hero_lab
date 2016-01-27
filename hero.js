var Hero = function(name, health, favouriteFood ){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
}

Hero.prototype = {
  talk: function(){
    console.log("My name is ",this.name);
  }
}

ourHero = new Hero("Yogle the fat bear", 100, "Pickanik baskets")

ourHero.talk();