"use strict";
// Game 1. Tic Tac Toe
// In this exercise we're building a game of Tic Tac Toe in the browser.
// Some of the functions have already been implemented for you.
//
// The functions you're supposed implement are marked "YOUR CODE HERE".
// You will find them near the top of this file.
// Other functions are further below in two sections
//  * Game State Functions: functions for tracking the game through the turns
//  * Browser Interaction Functions: functions for updating the browser and
//    getting updates from the browser
//
// We're creating our own library called tictactoe. Our game functions go here.
var tictactoe = {};

// tictactoe.errorIfNotXOrO(xOrO): Take a string and generate an error if that
// string is not 'x' or 'o'.
//
// ex. tictactoe.errorIfNotXOrO('x') -> Nothing happens
// ex. tictactoe.errorIfNotXOrO('o') -> Nothing happens
// ex. tictactoe.errorIfNotXOrO('') -> Error is generated
tictactoe.errorIfNotXOrO = function(xOrO) {
  if (xOrO !== 'x' && xOrO !== 'o') {
    // Say hello to 'throw'
    // This line will generate an "exception" (an error). Exceptions stop execution.
    // When an exception is "thrown" it will show up in the Chrome Developer Console.
    // Exceptions are an important error handling mechanism, we will learn more
    // about them in the coming weeks.
  }
}
// Uncomment the following line to see what an error looks like in the Chrome Developer Console
// (See Module 2_your_toolbox for how to use the Developer Console.)
// tictactoe.errorIfNotXOrO('not x')
// Make sure you comment it back otherwise other code in this file will not be executed.

// tictactoe.getOtherSide(xOrO):
// Write a function that takes a side ('x' or 'o') and returns the other side.
// You should validate input using errorIfNotXOrO().
// ex. tictactoe.getOtherSide('x') -> 'o'
// ex. tictactoe.getOtherSide('o') -> 'x'
// ex. tictactoe.getOtherSide('a') -> Error
tictactoe.getOtherSide = function(xOrO) {
  tictactoe.errorIfNotXOrO(xOrO);
  if (xOrO === 'x') {
    return 'o';
  }
  return 'x';
}

// tictactoe.newBoard(): Create a new game board with no moves made.
//
// Note how we are putting arrays inside the array to represent contents of
// rows.  This technique is also known as a 2-dimensional array. It is very
// useful for representing 2-dimensional grids, like our Tic tac toe board.
//
// We can read 2-dimensional arrays using two index numbers: array[index 1][index 2]
// Index 1 is the index into the outer array and index 2 is the index into the
// inner array.
// Like arrays, indexes start counting at 0.
// ex. tictactoe.newBoard()[0][0] -> first row and column
// ex. tictactoe.newBoard()[0][1] -> first row and second column
tictactoe.newBoard = function() {
  return [[" ", " ", " "],
          [" ", " ", " "],
          [" ", " ", " "]];
}

// tictactoe.makeMove(board, row, column, xOrO): take a board and return a new board
// with a move made in the specified row, column and side (xOrO).
// If there is already an x or o at the specified location (row and column)
// throw an exception (generate an error).
// If xOrO is not x or o, also throw an exception.
// You can use tictactoe.errorIfNotXOrO() for this purpose.
//
// ex. tictactoe.makeMove(tictactoe.newBoard(), 0, 0, 'x') -> [['x', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]
// ex. tictactoe.makeMove(tictactoe.newBoard(), 2, 1, 'o') -> [[' ', ' ', ' '], [' ', ' ', ' '], [' ', 'o', ' ']]
// ex. tictactoe.makeMove(tictactoe.newBoard(), 2, 1, ' ') -> Error: xOrO not 'x' or 'o'
// ex. tictactoe.makeMove([['o', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']], 0, 0, 'x') -> Error: 0, 0 already occupied
// ex. tictactoe.makeMove([[' ', ' ', ' '], [' ', ' ', ' '], [' ', 'o', ' ']], 2, 1, 'o') -> Error: 2, 1 already occupied
tictactoe.makeMove = function(board, row, column, xOrO) {
  board[row][column] = xOrO;
  return board;
}


// tictactoe.results: an object that maps result types to their meanings.
// '?': game is in progress
// '-': game is a tie
// 'x': X wins the game
// 'o': O wins the game
tictactoe.results = {
  '?': 'Game in progress...',
  '-': 'Tie.',
  'x': 'X wins!',
  'o': 'O wins!'
};

