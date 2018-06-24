
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
