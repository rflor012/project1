window.onload = function() {
//the Map Generator Constructor function
var map = [
  [3,3,0,0,1],
  [0,1,1,0,2],
  [0,2,2,2,3],
  [1,4,0,1,0],
  [2,0,0,0,3],
];

var r = 0;
var c = 0;


// Array.prototype.generateMap = function() {
//   for (var r = 0; r < map.length; r++) {
//     for (var c = 0; c < map[r].length; c++) {
//       switch (map[r][c]) {
//         case 0 || 3:
//           {
//             console.log("the generateMap function found an obstacle at [" + map.indexOf(map[r]) + " , " + map.indexOf(map[c]) + "]");
//             break;
//           }
//         case 1:
//           {
//             console.log("The generateMap function found a friendly unit at [" + map.indexOf(map[r]) + " , " + map.indexOf(map[c]) + "]");
//             theHeros = document.getElementsByClassName('hero');
//             break;
//           }
//         case 2:
//           {
//             console.log("The generateMap function found an enemy at [" + map.indexOf(map[r]) + " , " + map.indexOf(map[c]) + "]");
//             break;
//           }
//       }
//     }
//   }
// };

Map.prototype = Object.create(Array.prototype);
Map.prototype.constructor = Map;

// BASELINE KNIGHT CHARACTER TYPE----------------------------------------------------------------------------------------------------------
function Adam(name, healthPoints, damagePoints, idTile, direction) {
  this.name = name;
  this.health = healthPoints;
  this.damage = damagePoints;
  this.currentPosition = idTile;
  this.direction = direction;
  this.animationSprites = [0,1,2,3]; //We'll use this later to grab a value from the prototypes to toggle hit events, mana events..


  Adam.prototype.attack = function() {
    return this.damage;
  };

  Adam.prototype.receiveDamage = function(theDamage) {
    this.health -= theDamage;
    if (this.health > 0){
      return this.name + " was attacked and has received " + theDamage + " points of damage.";
    } else if (this.health < 0){
      return this.name + " has succumbed to his wounds";
    }
  };

  Adam.prototype.receiveSavageBite = function(savageBiteDamage){
    this.health -= savageBiteDamage;
    console.log(this.name + " was attacked!");
    if (this.health > 0){
      return this.name + " was bitten by a savage Orc. " + this.name + " takes " + savageBiteDamage + " points of damage!";
    } else {
      return this.name + " dies of infection!";
    }
  };

}
//MAGE CHARACTER TYPE-------------------------------------------------------------------------------------------------
function Mage(name, health, damage, mana, magicDamage, idTile, direction) {
  this.name = name;
  this.health = health;
  this.damage = damage;
  this.mana = mana;
  this.magicDamage = magicDamage;
  this.idTile = idTile;
  this.direction = direction;

  Mage.prototype.attack = function() {
    return this.damage;
  };

  Mage.prototype.castSpell = function() {
    console.log(this.name + " cast a Spell.");
    return this.magicDamage;
  };

  Mage.prototype.receiveDamage = function(damage){
    this.health -= Number(damage);
    if (this.health > 0){
      return this.name + " has received " + damage + " points of damage.";
    } else {
      return this.name + " has succumbed to his wounds";
    }
};

Mage.prototype.receiveSavageBite = function(savageBiteDamage){
  this.health -= savageBiteDamage;
  if (this.health > 0){
    return this.name + " was bitten by a savage Orc. " + this.name + " takes " + savageBiteDamage + " points of damage!";
  } else {
    return this.name + " dies of infection!";
  }
};

}
Mage.prototype = Object.create(Adam.prototype);
Mage.prototype.constructor = Mage;

// EVE CHARACTER TYPE--------------------------------------------------------------------------------------------
function Eve(name, health, damage, rangedAttackDamage, idTile, direction) {
  this.name = name;
  this.health = health;
  this.damage = damage;
  this.ranged = rangedAttackDamage;
  this.idTile = idTile;
  this.direction = direction;

  Eve.prototype.attack = function() {
    return Number(this.damage);
  };

  Eve.prototype.receiveDamage = function(damage){
    this.health -= damage;

    if (this.health > 0){
      return this.name + " has received " + damage + " points of damage.";
    }else if(this.health < 0) {
        return this.name + "has succumbed to her wounds.";
    }
  };

  Eve.prototype.rangedAttack = function() {
    console.log(this.name + " fired an arrow!");
    return this.ranged;
  };
}

Eve.prototype.receiveSavageBite = function(savageBiteDamage){
  this.health -= savageBiteDamage;
  console.log(this.name + " was attacked!");
  if (this.health > 0){
    return this.name + " was bitten by a savage Orc. " + this.name + " takes " + savageBiteDamage + " points of damage!";
  } else {
    return this.name + " dies of infection!";
  }
};

// ORC CHARACTER TYPE----------------------------------------------------------------------------------------
function Orc(name, health, damage, savageBiteDamage, idTile, direction) {
  this.name = name;
  this.health = health;
  this.damage = damage;
  this.bite = savageBiteDamage;
  this.idTile = idTile;
  this.direction = direction;

  Orc.prototype.attack = function() {
    return this.damage;
  };

  Orc.prototype.biteTheBadGuy = function (){
    console.log(this.name + " chomps down with his fangs.");
    return this.bite;
  };

  Orc.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0){
      return this.name + " has received " + damage + " points of damage.";
    }else if (this.health <0) {
      return this.name + "has succumbed to its wounds.";
    }
  };

  Orc.prototype.receiveMagicDamage = function(magicDamage){
    this.health -= magicDamage;

    if (this.health > 0){
      return this.name + " has received " + magicDamage + " points of magic damage.";
    }else {
      return this.name + " disintigrates into a pile of ash.";
    }
  };

  Orc.prototype.receiveRangedDamage = function(rangedAttackDamage){
    this.health -= rangedAttackDamage;
    if (this.health > 0){
      return this.name + " has received " + rangedAttackDamage + " points of ranged damage.";
    }else {
        return this.name + "is essentially a pin cushion. RIP";
    }
  };
}

