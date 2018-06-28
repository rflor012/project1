var lastClicked;
var idTile;


var map = [
  [3,3,0,0,1],
  [0,1,1,0,2],
  [0,2,2,2,3],
  [1,4,0,1,0],
  [2,0,0,0,3],
];


var grid = clickableGrid(5, 5, function(el, row, col, i) {
 console.log("You clicked on element:", el);
 console.log("You clicked on row:", row);
 console.log("You clicked on col:", col);
 console.log("You clicked on item #:", idTile = [row, col]);


 el.className = 'clicked';
 if (lastClicked)
   lastClicked.className = idTile;
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
    switch(map[r][c]) {
      case 1: {cell.appendChild(soldierTileMaker());
      cell.classList.add('hero');}
      break;
      case 2: {cell.appendChild(orcTileMaker());
      cell.classList.add('orc');}
      break;
      case 3: {cell.appendChild(treeTileMaker());}
      break;
      case 4: {cell.appendChild(geyserTileMaker());}
      break;
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


function treeTileMaker(){
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
x.setAttribute("width", "100px");
x.setAttribute("height", "100px");
x.setAttribute("alt", "geyser tile");
var geysTiles = document.getElementsByClassName('geyser');
return (x);
}

function soldierTileMaker() {
var x = document.createElement("IMG");
x.setAttribute("src", "Hero.gif");
x.setAttribute("class", "hero");
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

function orcTileMaker() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "orc.gif");
  x.setAttribute("class", "orc");
  x.setAttribute("width", "50px");
  x.setAttribute("height", "50px");
  x.setAttribute("alt", "shrekt");
  var stoneTiles = document.getElementsByClassName('porcy');
  return (x);
  }
