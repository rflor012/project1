var lastClicked;
var idTile;
var map =[
[0,1,1,0,0,0,0,0,0,0],  // 0 is a movaable tile
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
var header = document.getElementById(header);

var grid = clickableGrid(10, 10, function(el, row, col, i) {
 console.log("You clicked on element:", el);
 console.log("You clicked on row:", row);
 console.log("You clicked on col:", col);
 console.log("You clicked on item #:", idTile = [row, col]);

 el.className = 'clicked';
 if (lastClicked)
   lastClicked.className = '';
 lastClicked = el;
});

/*<div class="dropdown">
<button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</div>

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
*/

function clickableGrid(rows, cols, callback) {
  var i = 0;
  var grid = document.createElement('table');
  grid.className = 'grid';
  for (var r = 0; r < rows; r++) {
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c = 0; c < cols; ++c) {
      var cell = tr.appendChild(document.createElement('td'));
      cell.classList.add("tiles");
      cell.classList.add(map.indexOf(map[r]) + "," + map.indexOf(map[c]));
      switch (map[r][c]) {
        case 1:
          {
            cell.appendChild(stoneTileMaker());
          }
          break;
        case 2:
          {
            cell.appendChild(geyserTileMaker());
          }
          break;
        case 3:
          {
            cell.appendChild(treeTileMaker());
          }
          break;
      }
      //changing value inside the string can allow us to add click functionality.
      cell.addEventListener('click',(function(el, r, c, i){
        return function() {
          callback(el, r, c, i);
        };
      })(cell, r, c, i), false);
    }
  }
  return grid;
}

document.body.prepend(grid);


// background image on canvas

// setting tiles

function treeTileMaker(){
// var treeTiles = document.getElementsByClassName('tree');
var x = document.createElement("IMG");
x.setAttribute("src", "tree.gif");
x.setAttribute("class", "tree");
x.setAttribute("width", "75px");
x.setAttribute("height", "75px");
x.setAttribute("alt", "tree tile");
return (x);
}

function geyserTileMaker() {
var x = document.createElement("IMG");
x.setAttribute("src", "orc.gif");
x.setAttribute("class", "geyser");
x.setAttribute("width", "45px");
x.setAttribute("height", "45px");
x.setAttribute("alt", "geyser tile");
var geysTiles = document.getElementsByClassName('geyser');
return (x);
}

function dirtTileMaker() {
var x = document.createElement("IMG");
x.setAttribute("src", "dirt.gif");
x.setAttribute("class", "dirt");
x.setAttribute("width", "45px");
x.setAttribute("height", "45px");
x.setAttribute("alt", "dirt tile");
var dirtTiles = document.getElementsByClassName('dirt');
return (x);
}

function stoneTileMaker() {
var x = document.createElement("IMG");
x.setAttribute("src", "Hero.gif");
x.setAttribute("class", "stone");
x.setAttribute("width", "45px");
x.setAttribute("height", "45px");
x.setAttribute("alt", "stone tile");
var stoneTiles = document.getElementsByClassName('stone');
return (x);
}
