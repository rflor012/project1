//the Map Generator Constructor function
var map =[
[2,0,0,0,0,2],  // 0 is a movaable tile
[0,1,1,1,1,0],  // 1 is a friendly unit
[0,3,3,3,3,0],
[2,0,0,0,0,2]
];

var map2 = map;
var r = 0;
var c = 0;

function Cell(location, row, col, tile){
  this.location = location;
  this.row = row;
  this.col = col;
  this.tile = tile;
  this.contents = "empty";
  this.hero = false;
  this.enemy = [];
}

Array.prototype.generateMap = function() {
  for (var r = 0; r < map.length; r++) {
    for (var c = 0; c < map[r].length; c++) {
      switch (map[r][c]) {
        case 0 || 3:
          {
            console.log("the generateMap function found an obstacle at [" + map.indexOf(map[r]) + " , " + map.indexOf(map[c]) + "]");
            break;
          }
        case 1:
          {
            console.log("The generateMap function found a friendly unit at [" + map.indexOf(map[r]) + " , " + map.indexOf(map[c]) + "]");
            break;
          }
        case 2:
          {
            console.log("The generateMap function found an enemy at [" + map.indexOf(map[r]) + " , " + map.indexOf(map[c]) + "]");
            break;
          }
      }
    }
  }
};

Map.prototype = Object.create(Array.prototype);
Map.prototype.constructor = Map;

function Adam(name, healthPoints, damagePoints, idTile, direction) {
  this.name = name;
  this.health = healthPoints;
  this.damage = damagePoints;
  this.currentPosition = idTile;
  this.direction = direction;
  this.animationSprites = [0,1,2,3]; //We'll use this later to grab a value from the prototypes to toggle hit events, mana events..

  // Adam.prototype.insertNameOfFunction = function(){
  //   return this.damage;
  // };
  //var Adam1 = new Adam("Being", 100, 20, 100, 15, [x, y], d);

  Adam.prototype = Object.create(Adam.prototype);
  Adam.prototype.constructor = Adam;


  Adam.prototype.attack = function() {
    return this.damage;
  };

  this.receiveDamage = function(theDamage) {
    this.health -= theDamage;
    console.log(this.name + "was attacked!");
    if (this.health > 0){
      return this.name + "has received " + damage + " points of damage.";
    } else{
      return this.name + " has succumbed to his wounds";
    }
  };

  this.receiveSavageBite = function(savageBiteDamage){
    this.health -= savageBiteDamage;
    console.log(this.name + "was attacked!");
    if (this.health > 0){
      return this.name + " was bitten by a savage Orc. " + this.name + " takes " + savageBiteDamage + "points of damage!";
    } else {
      return this.name + "Dies of infection!";
    }
  };
}


var Adam1 = new Adam("Adam", 100, 20, [0, 0], "s");

//mage spell user
function Mage(name, health, damage, mana, magicDamage, idTile, direction) {
  Adam.call(this, health, damage, idTile, direction);
  this.name = name;
  this.mana = mana;
  this.magicDamage = magicDamage;

  Mage.prototype = Object.create(Adam.prototype);
  Mage.prototype.constructor = Mage;

  Mage.prototype.castSpell = function() {
    console.log(this.name + " cast a Spell.");
    return this.magicDamage;
  };

  Mage.prototype.receiveDamage = function(damage){
    this.health -= damage;
    console.log(this.name + "was attacked!");
    if (this.health > 0){
      return this.name + " has received " + damage + " points of damage.";
    } else {
      return this.name + " has succumbed to his wounds";
    }
};

}

var Sorc = new Mage("Mage", 100, 10, 100, 40, [0,1], "s");

