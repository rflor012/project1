var lastClicked;
var idTile;

var grid = clickableGrid(7, 13, function(el, row, col, i) {
  console.log("You clicked on element:", el);
  console.log("You clicked on row:", row);
  console.log("You clicked on col:", col);
  console.log("You clicked on item #:", idTile= [row, col]);


  el.className = 'clicked';
  if (lastClicked)
    lastClicked.className = '';
  lastClicked = el;
});

function clickableGrid(rows, cols, idTile) {
  var i = 0;
  var grid = document.createElement('table');
  var gridBoard = document.getElementsByClassName('tile');
  grid.className = 'grid';
  for (var r = 0; r < rows; ++r) {
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c = 0; c < cols; ++c) {
      var cell = tr.appendChild(document.createElement('td'));
        cell.classList.add("tile");
        s = document.getElementsByClassName("tile")[c];
      if (document.getElementsByClassName("tile")[4]) {
        var addTreeTile = (cell.createElement = treeTileMaker());
        cell.classList.add("tree");
        return cell.appendChild(treeTileMaker());
      // } else if (cell.className === "tile" && document.getElementsByClassName("tile")[4]) {
      //   cell.classList.add("geyser");
      //   var addGeysTile = (cell.createElement = geyserTileMaker());
      //   cell.appendChild(geyserTileMaker());
      // } else if (cell.className === "tile" && grid[3]) {
      //   cell.classList.add("dirt");
      //   var addDirtTile = (cell.createElement = dirtTileMaker());
      //   cell.appendChild(dirtTileMaker());
      // } else if (cell.className === "tile" && grid[3]) {
      //   cell.classList.add("stone");
      //   var addStoneTile = (cell.createElement = stoneTileMaker());
      //   cell.appendChild(stoneTileMaker());
      }
      cell.addEventListener('click', (function(el, r, c, idTile) {
        return function() {
          callback(el, r, c, i);
        };
      })(cell, r, c, i), false);
    }
  }
  return grid;
}
      //insert any element/items

      // cell.classList.remove("foo", "bar", "baz");
      // cell.classList.add("tile", "tree", "geyser", "stone", "dirt");

      // cell.appendChild(treeTileMaker());
// before i head to bed, I was trying to find a way to use these class lists to define tiles and which tiles get which tiles.


      // console.log(addTile);
//       cell.addEventListener('click', (function(el, r, c, i) {
//         return function() {
//           callback(el, r, c, i);
//         };
//       })(cell, r, c, i), false);
//     }
//   }
//   return grid;
// }

document.body.appendChild(grid);

// background image on canvas
/*
$(document).ready(function(){
  var theGame = new MemoryGame(cards);
  theGame.shuffleCard();
  var html = '';
  theGame.cards.forEach(function(pic){
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="' + pic.img + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
    $('#memory_board').html(html);
  });

*/
//Here i was trying to make a function that would assign the tiles to each corresponding grid.
// setting tiles
// $(document).ready(function(){
//   var theGrid = getElementsByClassName('grid');
//   var html = "";
//   theGrid.cell.forEach(function(tile){
//
//   });
// });



function treeTileMaker() {
var treeTiles = document.getElementsByClassName('tree');
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
x.setAttribute("src", "dirt.gif");
x.setAttribute("width", "75px");
x.setAttribute("height", "75px");
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

// function checkGameBoard(grid) {
// for (var r = grid.length; r > 0; r--) {
//   var row = grid[r-1];
//   for (var c = row.length; c > 0; c--) {
//     var column = row[c-1 + 0];
//     if (column === 1) {
//       console.log("This is a grass tile " + "[Row " + row + " , Column " + column + " ]");
//     } else if (column === 2) {
//       console.log("This is a dirt tile " + "[Row " + row + " ,Column " + column + " ]");
//     } else if (column === 3) {
//       console.log("This is a stone tile " + "[Row " + row + " ,Column " + column + " ]");
//     } else if (column === 4) {
//       console.log("This is a geyser tile" + "[Row " + row + " ,Column " + column + " ]");
//     } else if(column === 0){
//       console.log("This tile has a 0 " + "[Row " + row + " ,Column " + column + " ]");
//     }
//   }
// }
// }


//PROTO TYPE STUFF FROM HERE down
// /*jshint esversion: 6 */
// function Adam(name, healthPoints,
//   damagePoints, manaPoints, direction, position){
//
//   this.name  = name;
//   this.health = healthPoints;
//   this.damage = damagePoints;
//   this.mana = manaPoints;
//   this.currentPosition = position;
  // this.coordinates = document.getElementsByClassName('hero')
