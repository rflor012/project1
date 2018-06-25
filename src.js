var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 500 ;

var background = new Image();
background.src = "./grass.png";

background.onload = function(){
    ctx.drawImage(background,0,0);
};


var gameBoard = [
[1,1,1,1,1],
[2,1,1,1,1],
[3,1,1,1,1],
[4,1,1,1,1],
[5,1,1,1,1]
];
//
// function createGameBoard(theArray){
//   var result = [];
//   for (var i=0; i < gameBoard.length; i++){
//     result[i] = gameBoard [i];
//     for(var j = 0; j < result[i].length; j++){
//     }
//   }
//   gameBoard = this.result;
//   return this.result;
// }


// function createGameBoard(width, height){
//       var result = [];
//       for (var i = 0 ; i < width; i++) {
//           result[i] = [];
//           for (var j = 0; j < height; j++) {
//               result[i][j] = Math.floor(Math.random() * 5);
//           }
//       }
//       this.gameBoard = result;
//       return this.gameBoard;
//   }
//
// var gameBoard;

// var tileBoard = function createTileBoard(resultsArray){
//     theArray = document.getElementsByClassName('board');
//     tileItem = document.createElement("div");
//     gameBoard.forEach(function(tile, index){
//     clone = tileItem.cloneNode();
//     clone.textContent = index + ":" + tile;
//     tileItem.appendChild(clone);
//     return tileItem;
//     });
//
// };

var lastClicked;
var grid = clickableGrid(5,5,function(el,row,col,i){
    console.log("You clicked on element:",el);
    console.log("You clicked on row:",row);
    console.log("You clicked on col:",col);
    console.log("You clicked on item #:",i);

    el.className='clicked';
    if (lastClicked) lastClicked.className='';
    lastClicked = el;
});

document.body.appendChild(grid);

function clickableGrid( rows, cols, callback ){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = ++i;
            cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                    callback(el,r,c,i);
                };
            })(cell,r,c,i),false);
        }
    }
    return grid;
}


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

//
//
// function randomTileSet() {
//   return Math.floor(Math.random() * 5);
// }
//
// function addSprite(num){}

// console.log(gameBoard[randomTileSet()][randomTileSet()]);
