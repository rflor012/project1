function Adam(name, healthPoints,
  damagePoints, manaPoints, magicDamagePoints,
  idTile, direction){

  this.name  = name;
  this.health = healthPoints;
  this.damage = damagePoints;
  this.mana = manaPoints;
  this.mdamage = magicDamagePoints;
  this.currentPosition = idTile;
	this.direction = direction;

  // Adam.prototype.insertNameOfFunction = function(){
  //   return this.damage;
  // };
  //var Adam1 = new Adam("Being", 100, 20, 100, 15, [x, y], d);

  Adam.prototype.attack = function(){
    return this.damage;
  };

  Adam.prototype.castSpell = function(){
    console.log(this.name + " cast SpellName");
    return this.mdamage;
  };

  Adam.prototype.walkNorth = function(){
    this.currentPosition();
    console.log("You are now at position" + idTile);
  };

  Adam.prototype.walkEast = function(){

    console.log("You are now at position" + idTile);

  };

  Adam.prototype.walkSouth = function(){

    console.log("You are now at position" + idTile);

  };

  Adam.prototype.walkWest = function(){

    console.log("You are now at position" + idTile);

  };

  this.receiveDamage = function(theDamage){
    this.health -= theDamage;
  };
}


Adam.prototype = Object.create(Adam.prototype);
Adam.prototype.constructor = Adam;

var Adam1 = new Adam("Being", 100, 20, 100, 15, [x, y], d);

//Ranged Attack Character
function Eve(name, healthPoints,
  damagePoints, rangedAttackDamage,
  idTile, direction){
    Adam.call(this, health, damage, idTile, direction);

    this.name = name;
    this.rangedAttackDamage = ranged;

    Eve.prototype.rangedAttack = function(){
      console.log (this.name + " fired an arrow!");
      return this.rangedAttackDamage;
    };
  }

  function Mage(name, healthPoints,
    damagePoints, magicDamagePoints,
    manaPoints, idTile, direction){
    Adam.call(this, health, damage, idTile, direction);

    this.name = name;
    this.magicDamagePoints = mDamage;
    this.manaPoints = mana;

    Mage.prototype.castSpell = function(){
      console.log (this.name + "cast a magic spell!");
      return this.magicDamagePoints;
    };
}
//Gad help me
//integrating mars rover module

alert("COMMAND LIST: (case sensitive)\n l:left \n r:right \n f:forward \n b:back");
  var d =["n"];                       //direction
  var x = 0;  //Math.random                        //X axis (West-East)
  var y = 0;  //Math.random                        //Y axis (South-North)
  var t = 0;                          //ditch indicator
  var inv = 0;                        //invalid count
var i = prompt("INPUT COMMANDS: ");  //commands
var compass = {n:"North",s:"South",w:"West",e:"East"};

// I've decided to take out alerts inside the loop, it messes up the travel log.

console.log("\nADAM'S TRAVEL LOG: ");
for(a=0; a < i.length; a++) {
  switch(i[a]){
    case "f":
        { if (d[d.length-1] === "n" || d[d.length-1] === "s")
          { y = moveFY(d,y);
            d.push(d[d.length-1]);
            }
          else if (d[d.length-1] === "w" || d[d.length-1] === "e")
          { x = moveFX(d,x);
            d.push(d[d.length-1]);
            }
        }
        break;
    case "b":
        { if (d[d.length-1] === "n" || d[d.length-1] === "s")
          { y = moveBY(d,y);
            d.push(d[d.length-1]);
            }
          else if (d[d.length-1] === "w" || d[d.length-1] === "e")
          { x = moveBX(d,x);
            d.push(d[d.length-1]);
            }
        }
        break;
    case "r":
        turnRight(d,i,a);
        break;
    case "l":
        turnLeft(d,i,a);
        break;
    default:
        inv += 1;
        d.push(d[d.length-1]);
        // alert("invalid command: " + i[a]);
        break;
  }
// OUTPUT RESULTS
    if (x < 0 || y < 0 || x > 10 || y > 10) {t=1; /*alert("YOU DROVE IT IN A DITCH!")*/}
    console.log("X:",x + " Y:",y);
}

console.log("\nADAM IS CURRENTLY FACING:", compass[d[d.length-1]]);
if (t === 1){
console.log("\nSTATUS: dead");
alert("You drove it into a ditch");
console.log("\nDIRECTION LIST: " + d);
console.log("\nCOMMAND LIST: " + i);
console.log("\nINVALID COMMAND COUNT: " + inv + "\n");
}
// PROCESS FOR DIRECTION

