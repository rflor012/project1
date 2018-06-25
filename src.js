/*
<ul id="fruits"></ul>
And the JavaScript:

var fruitsList = document.getElementById('fruits'),
    li = document.createElement('li'),
    clone;
['apples','bananas','cranberries'].forEach(function (fruit, index) {
    clone = li.cloneNode();
    clone.textContent = index + ': ' + fruit;
    fruitsList.appendChild(clone);
});
Resulting in the output:

<ul id="fruits">
    <li>0: apples</li>
    <li>1: bananas</li>
    <li>2: cranberries</li>
</ul>
*/



var gameBoard = function createGameBoard(width, height){
      var result = [];
      for (var i = 0 ; i < width; i++) {
          result[i] = [];
          for (var j = 0; j < height; j++) {
              result[i][j] = Math.floor(Math.random() * 5);
          }
      }
      this.gameBoard = result;
      return this.gameBoard;
  };

var gameBoard;

var tileBoard = function createTileBoard(resultsArray){
    theArray = document.getElementById('game-board');
    tileItem = document.createElement("li");
    gameBoard.forEach(function(tile, index){
    clone = tileItem.cloneNode();
    clone.textContent = index + ":" + tile;
    theArray.appendChild(clone);
    });

};

function checkGameBoard(theBoard) {
  for (var r = gameBoard.length; r > 0; r--) {
    var row = gameBoard[r-1];
    for (var c = row.length; c > 0; c--) {
      var column = row[c-1 + 0];
      if (column === 1) {
        console.log("This is a grass tile " + "[Row " + row + " , Column " + column + " ]");
      } else if (column === 2) {
        console.log("This is a dirt tile " + "[Row " + row + " ,Column " + column + " ]");
      } else if (column === 3) {
        console.log("This is a stone tile " + "[Row " + row + " ,Column " + column + " ]");
      } else if (column === 4) {
        console.log("This is a geyser tile" + "[Row " + row + " ,Column " + column + " ]");
      } else if(column === 0){
        console.log("This tile has a 0 " + "[Row " + row + " ,Column " + column + " ]");
      }
    }
  }
}



function randomTileSet() {
  return Math.floor(Math.random() * 5);
}

function addSprite(num){}

// console.log(gameBoard[randomTileSet()][randomTileSet()]);