// tictactoe.getResult(board): Return the result (or lack thereof) of the
// current game based on the current state of the board.
// The result should be a key in tictactoe.results.
//
// ex. tictactoe.getResult(tictactoe.newBoard()) -> '?'
// ex. tictactoe.getResult([["x", "o", "x"],
//                          ["x", "o", "x"],
//                          ["o", "x", "o"]]) -> '-'
// ex. tictactoe.getResult([["x", "o", " "],
//                          ["o", "x", " "],
//                          ["o", "x", "x"]]) -> 'x'
// ex. tictactoe.getResult([["o", "o", "o"],
//                          ["x", "x", " "],
//                          ["x", " ", " "]]) -> 'o'
// ex. tictactoe.getResult([["o", "o", "x"],
//                          ["x", "x", "o"],
//                          ["o", " ", " "]]) -> '?'
tictactoe.getResult = function(board) {
  var sides = ['x', 'o'];
  for (var i = 0; i < sides.length; i++) {
    var side = sides[i];
    // diagonal
    if (board[0][0] === side &&
        board[1][1] === side &&
        board[2][2] === side) {
      return side;
    }


    // down
    for (var column = 0; column < board.length; column++) {
      if (board[0][column] === side &&
          board[1][column] === side &&
          board[2][column] === side) {
        return side;
      }
    }
  }

  // check if game is in progress
  function isEmpty(cell) {
    return cell === ' ';
  }

  var hasEmptyCells = false;
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    for (var j = 0; j < row.length; j++) {
      if (isEmpty(row[j])) {
        return '?'; // game is in progress if there are still empty cells
      }
    }
  }

  return '-'; // game is over but there is no winner
}

// tictactoe.getComputerMove(): Get the move the computer is going to make.
// This function is called by the game when it's the computer's turn.
// The move is represented by an array with two elements: [row, column]
// The move returned by this function must be a valid move.
// If the board is full, you should throw an exception (generate an error).
// Otherwise, you can make this function as smart or naive as you like.
//
// ex. tictactoe.getComputerMove(tictactoe.newBoard()) -> [0, 0]
// ex. tictactoe.getComputerMove([["x", "o", "x"],
//                                ["x", "o", "x"],
//                                ["o", "x", "o"]]) -> Error
tictactoe.getComputerMove = function(board, computerSide) {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j] === ' ') { // cell is empty
        return [i, j];
      }
    }
  }

  // if we reach here, we've looked at all cells in the grid and haven't found
  // any empty ones
  throw "Computer can't  make move. Board is full.";
}

// ----Game State Functions----
// We store game "state" in the "tictactoe.game" object.
// This is the part of our program that changes as the game progresses.
// These are the functions that read and update game state.
//
// "null" is a special JavaScript keyword that is used when a value is missing.
// At the beginning all the values in the game object are missing, so we set them
// to null.
tictactoe.game = {
  board: null, // The current state of the game board
  playerSide: null, // Player's side (x or o)
  computerSide: null, // Computer's side: ( x or o )
  currentTurn: null // Whose turn it is
}

// tictactoe.isGameOver(): return true if the game is over. The game is over
// if there's a tie or if either side has won.
//
// Object.hasOwnProperty(key): object.hasOwnProperty(key) returns true if 'key'
// belongs to 'object'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
tictactoe.isGameOver = function() {
  var result = tictactoe.getResult(tictactoe.game.board);
  if (! tictactoe.results.hasOwnProperty(result)) {
    throw "getResult() returned invalid result: " + result;
  }
  return result !== '?';
}

// tictactoe.startGame(playerSide): Start a new tic tac toe game where the
// player has the given side.
// If a game is already in progress will restart the game.
// playerSide must be either 'x' or 'o', otherwise an error is generated (an
// exception is thrown).
tictactoe.startGame = function(playerSide) {
  tictactoe.errorIfNotXOrO(playerSide); // validate input

  // if player plays 'x', computer plays 'o' and vice versa
  var computerSide = tictactoe.getOtherSide(playerSide);

  if (! computerSide) {
    throw "tictactoe.getOtherSide() returned invalid result: " + computerSide;
  }

  tictactoe.game.board = tictactoe.newBoard(); // reset board
  tictactoe.game.playerSide = playerSide; // set player side
  tictactoe.game.computerSide = computerSide; // set computer side
  tictactoe.game.currentTurn = 'x'; // set turn to be X's turn because X always goes first

  tictactoe.drawBoard(); // update screen with new information
  console.log("Game is starting, player side: %s computer side: %s", playerSide, computerSide);

  if (tictactoe.game.currentTurn === tictactoe.game.playerSide) {
    // if player is going first, wait for the player to make a move
    console.log("Player starts, click on the board to play.");
  } else {
    // otherwise, computer makes the first move
    console.log("Computer starts.");
    tictactoe.makeComputerMove();
  }
}

// tictactoe.makePlayerMove(row, column): Make a player move at the specified row and column.
// Uses tictactoe.makeMove() to update the board. Updates the screen with the result of the move.
// After the player makes a move if the game is not over, this function will
// also make a computer move.
//
// Will generate an error (throw an exception):
//  * if game hasn't started yet OR
//  * if it's not the player's turn OR
//  * if the position (row and column) is already occupied
tictactoe.makePlayerMove = function(row, column) {
  if (! tictactoe.game.board || !tictactoe.game.playerSide || !tictactoe.game.computerSide) {
    // error if game is not started yet
    throw "Game not started yet. Ignoring player move.";
  }

  if (tictactoe.isGameOver()) {
    console.log('Game is over. Ignoring player click.');
    return;
  }

  if (tictactoe.game.currentTurn !== tictactoe.game.playerSide) {
    throw "Can't make move during computer's turn.";
  }

  var board = tictactoe.makeMove(tictactoe.game.board, row, column, tictactoe.game.playerSide);
  if (! board) {
    throw "makeMove() returned bad board. Board: " + board;
  }

  tictactoe.game.board = board;
  tictactoe.game.currentTurn = tictactoe.getOtherSide(tictactoe.game.currentTurn);

  tictactoe.drawBoard(); // update screen

  console.log('Player makes move. Row: %s Column: %s', row, column);

  if (! tictactoe.isGameOver()) { // Computer makes a move if game isn't over
    tictactoe.makeComputerMove();
  }
}

