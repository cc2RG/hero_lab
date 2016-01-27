var Hero = function(name, health, favouriteFood ){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
}

Hero.prototype = {
  talk: function(){
    console.log("My name is ", this.name);
    return ("My name is "+ this.name);
  },
  eat: function(food){
    this.health += (food.hp);
  
  }
}



module.exports = Hero;