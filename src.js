var testMap = [
  [3, 3, 3, 3, 3],
  [3, 4, 4, 3, 3],
  [3, 4, 4, 3, 1],
  [3, 4, 2, 3, 3],
  [3, 4, 3, 3, 1]
  ];

function createGameBoard() {
  for (var r = 0; r < testMap.length; r++) {

    var row = testMap[r];

    for (var c = 0; c < row.length; c++) {
      var column = row[c];

      if (column == "3") {
        console.log("This is a grass tile");
      } else if (column == "4") {
        console.log("This is a dirt tile");
      } else if (column == "1") {
        console.log("This is a stone tile");
      } else if (column == "2") {
        console.log("This is a geyser tile");
      } else {}
    }
  }
}

function randomTileSet() {
  return Math.floor(Math.random() * 5);
}

function addSprite(num){}

console.log(testMap[randomTileSet()][randomTileSet()]);
