var lastClicked;
var idTile;
var map =[
   [3,0,1,4,1,0,0,1,2,0,0,4,1], //s 0 is a movaable tile
   [0,0,0,0,0,0,0,1,0,1,0,0,2],// 1 is a friendly unit
   [0,0,1,0,0,0,0,0,0,1,2,0,1],// 2 is an enemy
   [0,0,0,0,0,0,0,1,2,2,0,1,2],// 3 is an obstacle
   [0,0,0,2,0,0,0,1,0,2,2,1,1],// 4 hero.gif
   [0,0,0,0,0,0,0,4,2,2,0,0,0],// s5 orc.gif
   [0,0,2,5,2,0,0,0,2,0,1,2,0]
 ];

var grid = clickableGrid(7, 13, function(el, row, col, i) {
 console.log("You clicked on element:", el);
 console.log("You clicked on row:", row);
 console.log("You clicked on col:", col);
 console.log("You clicked on item #:", idTile = [row, col]);

 el.className = 'clicked';
 if (lastClicked)
   lastClicked.className = '';
 lastClicked = el;
});

function clickableGrid(rows, cols, callback) {
 var i = 0;
 var grid = document.createElement('table');
 grid.className = 'grid';
 for (var r = 0; r < rows; ++r) {
   var tr = grid.appendChild(document.createElement('tr'));
   for (var c = 0; c < cols; ++c) {
     var cell = tr.appendChild(document.createElement('td'));
     cell.classList.add("tiles");



     if(map[r][c] === 1){
       cell.appendChild(stoneTileMaker());
     } else if(map[r][c] === 2){
       cell.appendChild(geyserTileMaker());     }
       else if(map[r][c] === 3){
         cell.appendChild(dirtTileMaker());
         //currently generating a hero
       }

     cell.addEventListener('click', (function(el, r, c, i) {
       return function() {
         callback(el, r, c, i);
       };
     })(cell, r, c, i), false);
   }
 }
 return grid;
}

document.body.appendChild(grid);

// background image on canvas

// setting tiles

function treeTileMaker(){
// var treeTiles = document.getElementsByClassName('tree');
var x = document.createElement("IMG");
x.setAttribute("src", "tree.gif");
x.setAttribute("width", "75px");
x.setAttribute("height", "75px");
x.setAttribute("alt", "tree tile");
return (x);
}

function geyserTileMaker() {
var x = document.createElement("IMG");
x.setAttribute("src", "geyser.gif");
x.setAttribute("width", "75px");
x.setAttribute("height", "75px");
x.setAttribute("alt", "geyser tile");
var geysTiles = document.getElementsByClassName('geyser');
return (x);
}

function dirtTileMaker() {
var x = document.createElement("IMG");
x.setAttribute("src", "Hero.gif");
x.setAttribute("width", "45px");
x.setAttribute("height", "45px");
x.setAttribute("alt", "dirt tile");
var dirtTiles = document.getElementsByClassName('dirt');
return (x);
}

function stoneTileMaker() {
var x = document.createElement("IMG");
x.setAttribute("src", "stone.gif");
x.setAttribute("width", "75px");
x.setAttribute("height", "75px");
x.setAttribute("alt", "stone tile");
var stoneTiles = document.getElementsByClassName('stone');
return (x);
}

function checkGameBoard(grid) {
 for (var r = grid.length; r > 0; r--) {
   var row = grid[r - 1];
   for (var c = row.length; c > 0; c--) {
     var column = row[c - 1 + 0];
     if (column === 1) {
       console.log("This is a grass tile " + "[Row " + row + " , Column " + column + " ]");
     } else if (column === 2) {
       console.log("This is a dirt tile " + "[Row " + row + " ,Column " + column + " ]");
     } else if (column === 3) {
       console.log("This is a stone tile " + "[Row " + row + " ,Column " + column + " ]");
     } else if (column === 4) {
       console.log("This is a geyser tile" + "[Row " + row + " ,Column " + column + " ]");
     } else if (column === 0) {
       console.log("This tile has a 0 " + "[Row " + row + " ,Column " + column + " ]");
     }
   }
 }
}
