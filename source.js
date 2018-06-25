  var lastClicked;

  var grid = clickableGrid(6, 12, function(el, row, col, i) {
    console.log("You clicked on element:", el);
    console.log("You clicked on row:", row);
    console.log("You clicked on col:", col);
    console.log("You clicked on item #:", i);

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

        //insert any element/item

        cell.classList.add("tiles");
        cell.appendChild(tileMaker());
        // cell.appendChild(tileMaker());

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
  img.src = "dirt.gif";
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
  var x = document.createElement("IMG");
  x.setAttribute("src", "dirt.gif");
  x.setAttribute("width", "75px");
  x.setAttribute("height", "75px");
  x.setAttribute("alt", "dirt tile");
  var tiles = document.getElementsByClassName('tiles');

  return (x);

}
