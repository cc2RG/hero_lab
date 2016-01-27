var randomExt = require('random-ext');

var Room = function(){
  
   
}

Room.prototype = {
generatePaths:  function(){
  var paths = randomExt.integer(4,1);
  var pathsToRooms = [];
  var gRoom = 0;
  for(i = 0; i < paths; i++){
      gRoom = new Room();
      gRoom.generateNumber();
      pathsToRooms.push(gRoom);
    }
   this.paths = pathsToRooms;
  
  
},
generateNumber: function(){
  var randNum = randomExt.integer(999,0);
  this.number = randNum;
},
generateLoot: function(){
  var checkNum = this.number;
  if(checkNum % 7 == 0){
    this.loot = true;
}
  else{
    this.loot = false;
  }


}
}    //rng to assign a number/letter combo to identify the room

  
 
    //random function to set a default array [true,null,null,null] to one or more values to true, the array corrisponds to [south,west,north,east]
testRoom = new Room();  
testRoom.generateNumber();
testRoom.generatePaths();
testRoom.generateLoot();
console.log(testRoom);

module.exports = Room;

