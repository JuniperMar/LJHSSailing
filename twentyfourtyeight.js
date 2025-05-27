var board;
var score = 0;
var rows = 4;
var columns = 4;

window.onload = function() {
  setGame();
}

// defining my setGame() function
function setGame() {
  // setting up the empty board

  /* empty board */
  board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]

  /*
  board = [
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [4, 4, 8, 8],
    [4, 4, 8, 8]
  ]
  */

  /* Testing the board
  board = [
    [2, 4, 8, 16],
    [32, 64, 128, 256],
    [512, 1024, 2048, 4096],
    [8192, 16384, 0, 0]
  ]
  */

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
  addOpenSkiffTile();
  addOpenSkiffTile();
}

function hasEmptyTile() {
  for (let r=0; r<rows; r++) {
    for (let c=0; c<columns; c++) {
      if (board[r][c] == 0) {
        return true;
      }
    }
  }
  return false;
}

function addOpenSkiffTile() {
  if (!hasEmptyTile()) {
    return;
  }
  
  let found = false;
  while (!found) {
    // random row and column
    let r = Math.floor(Math.random() * rows);
    let c = Math.floor(Math.random() * columns);

    if (board[r][c] == 0) {
      board[r][c] = 2;
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      tile.innerText = "O'pen Skiff";
      tile.classList.add("openskiff");
      found = true;
    }
  }
}

function updateTile(tile, num) {
  // re-setting the tile
  tile.innerText = ""; // clearing its name
  tile.classList.value = ""; // clearing its class
  tile.classList.add("tile"); // add the new tile back

  // updating with new tile details
  if (num > 0) {
    if (num == 2)  {
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
    else if (num >= 8192) {
      tile.innerText = "Cool Yachts";
      tile.classList.add("yachts");
    }
  }
}

// Moving the tiles around
// Adding event listeners for the arrow keys
document.addEventListener("keyup", (e) => {
  if (e.code == "ArrowLeft") {
    slideLeft();
    addOpenSkiffTile();
  }
  else if (e.code == "ArrowRight") {
    slideRight();
    addOpenSkiffTile();
  }
  else if (e.code == "ArrowUp") {
    slideUp();
    addOpenSkiffTile();
  }
  else if (e.code == "ArrowDown") {
    slideDown();
    addOpenSkiffTile();
  }
  document.getElementById("score").innerText = score;
})

function filterZeros(row) {
  return row.filter(num => num != 0); // takes all the numbers that don't equal zero and creates a new array
}

// slide function
function slide(row) {
  row = filterZeros(row);

  for (let i=0; i < row.length-1; i++) {
    if (row[i] == row[i+1]) {
      row[i] *= 2; // multiplying by 2 to get the next highest level sailboat
      row[i+1] = 0; // clearing the other tile
      score += row[i];
    }
  }

  row = filterZeros(row);

  while (row.length < columns) {
    row.push(0);
  }

  return row;
}

// fuction for sliding left
  // clear zeros on the left - filterZeros()
  // merge like numbers
  // clear zeros again
  // add zeros to empty tiles on the right

function slideLeft() {
  for (let r=0; r<rows; r++) {
    let row = board[r];
    row = slide(row);
    board[r] = row;

    for (let c=0; c<columns; c++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

// slideRight: Reverse the row, slide left, than reverse again - reuse slide function
function slideRight() {
  for (let r=0; r<rows; r++) {
    let row = board[r];
    row.reverse();
    row = slide(row);
    row.reverse();
    board[r] = row;

    for (let c=0; c<columns; c++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

// slideUp
function slideUp() {
  for (let c=0;c<columns;c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row = slide(row);

    // board[0][c] = row[0];
    // board[1][c] = row[1];
    // board[2][c] = row[2];
    // board[3][c] = row[3];

    for (let r=0; r<rows; r++) {
      board[r][c] = row[r];
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

// slideDown: reverse slideUp
function slideDown() {
  for (let c=0;c<columns;c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row.reverse();
    row = slide(row);
    row.reverse();

    // board[0][c] = row[0];
    // board[1][c] = row[1];
    // board[2][c] = row[2];
    // board[3][c] = row[3];

    for (let r=0; r<rows; r++) {
      board[r][c] = row[r];
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}