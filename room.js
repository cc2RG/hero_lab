var randomExt = require('random-ext');

var Room = function(number,contents){
  this.number = number;
  this.contents = contents;
   
}

Room.prototype = {
generatePaths:  function(){
  var randNum = randomExt.integer(4,2);
  var paths = randomExt.booleanArray(randNum);
  this.paths = paths;
},

generateNumber: function(){
  var randNum = randomExt.integer(999,0);
  this.number = randNum;
},

}
    //rng to assign a number/letter combo to identify the room

  
 
    //random function to set a default array [true,null,null,null] to one or more values to true, the array corrisponds to [south,west,north,east]
testRoom = new Room();  
testRoom.generateNumber();
testRoom.generatePaths();
console.log(testRoom);

module.exports = Room;

