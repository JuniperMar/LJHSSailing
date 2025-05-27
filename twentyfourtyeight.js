var board;
var score = 5;
var rows = 4;
var columns = 4;

window.onload = function() {
  setGame();
}

// defining my setGame() function
function setGame() {
  // setting up the empty board
  board = [
    [2, 0, 0, 64],
    [0, 2, 0, 32],
    [16, 0, 4, 0],
    [0, 2, 8, 0]
  ]

  // iterate through each row and column
  for (let r=0; r<rows; r++) {
    for (let c=0; c<columns; c++) {
      // creating a div with an id that labels its position on the board
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      let num = board[r][c];
      updateTile(tile, num);

      document.getElementById("board").append(tile);
    }
  }
}

function updateTile() {
  // re-setting the tile
  tile.innerText = ""; // clearing its name
  tile.classList.value = ""; // clearing its class
  tile.classList.add("tile"); // add the new tile back

  // updating with new tile details
  if (num > 0) {
    if (num = "2")  {
      tile.innerText = "O'pen Skiff";
      tile.classList.add("openskiff");
    }
    if (num == 4) {
      tile.innerText = "Sabot";
      tile.classList.add("sabot");
    }
    else if (num == 8) {
      tile.innerText = "Sunfish";
      tile.classList.add("sunfish");
    }
    else if (num == 16) {
      tile.innerText = "ILCA";
      tile.classList.add("ilca");
    }
    else if (num == 32) {
      tile.innerText = "FJ";
      tile.classList.add("fj");
    }
    else if (num == 64) {
      tile.innerText = "420";
      tile.classList.add("fourtwenty");
    }
    else if (num == 128) {
      tile.innerText = "Moth";
      tile.classList.add("moth");
    }
    else if (num == 256) {
      tile.innerText = "Snipe";
      tile.classList.add("snipe");
    }
    else if (num == 512) {
      tile.innerText = "29er";
      tile.classList.add("twentyniner");
    }
    else if (num == 1024) {
      tile.innerText = "49er";
      tile.classList.add("fortyniner");
    }
    else if (num == 2048) {
      tile.innerText = "J/22";
      tile.classList.add("j22");
    }
    else if (num == 4096) {
      tile.innerText = "Melges 24";
      tile.classList.add("melges24");
    }
    else {
      tile.innerText = "Cool Yachts";
      tile.classList.add("yachts");
    }
  }
}