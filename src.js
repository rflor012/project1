// window.onload = function() {
// var canvas=document.getElementById("game-board");
// var ctx= canvas.getContext("2d");
// };

// function tile(){
//   this.draw = function(){
//     for(var r= 0; r < testMap.length; r++){
//       var row = testMap[r];
//       for (var c=0; c< row.length; c++){
//         var column = row[c];
//
//         if (column == "4"){
//           ctx.beginPath();
//           ctx.rect(r, c, 32, 32);
//           ctx.stroke();
//         } else if (column == "3") {
//           ctx.beginPath();
//           ctx.rect(r, c, 32, 32);
//           ctx.stroke();
//         } else if (column == "2"){
//           ctx.beginPath();
//           ctx.rect(r, c, 32, 32);
//           ctx.stroke();
//         } else if (column == "1"){
//           ctx.beginPath();
//           ctx.rect(r,c, 32, 32);
//           ctx.stroke();
//         } else{
//
//         }
//       }
//     }
//
//
//   };
// }


// var gameBoard = [];
  // [3, 3, 3, 3, 3],
  // [3, 4, 4, 3, 3],
  // [3, 4, 4, 3, 1],
  // [3, 4, 2, 3, 3],
  // [3, 4, 3, 3, 1]
  // ];

  function createGameBoard(width, height){
      var result = [];
      for (var i = 0 ; i < width; i++) {
          result[i] = [];
          for (var j = 0; j < height; j++) {
              result[i][j] = Math.floor(Math.random() * 5);
          }
      }
      return result;
  }

var gameBoard = createGameBoard(5, 5);

function checkGameBoard(theBoard) {
  for (var r = 0; r < gameBoard.length; r++) {
    var row = gameBoard[r];
    for (var c = 0; c < row.length; c++) {
      var column = row[c];
      if (column === 1) {
        console.log("This is a grass tile" + "[" + row + "," + column + "]");
      } else if (column === 2) {
        console.log("This is a dirt tile" + "[" + row + "," + column + "]");
      } else if (column === 3) {
        console.log("This is a stone tile" + "[" + row + "," + column + "]");
      } else if (column === 4) {
        console.log("This is a geyser tile" + "[" + row + "," + column + "]");
      } else {
        console.log("This tile has a 0");
      }
    }
  }
}


function randomTileSet() {
  return Math.floor(Math.random() * 5);
}

function addSprite(num){}

// console.log(gameBoard[randomTileSet()][randomTileSet()]);
