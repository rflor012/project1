var lastClicked;
var idTile;
var map =[
[2,0,0,0,0,2],
[0,1,1,1,1,0],
[0,3,3,3,3,0],
[2,0,0,0,0,2]
];

var grid = clickableGrid(4, 6, function(el, row, col, i) {
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
  for (var r = 0; r < rows; r++) {
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c = 0; c < cols; ++c) {
      var cell = tr.appendChild(document.createElement('td'));
      cell.classList.add("tiles");
      switch (map[r][c]) {
        case 1:
          {
            cell.appendChild(heroTileMaker());
            cell.classList.add("hero");
          }
          break;
        case 2:
          {
            cell.appendChild(geyserTileMaker());
          }
          break;
        case 3:
          {
          cell.appendChild(orcTileMaker());
          cell.classList.add("orc");
          }
          break;
        case 0:
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
x.setAttribute("width", "45px");
x.setAttribute("height", "45px");
x.setAttribute("alt", "tree tile");
return (x);
}

function geyserTileMaker() {
var x = document.createElement("IMG");
x.setAttribute("src", "geyser.gif");
x.setAttribute("class", "geyser");
x.setAttribute("width", "45px");
x.setAttribute("height", "45px");
x.setAttribute("alt", "geyser tile");
return (x);
}

function orcTileMaker() {
var x = document.createElement("IMG");
x.setAttribute("src", "orc.gif");
x.setAttribute("class", "dirt");
x.setAttribute("width", "45px");
x.setAttribute("height", "45px");
x.setAttribute("alt", "orc tile");
return (x);
}

function heroTileMaker() {
var x = document.createElement("IMG");
x.setAttribute("src", "Hero.gif");
x.setAttribute("class", "stone");
x.setAttribute("width", "45px");
x.setAttribute("height", "45px");
x.setAttribute("alt", "hero tile");
var stoneTiles = document.getElementsByClassName('stone');
return (x);
}