//Ranged Attack Character
function Eve(name, health, damage, rangedAttackDamage, idTile, direction) {
  Adam.call(this, health, damage, idTile, direction);
  this.name = name;
  this.ranged = rangedAttackDamage;

  Eve.prototype = Object.create(Adam.prototype);
  Eve.prototype.constructor = Eve;

  Eve.prototype.receiveDamage = function(damage){
    this.health -= damage;

    if (this.health > 0){
      return this.name + " has received " + damage + " points of damage.";
    }else {
        return this.name + "has succumbed to her wounds.";
    }
  };

  Eve.prototype.rangedAttack = function() {
    console.log(this.name + " fired an arrow!");
    return this.rangedAttackDamage;
  };
}

var Archer = new Eve("Archer",100,20,45,[0, 2], "s");

//creating an enemy type.
function Orc(name, health, damage, savageBiteDamage, idTile, direction) {
  Adam.call(this, health, damage, idTile, direction);
  this.name = name;
  this.bite = savageBiteDamage;

  Orc.prototype = Object.create(Adam.prototype);
  Orc.prototype.constructor = Orc;

  Orc.prototype.biteTheBadGuy = function (){
    console.log(this.name + " chomps down with his fangs.");
    return this.bite;
  };

  Orc.prototype.receiveDamage = function(damage){
    this.health -= damage;

    if (this.health > 0){
      return this.name + " has received " + damage + " points of damage.";
    }else {
        return this.name + "has succumbed to its wounds.";
    }
  };

  Orc.prototype.receiveMagicDamage = function(magicDamage){
    this.health -= magicDamage;

    if (this.health > 0){
      return this.name + " has received " + magicDamage + " points of magic damage.";
    }else {
        return this.name + "disintigrates into a pile of ash.";
    }
  };

  Orc.prototype.receiveRangedDamage = function(rangedAttackDamage){
    this.health -= rangedAttackDamage;

    if (this.health > 0){
      return this.name + " has received " + rangedAttackDamage + " points of damage.";
    }else {
        return this.name + "is essentially a pin cushion. RIP";
    }
  };
}

function FieldOfBattle(){
  this.friendlyArmy = [];
  this.orcArmy = [];
  this.theDead = 0;
}

FieldOfBattle.prototype.addSoldier = function (aSoldier){
  this.friendlyArmy.push(aSoldier);
};

FieldOfBattle.prototype.addOrc = function (orc){
  this.orcArmy.push(orc);
};

FieldOfBattle.prototype.friendlyAttack = function () {
  var friendlyIndex = Math.floor(Math.random() * this.friendlyArmy.length); //
  var orcIndex = Math.floor(Math.random() * this.orcArmy.length);

  var friendlyUnit = this.friendlyArmy[friendlyIndex];
  var orcUnit = this.orcArmy[orcIndex];
  var that = this;
  var combatResult = theOrc.receiveDamage(friendlyUnit.attack());
    if(orcUnit.health <= 0){
      //animation code will go here
      that.theDead +=1;
      that.orcArmy.splice(orcIndex, 1);
      //dom selector here to toggle a tombstone at place in index of orcArmy;
      //we can add class tombstone and toggle it with orc css selector. will need to work on this.
    }
    return combatResult;
};

FieldOfBattle.prototype.orcAttack = function () {
  var friendlyIndex = Math.floor(Math.random() * this.friendlyArmy.length); //
  var orcIndex = Math.floor(Math.random() * this.orcArmy.length);

  var friendlyUnit = this.friendlyArmy[friendlyIndex];
  var orcUnit = this.orcArmy[orcIndex];
  var that = this;
  var combatResult = friendlyUnit.receiveDamage(orcUnit.attack());
    if(friendlyUnit.health <= 0){
      //animation code will go here
      that.theDead +=1;
      that.friendlyArmy.splice(friendlyIndex, 1);
      //dom selector here to toggle a tombstone at place in index of orcArmy;
      //we can add class tombstone and toggle it with orc css selector. will need to work on this.
    }
    return combatResult;
};

FieldOfBattle.prototype.combatStatus = function() {
  if (this.friendlyArmy.length === 0)
    return "The last of the hero's have fallen...the Orcs feast upon their bodies...";
  } else if (this.orcArmy.length === 0) {}
}
