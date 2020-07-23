document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = { // creating our board
  cells: [
    {
      row: 0, 
      col: 0, 
      isMine: (Math.random() < 0.3),
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 0, 
      col: 1, 
      isMine: (Math.random() < 0.3),
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    }, 
    {
      row: 0,
      col: 2, 
      isMine: (Math.random() < 0.3),
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    }, 
    {
      row: 0,
      col: 3, 
      isMine: (Math.random() < 0.3),
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    }, 
    {
      row: 1, 
      col: 0, 
      isMine: (Math.random() < 0.3),
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 1, 
      col: 1, 
      isMine: (Math.random() < 0.3),
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 1, 
      col: 2, 
      isMine: (Math.random() < 0.3),
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 1,
      col: 3, 
      isMine: (Math.random() < 0.3),
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    }, 
    {
      row: 2, 
      col: 0, 
      isMine: (Math.random() < 0.3),
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 2, 
      col: 1, 
      isMine: (Math.random() < 0.3),
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 2,
      col: 2, 
      isMine: (Math.random() < 0.3),
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 2,
      col: 3, 
      isMine: (Math.random() < 0.3),
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 3,
      col: 0, 
      isMine: (Math.random() < 0.3),
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 3,
      col: 1, 
      isMine: (Math.random() < 0.3),
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 3,
      col: 2, 
      isMine: (Math.random() < 0.3),
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 3,
      col: 3, 
      isMine: (Math.random() < 0.3),
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    }, 
  ]
}

function startGame () {
  
    document.addEventListener('click', checkForWin)
    document.addEventListener('contextmenu', checkForWin)
  
  for (i = 0; i < board.cells.length; i++ ) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])


  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// This function looks for look for a win condition:
// I have it setup that you are only a winner if mines are marked and if not a mine its visible.

function checkForWin () {
  
  for (var i = 0; i < board.cells.length; i++) { 
    if (board.cells[i].isMine == true && board.cells[i].isMarked == false) {
      return; 
    } else if (board.cells[i].isMine === false && board.cells[i].hidden === true) {
      return;
    }
  }
  lib.displayMessage('You are a Winner!')
}

  

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
   
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {

  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0;

  for (let i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine == true) {
      count++;
    }
  }
  return count
  
}

function reset() {
window.location.reload(true);

}

// create a board reset button. 
// I want to reload the page as a system to reset the board