function turnLeft(d,i,a){
  // alert("ROVER TURNED LEFT");
  switch(d[a]) {
    case "n":
      d.push("w");
      break;
    case "s":
      d.push("e");
      break;
    case "w":
      d.push("s");
      break;
    case "e":
      d.push("n");
      break;
    default:
      break;
    }
}

function turnRight(d,i,a){
    // alert("ROVER TURNED RIGHT");
    switch(d[a]) {
      case "n":
        d.push("e");
        break;
      case "s":
        d.push("w");
        break;
      case "w":
        d.push("n");
        break;
      case "e":
        d.push("s");
        break;
      default:
        break;
    }
}

// PROCESS FOR POSITION

function moveFY(d,y) {
  if (d[d.length-1] == "n") return(y+1);
    else if (d[d.length-1] == "s") return(y-1);
}

function moveFX(d,x) {
  if (d[d.length-1] == "e") return(x+1);
    else if (d[d.length-1] == "w") return(x-1);
}

function moveBY(d,y) {
  if (d[d.length-1] === "n") return(y-1);
    else if (d[d.length-1] === "s")return(y+1);
}

function moveBX(d,x) {
  if (d[d.length-1] === "e") return(x-1);
    else if (d[d.length-1] === "w") return(x+1);
}

// hopefully Adam is integrated
// var Adam1 = new Adam("Being", 100, 20, 100, [x,y], d);
// console.log(Adam1);

/// down is viking old code
// Viking
// function Viking(name, health, strength){
//   Soldier.call(this, health, strength);
//   this.name = name;
//
//   this.receiveDamage = function(theDamage){
//     this.health -= theDamage;
//     if (this.health > 0){
//       return this.name + " has received " + theDamage + " points of damage";
//     } else {
//       return this.name + " has died in act of combat";
//     }
//   };
//
//   this.battleCry = function(){
//     return "Odin Owns You All!";
//   };
// }
//
// Viking.prototype = Object.create(Soldier.prototype);
//
// // Saxon
// function Saxon(health, strength){
//   Soldier.call(this, health, strength);
//
//   this.receiveDamage = function(theDamage){
//     this.health -= theDamage;
//     if (this.health > 0){
//       return "A Saxon has received " + theDamage + " points of damage";
//     } else {
//       return "A Saxon has died in combat";
//     }
//   };
// }
// Saxon.prototype = Object.create(Soldier.prototype);
//
// // War
// function War(){
//   this.vikingArmy = [];
//   this.saxonArmy = [];
//
//   War.prototype.addViking=function(aViking){
//     this.vikingArmy.push(aViking);
//   };
//
//   War.prototype.addSaxon=function(aSaxon){
//     this.saxonArmy.push(aSaxon);
//   };
//
//   War.prototype.vikingAttack=function(){
//     var aRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
//     var aRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
//     var combatResult = this.saxonArmy[aRandomSaxon].receiveDamage(this.vikingArmy[aRandomViking].strength);
//
//     //get rid of the unworthy Saxons
//     var that = this;
//
//     this.saxonArmy.forEach(function(eachSaxon){
//
//       var index = that.saxonArmy.indexOf(eachSaxon);
//       if(eachSaxon.health <= 0){
//         that.saxonArmy.splice(index, 1);
//         }
//
//       });
//       return combatResult;
//     };
//   }
//
// War.prototype.saxonAttack=function(){
//     var aRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
//     var aRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
//     var combatResult = this.vikingArmy[aRandomViking].receiveDamage(this.saxonArmy[aRandomSaxon].strength);
//
//     //get rid of the unworthy Vikings
//     var that = this;
//
//     this.vikingArmy.forEach(function(eachViking){
//
//       var index = that.vikingArmy.indexOf(eachViking);
//       if(eachViking.health <= 0){
//         that.vikingArmy.splice(index, 1);
//         }
//       });
//       return combatResult;
//   };
//
// War.prototype.showStatus=function(){
//   if (this.saxonArmy.length === 0){
//     return "Vikings have won the war of the century!";
//   } else if(this.vikingArmy.length === 0) {
//     return "Saxons have fought for their lives and survive another day...";
//   }
//     else if(this.saxonArmy.length >= 1 || this.vikingArmy.length >= 1){
//     return "Vikings and Saxons are still in the thick of battle.";
//   } else{
//     return "So that did not quite work...";
//   }
// };