function FieldOfBattle(){
  this.friendlyArmy = [];
  this.orcArmy = [];
  this.theDead = [];
}

FieldOfBattle.prototype.addHero = function (aHero){
  this.friendlyArmy.push(aHero);
};

FieldOfBattle.prototype.addOrc = function (orc){
  this.orcArmy.push(orc);
};


FieldOfBattle.prototype.friendlyAttack = function () {
  var friendlyIndex = Math.floor(Math.random() * this.friendlyArmy.length); //
  var orcIndex = Math.floor(Math.random() * this.orcArmy.length);

  var friendlyUnit = this.friendlyArmy[friendlyIndex];
  var orcUnit = this.orcArmy[orcIndex]; //this.orcArmy[orcIndex].idTile === [2,1] id
  var that = this;
  var combatResult = orcUnit.receiveDamage(friendlyUnit.attack());
  for (var r = 0; r < map.length; r++) {
    for (var c = 0; c < map[r].length; c++) {

    }
  }
  if(orcUnit.health <= 0){
    //animation code will go here
    $('td > IMG').eq(map[Orc.idTile]).addClass('dead').removeClass('orc');
    $('td > IMG').eq(orcIndex).prop('src', "dead.png");
    $('td > IMG').eq(orcIndex).prop('width', '45px');
    $('td > IMG').eq(orcIndex).prop('height', '45px');

    that.theDead.push(orcUnit);
    that.orcArmy.splice(orcIndex, 1);
    //dom selector here to toggle a tombstone at place in index of orcArmy;
    //we can add class tombstone and toggle it with orc css selector. will need to work on this.
  }
  var attackerUnit = $('.hero').eq(friendlyIndex);
  attackerUnit.addClass("engager-indicator");
  setTimeout(function(){
    attackerUnit.removeClass('engager-indicator');
  }, 1000);
  var woundedOrc = $('.orc').eq(orcIndex);
  woundedOrc.addClass('combat-indicator');
  setTimeout(function(){
    woundedOrc.removeClass('combat-indicator');
  },1000);

    return combatResult;
};

FieldOfBattle.prototype.orcAttack = function () {
  var friendlyIndex = Math.floor(Math.random() * this.friendlyArmy.length); //
  var orcIndex = Math.floor(Math.random() * this.orcArmy.length);

  var friendlyUnit = this.friendlyArmy[friendlyIndex];
  var orcUnit = this.orcArmy[orcIndex];
  var that = this;
  var combatResult = friendlyUnit.receiveDamage(orcUnit.attack());
  var x = this.orcArmy[orcIndex].idTile[0];
  var y = this.orcArmy[orcIndex].idTile[1];
  if(orcUnit.health <= 0){
    //animation code will go here
    $('IMG').eq().addClass('dead').removeClass('orc');
    $('IMG').eq().prop('src', "dead.png");
    that.theDead.push(friendlyUnit);
    that.friendlyArmy.splice(friendlyIndex, 1);
    //dom selector here to toggle a tombstone at place in index of orcArmy;
    //we can add class tombstone and toggle it with orc css selector. will need to work on this.
  }
  var attackerUnit = $('.orc').eq(orcIndex);
  attackerUnit.addClass("engager-indicator");
  setTimeout(function(){
    attackerUnit.removeClass('engager-indicator');
  }, 1000);
  var woundedHero = $('.hero').eq(friendlyIndex);
  woundedHero.addClass('combat-indicator');
  setTimeout(function(){
    woundedHero.removeClass('combat-indicator');
  },1000);

    return combatResult;
};

