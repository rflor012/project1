/*jshint esversion: 6 */
function Adam(name, healthPoints,
  damagePoints, manaPoints, idTile){

  this.name  = name;
  this.health = healthPoints;
  this.damage = damagePoints;
  this.mana = manaPoints;
  this.currentPosition = idTile;
  this.coordinates = [];


  Adam.prototype.attack = function(){
    return this.damage;
  };

  Adam.prototype.walkNorth = function(){
    this.currentPosition()
    console.log("You are now at position" + coordinates);

  };

  Adam.prototype.walkEast = function(){

    console.log("You are now at position" + coordinates);

  };

  Adam.prototype.walkSouth = function(){

    console.log("You are now at position" + coordinates);

  };

  Adam.prototype.walkWest = function(){

    console.log("You are now at position" + coordinates);

  };

  this.receiveDamage = function(theDamage){
    this.health -= theDamage;
  };
}

Adam.prototype = Object.create(Adam.prototype);
Adam.prototype.constructor = Adam;

var Adam1 = new Adam("Being", 100, 20, 100, [0,0]);


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
