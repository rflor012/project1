//the Map Generator Constructor function
var map =[
[0,1,1,0,0,0,0,0,0,0],  // 0 is a moveable tile
[1,1,1,0,0,0,0,0,0,0],  // 1 is a friendly unit
[0,0,3,0,0,0,3,0,0,0],  // 2 is an enemy
[0,0,0,3,0,0,0,0,3,0],  // 3 is an obstacle
[3,0,0,0,0,0,3,0,3,3],
[0,3,0,0,0,0,0,0,3,3],
[0,0,0,0,3,0,0,0,0,0],
[0,0,0,0,3,0,0,3,0,0],
[0,0,0,0,0,0,0,0,2,2],
[0,0,0,0,0,0,0,2,2,2],
];
var canMove;
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

Array.prototype.generateMap = function(){
  for (var r = 0; r < map.length; r++) {
        for (var c = 0; c < map[r].length; c++) {
          switch(map[r][c]) {
            case 0:
            {console.log("This tile is open for movement [" + map.indexOf(map[r]) + " , " + map.indexOf(map[c]) + "]");
            if(map[r][c] === 3){
              cell.appendChild(treeTileMaker());
              // map2[r][c] = 0;
              // map2[r][c + 1] = 1;
              console.log("new Position on Map: [" + map2.indexOf(map2[r]) + ", " + map2.indexOf(map2[c + 1]) + "]");
            }

            break;}
            case 1:
            {console.log("The generateMap function found a friendly unit at [" + map.indexOf(map[r]) + " , " + map.indexOf(map[c]) + "]");

            break;}
            case 2:
            {console.log("The generateMap function found an enemy at [" + map.indexOf(map[r]) + " , " + map.indexOf(map[c]) + "]");

            break;}
            case 3:
            console.log("the generateMap function found an obstacle at [" + map.indexOf(map[r]) + " , " + map.indexOf(map[c]) + "]");

            break;}

            map2.push(location);
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

  // Adam.prototype.insertNameOfFunction = function(){
  //   return this.damage;
  // };
  //var Adam1 = new Adam("Being", 100, 20, 100, 15, [x, y], d);

  Adam.prototype.attack = function() {
    return this.damage;
  };

  Adam.prototype.walkNorth = function() {
    this.currentPosition();
    console.log("You are now at position" + idTile);
  };

  Adam.prototype.walkEast = function() {

    console.log("You are now at position" + idTile);

  };

  Adam.prototype.walkSouth = function() {

    console.log("You are now at position" + idTile);

  };

  Adam.prototype.walkWest = function() {

    console.log("You are now at position" + idTile);

  };

  this.receiveDamage = function(theDamage) {
    this.health -= theDamage;
  };
}

Adam.prototype = Object.create(Adam.prototype);
Adam.prototype.constructor = Adam;
var Adam1 = new Adam("Adam", 100, 20, [0, 0], "s");

//mage spell user
function Mage(name, health, damage, mana, magicDamage, idTile, direction) {
  Adam.call(this, health, damage, idTile, direction);
  this.name = name;
  this.mana = mana;
  this.mdamage = magicDamage;

  Mage.prototype.castSpell = function() {
    console.log(this.name + " cast SpellName");
    return this.magicdamage;
  };
}

Mage.prototype = Object.create(Adam.prototype);
Mage.prototype.constructor = Mage;
var Sorc = new Mage("Mage", 100, 10, 100, 40, [0,1], "s");

//Ranged Attack Character
function Eve(name, health, damage, rangedAttackDamage, idTile, direction) {
  Adam.call(this, health, damage, idTile, direction);
  this.name = name;
  this.ranged = rangedAttackDamage;

  Eve.prototype.rangedAttack = function() {
    console.log(this.name + " fired an arrow!");
    return this.rangedAttackDamage;
  };
}

Eve.prototype = Object.create(Adam.prototype);
Eve.prototype.constructor = Eve;
var Archer = new Eve("Archer",100,20,45,[0, 2], "s");


//Gad help me
//integrating mars rover module
// alert("COMMAND LIST: (case sensitive)\n l:left \n r:right \n f:forward \n b:back");
//   var d =["n"];                       //direction
//   var x = 0;  //Math.random                        //X axis (West-East)
//   var y = 0;  //Math.random                        //Y axis (South-North)
//   var t = 0;                          //ditch indicator
//   var inv = 0;                        //invalid count
// var i = prompt("INPUT COMMANDS: ");  //commands
// var compass = {n:"North",s:"South",w:"West",e:"East"};

// I've decided to take out alerts inside the loop, it messes up the travel log.

// console.log("\nADAM'S TRAVEL LOG: ");
// for(a=0; a < i.length; a++) {
//   switch(i[a]){
//     case "f":
//         { if (d[d.length-1] === "n" || d[d.length-1] === "s")
//           { y = moveFY(d,y);
//             d.push(d[d.length-1]);
//             }
//           else if (d[d.length-1] === "w" || d[d.length-1] === "e")
//           { x = moveFX(d,x);
//             d.push(d[d.length-1]);
//             }
//         }
//         break;
//     case "b":
//         { if (d[d.length-1] === "n" || d[d.length-1] === "s")
//           { y = moveBY(d,y);
//             d.push(d[d.length-1]);
//             }
//           else if (d[d.length-1] === "w" || d[d.length-1] === "e")
//           { x = moveBX(d,x);
//             d.push(d[d.length-1]);
//             }
//         }
//         break;
//     case "r":
//         turnRight(d,i,a);
//         break;
//     case "l":
//         turnLeft(d,i,a);
//         break;
//     default:
//         inv += 1;
//         d.push(d[d.length-1]);
//         // alert("invalid command: " + i[a]);
//         break;
//   }
// // OUTPUT RESULTS
//     if (x < 0 || y < 0 || x > 10 || y > 10) {t=1; /*alert("YOU DROVE IT IN A DITCH!")*/}
//     console.log("X:",x + " Y:",y);
// }
//
// console.log("\nADAM IS CURRENTLY FACING:", compass[d[d.length-1]]);
// if (t === 1){
// console.log("\nSTATUS: dead");
// alert("You drove it into a ditch");
// console.log("\nDIRECTION LIST: " + d);
// console.log("\nCOMMAND LIST: " + i);
// console.log("\nINVALID COMMAND COUNT: " + inv + "\n");
// }
// // PROCESS FOR DIRECTION
//
// function turnLeft(d,i,a){
//   // alert("ROVER TURNED LEFT");
//   switch(d[a]) {
//     case "n":
//       d.push("w");
//       break;
//     case "s":
//       d.push("e");
//       break;
//     case "w":
//       d.push("s");
//       break;
//     case "e":
//       d.push("n");
//       break;
//     default:
//       break;
//     }
// }
//
// function turnRight(d,i,a){
//     // alert("ROVER TURNED RIGHT");
//     switch(d[a]) {
//       case "n":
//         d.push("e");
//         break;
//       case "s":
//         d.push("w");
//         break;
//       case "w":
//         d.push("n");
//         break;
//       case "e":
//         d.push("s");
//         break;
//       default:
//         break;
//     }
// }
//
// // PROCESS FOR POSITION
//
// function moveFY(d,y) {
//   if (d[d.length-1] == "n") return(y+1);
//     else if (d[d.length-1] == "s") return(y-1);
// }
//
// function moveFX(d,x) {
//   if (d[d.length-1] == "e") return(x+1);
//     else if (d[d.length-1] == "w") return(x-1);
// }
//
// function moveBY(d,y) {
//   if (d[d.length-1] === "n") return(y-1);
//     else if (d[d.length-1] === "s")return(y+1);
// }
//
// function moveBX(d,x) {
//   if (d[d.length-1] === "e") return(x-1);
//     else if (d[d.length-1] === "w") return(x+1);
// }