FieldOfBattle.prototype.combatStatus = function() {
  if (this.friendlyArmy.length === 0){
    return "The last of the hero's have fallen...the Orcs feast upon their bodies";
  } else if (this.orcArmy.length === 0) {
    return "Our hero's emerge victorious, let us honor those who have fallen: " + theDead;
  } else{
    return false;
  }
};

var theFieldOfBattle = new FieldOfBattle();

var Archer = new Eve("Archer", 100,20,45,[1, 1], "s");
var Sorc = new Mage("Mage", 100, 10, 100, 40, [1,2], "s");
var Knight1 = new Adam("Adam", 100, 20, [1, 3], "s");
var Knight2 = new Adam("Adam2", 100, 20, [1, 4], "s");

var Orc1 = new Orc("Supgugh", 120, 20, 30, [2, 1], "n");
var Orc2 = new Orc("Crothu", 120, 20, 30, [2, 2], "n");
var Orc3 = new Orc("Ug", 120, 20, 30, [2, 3], "n");
var Orc4 = new Orc("Trugagh", 120, 20, 30, [2, 4], "n");

theFieldOfBattle.addHero(Archer);
theFieldOfBattle.addHero(Sorc);
theFieldOfBattle.addHero(Knight1);
theFieldOfBattle.addHero(Knight2);

theFieldOfBattle.addOrc(Orc1);
theFieldOfBattle.addOrc(Orc2);
theFieldOfBattle.addOrc(Orc3);
theFieldOfBattle.addOrc(Orc4);

//function Orc(name, health, damage, savageBiteDamage, idTile, direction)

  //function Orc(name, health, damage, savageBiteDamage, idTile, direction)

  // adding DOM features
  function updateDOM(){
    for(var i = 0; i < theFieldOfBattle.friendlyArmy.length; i++){
      $('.soldier-box .health').eq(i).html("<span>health:</span>"+theFieldOfBattle.friendlyArmy[i].health);
      $('.soldier-box .strength').eq(i).html("<span>strength:</span>"+theFieldOfBattle.friendlyArmy[i].strength);
    }
    for(var i = 0; i < theFieldOfBattle.orcArmy.length; i++){
      $('.orc-box .health').eq(i).html("<span>health:</span>"+theFieldOfBattle.orcArmy[i].health);
      $('.orc-box .strength').eq(i).html("<span>strength:</span>"+theFieldOfBattle.orcArmy[i].strength);
    }
    for(var i = 0; i < theFieldOfBattle.theDead; i++){
      $('.death-box .health').eq(i).html('RIP');
      $('.death-box .strength').eq(i).html('RIP');
    }

  if(theFieldOfBattle.combatStatus()){
      $('.info scroll-left').text($(theFieldOfBattle.combatResult()));
  }
  }
  $(document).ready(function(){
    updateDOM();
    $('.attack').on('click', function(){ $('.info').text(theFieldOfBattle.friendlyAttack()); //theFieldOfBattle.friendlyAttack()
    setTimeout(function(){ updateDOM();}, 2000);});
    $('.attack').on('click', function(){ $('.info').text(theFieldOfBattle.orcAttack()); //theFieldOfBattle.friendlyAttack()
    setTimeout(function(){ updateDOM();}, 2000);});
    $('.cast').on('click', function(){ $('.info').text(Mage.prototype.castSpell()); //theFieldOfBattle.friendlyAttack()
    setTimeout(function(){ updateDOM();}, 2000);});
    $('.shoot').on('click', function(){ $('.info').text(Eve.prototype.rangedAttack()); //theFieldOfBattle.friendlyAttack()
    setTimeout(function(){ updateDOM();}, 2000);});
    $('.bite').on('click', function(){ $('.info').text(Orc.prototype.biteTheBadGuy()); //theFieldOfBattle.friendlyAttack()
    setTimeout(function(){ updateDOM();}, 2000);});

  });

};
  // add the on.load thing to call theFieldOfBattle