// tictactoe.makeComputerMove(): Make a computer move.
// Gets a valid computer move using tictactoe.getComputerMove() then updates
// the board using tictactoe.makeMove().
// Updates the screen with the result of the move.
//
// Will generate an error (throw an exception):
//   * if game hasn't started yet OR
//   * if it's not the computer's turn OR
//   * if there are no more moves left
tictactoe.makeComputerMove = function() {
  if (tictactoe.isGameOver()) {
    console.log("Game is over. Computer can't make a move.");
    return;
  }

  if (tictactoe.game.currentTurn !== tictactoe.game.computerSide) {
    throw "Can't make computer move during player's turn.";
  }

  // Get a move with getComputerMove()
  var computerSide = tictactoe.game.computerSide;
  var move = tictactoe.getComputerMove(tictactoe.game.board, computerSide);
  if (! move) {
    throw "getComputerMove() returned invalid move: " + move;
  }

  // Update the board with
  var board = tictactoe.makeMove(tictactoe.game.board, move[0], move[1], computerSide);
  if (! board) {
    throw "makeMove() returned invalid board: " + board;
  }

  tictactoe.game.board = board;
  tictactoe.game.currentTurn = tictactoe.getOtherSide(tictactoe.game.currentTurn);

  tictactoe.drawBoard(); // update screen
  console.log('Computer makes move. Row: %s Column: %s', move[0], move[1]);
}

// ----Browser Interaction Functions----
// These functions send updates to the browser and receive updates from the browser.
//
// Feel free to skip reading these functions for now.  We will learn about
// interacting with the browser via JavaScript in the coming weeks.

// tictactoe.drawBoard(): Update the page with all game information. Updates
// game result, player/computer side and redraws tic tac toe board.
// Uses: tictactoe.updateResult() to update game result
tictactoe.drawBoard = function() {
  if (! tictactoe.game.board || ! tictactoe.game.playerSide || ! tictactoe.game.computerSide) {
    throw "Cannot draw board. Game not initialized.";
  }

  // Update game result
  tictactoe.updateResult();

  // Update player side
  var playerElem = document.getElementById('player');
  playerElem.innerHTML = tictactoe.game.playerSide.toUpperCase();

  // Update computer side
  var computerElem = document.getElementById('computer');
  computerElem.innerHTML = tictactoe.game.computerSide.toUpperCase();

  // draw tic tac toe board
  var board = tictactoe.game.board;
  var boxes = document.querySelectorAll('#board td');
  var i = 0;
  board.forEach(function(row) {
    row.forEach(function(cell) {
      var box = boxes[i];
      box.innerHTML = cell === ' ' ? '&nbsp;' : cell;
      i++; // move to next box on board
    });
  });
}

// tictactoe.updateResult(): Update game result on the browser page, as in
// "Player won," "Computer won," "Tie," or "Game in progress."
// Uses: tictactoe.getResult()
tictactoe.updateResult = function() {
  var result = tictactoe.getResult(tictactoe.game.board);
  if (! tictactoe.results.hasOwnProperty(result)) {
    throw "getResult() returned invalid result: " + result;
  }

  var resultElem = document.getElementById('result');
  if (resultElem) {
    if (result === tictactoe.game.playerSide) {
      resultElem.innerHTML = 'Player wins!'
    } else if (result === tictactoe.game.computerSide) {
      resultElem.innerHTML = 'Computer wins!'
    } else {
      resultElem.innerHTML = tictactoe.results[result];
    }
  } else {
    console.error("Can't find a place to put game result on page. Did you edit '1Tic Tac Toe.html'?");
  }
}

// tictactoe.playerMoveClick(evt): Handle player clicking on the tic tac toe board.
// Determines which grid cell the player clicked on.
// Uses: tictactoe.makePlayerMove()
tictactoe.playerMoveClick = function(evt) {
  if (! evt.target || evt.target.tagName !== 'TD') {
    return; // ignore clicks on areas outside target cells
  }

  // Go through the cells in the tic tac toe board
  var boxes = document.querySelectorAll('#board td');
  for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];
    if (box.isSameNode(evt.target)) {
      // Found the cell the user clicked on, calculate row and column
      var row = Math.floor(i / 3);
      var column = i % 3;
      console.log('Player clicked on row %s column %s', row, column);
      tictactoe.makePlayerMove(row, column);
      return;
    }
  }

  // If we reach here, we couldn't find the cell.
  console.error("Couldn't find element: %O", evt.target);
}

if (typeof exports != 'undefined') {
  exports = module.exports = tictactoe;
}
