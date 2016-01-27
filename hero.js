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
    if(food.poisoned){
      this.health -= (food.hp * 0.6);
    }else{
      this.health += (food.hp);
      if(this.favouriteFood == food){
        this.health += (food.hp * 0.5);
      }
    }
  }
}



module.exports = Hero;