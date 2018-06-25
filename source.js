  var lastClicked;
  var idTile;
  var map =[
    [0,0,0,0,0,0,0],
    [0,2,2,2,2,2,0],
    [0,2,2,2,2,2,0],
    [0,2,2,2,2,2,0],
    [0,2,2,2,2,2,0],
    [0,2,2,2,2,2,0],
    [0,0,0,0,0,0,0]
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

      //insert any element/items
      cell.classList.add("tiles");
      cell.appendChild(tileMaker());

      var addTile = (cell.createElement = tileMaker());
      console.log(addTile);
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

function displayResult() {
  var firstRow = document.getElementById("table").rows[0];
  var x = firstRow.insertCell(-1);
  x.innerHTML = "New cell";

  var img = document.createElement('img');
  img.src = "geyser.gif";
  x.appendChild(img);

  var img2 = document.createElement('img');
  img.src = "grasstile.gif";
  x.appendChild(img);

  var img3 = document.createElement('img');
  img.src = "geyser.gif";
  x.appendChild(img);

  var img4 = document.createElement('img');
  img.src = "stone.gif";
  x.appendChild(img);

}
// setting tiles

function tileMaker() {
  // for (var r = map.length; r > 0; r--) {
  //   var row = map[r - 1];
  //   for (var c = row.length; c > 0; c--) {
  //     var column = row[c - 1 + 0];
  //     if(map[0][c] === map[0][c]){
        var x = document.createElement("IMG");
        x.setAttribute("src", "dirt.gif");
        x.setAttribute("width", "40px");
        x.setAttribute("height", "40px");
        x.setAttribute("alt", "dirt tile");
        x.setAttribute("pixel", "1");
        var tiles = document.getElementsByClassName('tiles');
        return (x);
    //   }
    // }
  // }
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
