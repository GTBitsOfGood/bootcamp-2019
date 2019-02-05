"use strict";

// Game 3. Towers of Hanoi
// In this exercise we're building the game of Towers of Hanoi in the browser.
// Very few functions are have been implemented for you this time.
//
// Rules:
//  * You may only move one disk at a time.
//  * You must never allow a bigger disk to go on top of a smaller disk.
//  * All three disks start on the leftmost tower.
//  * Game is won when all three disks are on the rightmost tower.
//
// Functions in this file are split into three groups
//  * Game Functions
//  * Browser Functions You Will Call
//  * Browser Functions You Won't Call
//

// All our functions will go in the "towers" object.
window.towers = {};

// ----Game Functions----
// These function help us define the rules of the game of Towers of Hanoi.
// They also help us track game state throughout the moves.

// towers.newBoard(): create new Towers of Hanoi board in the starting state.
// This is format towers.drawGame() expects your board to be in.
towers.newBoard = function () {
    return [[2, 1, 0], [], []];
};

// towers.isArray(something): return true if 'something' is an array, otherwise
// return false.
//
// ex. towers.isArray('a') -> false
// ex. towers.isArray(0) -> false
// ex. towers.isArray([]) -> true
towers.isArray = function (something) {
    // Array.isArray() is a built-in function check if something is an array.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    return Array.isArray(something);
}

// towers.isNumber(something): return true if 'something' is a number, otherwise
// return false.
//
// ex. towers.isNumber('a') -> false
// ex. towers.isNumber([]) -> false
// ex. towers.isNumber(0) -> true
towers.isNumber = function (something) {
    // typeof is a built-in operator for getting the 'type' of a given value.
    // We'll learn more about it soon, for now we only use it to tell if
    // something is a number.
    return typeof something === 'number';
}

// towers.isValidBoard(board): return true if the given board is valid, false otherwise.
//
// You should use:
//  * towers.isArray(): to check that the board and the towers inside are
//    represented by arrays.
//  * towers.isNumber(): to check that the disks are represented by numbers.
//
// A board is said to be valid if:
//  * The board is a 2-dimensional array (it's an array containing arrays inside it).
//  * The outer array contains exactly 3 inner arrays, each representing
//    a tower on the board.
//  * Each inner array (representing each tower) contains only numbers which
//    represent disks.
//  * There are only 3 disks across all towers and their numbers must be 0, 1, 2.
//  * For each tower, disks are always in decreasing order. This means a larger
//    disk cannot be on top of a smaller disk. For instance, [2, 0] is a valid
//    tower, and [1, 2] is not a valid tower.
//
//
// ex. towers.isValidBoard(1) -> false: the board must be an array.
// ex. towers.isValidBoard([]) -> false: there must be 3 items in outer array
// ex. towers.isValidBoard([2, 1, 0]) -> false: all items in outer array must
//                                       also be arrays.
// ex. towers.isValidBoard([[], [], []]) -> false: disks 0, 1, 2 are missing
// ex. towers.isValidBoard([[2, 1], [], []]) -> false: disk 0 is missing
// ex. towers.isValidBoard([[0, 1], [2], []]) -> false: larger disk (1) is on
//                                               top of smaller disk (0)
// ex. towers.isValidBoard([[2], [0, 1], []]) -> false: larger disk (1) is on
//                                               top of smaller disk (0)
// ex. towers.isValidBoard([[], [], [2, 0, 1]]) -> false: larger disk (2) is on
//                                                 top of smaller disk (0)
// ex. towers.isValidBoard([[0], [2], [1]]) -> true: valid board
// ex. towers.isValidBoard([[], [2, 0], [1]]) -> true: valid board
// ex. towers.isValidBoard([[], [], [2, 1, 0]]) -> true: valid board
// ex. towers.isValidBoard([[2], [], [2, 0]]) -> false: duplicate disk 2
// ex. towers.isValidBoard([[2], [3], [1, 0]]) -> false: invalid disk 3
towers.isValidBoard = function (board) {
    if (!towers.isArray(board)) {
        return false;
    }
    if (board.length !== 3) {
        return false;
    }
    let hasOne = false;
    let hasTwo = false;
    let hasZero = false;
    for (let x = 0; x < 3; x++) {
        if (!towers.isArray(board[x])) {
            return false;
        }
        for (let y = 0; y < board[x].length; y++) {
            if (board[x][y] !== 1 && board[x][y] !== 2 && board[x][y] !== 0) {
                return false;
            }
            if (board[x][y] === 1) {
                if (hasOne === true) {
                    return false;
                }
                hasOne = true;
            }
            if (board[x][y] === 2) {
                if (hasTwo === true) {
                    return false;
                }
                hasTwo = true;
            }
            if (board[x][y] === 0) {
                if (hasZero === true) {
                    return false;
                }
                hasZero = true;
            }
        }
        for (let y = 0; y < board[x].length - 1; y++) {
            if (board[x][y] < board[x][y + 1]) {
                return false;
            }
        }
    }
    if (hasOne && hasTwo && hasZero) {
        return true;
    } else {
        return false;
    }
}

// Store your game state here. You should set values to be null initially.
towers.game = {
    board : null
};

// towers.newGame(): Start a new game of Towers of Hanoi.
//
// This function should:
//  * Create new board using towers.newBoard()
//  * Save the new board somewhere (maybe towers.game.board?)
//  * Call towers.drawGame() with updated board
//  * Call towers.clearWin() to clear the win message
towers.newGame = function () {
    towers.game.board = towers.newBoard();
    towers.drawGame(towers.game.board);
    towers.clearWin();
}

// towers.copyBoard(board): Make a copy of the given board and return it.
// This is useful for creating copies of the game board that you can
// modify to test hypothetical moves.
towers.copyBoard = function (board) {
    var newBoard = [];
    // Array.forEach() is just another way of iterating over Arrays.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    board.forEach(function (tower) {
        // Array.slice(0) makes a copy of a given array.  However, it does not make
        // copies of arrays within the array. This is known as a shallow copy.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
        newBoard.push(tower.slice(0));
    });
    return newBoard;
}

// towers.makeMove(fromTower, toTower): move the disk at the top of fromTower
// to the top of toTower. fromTower and toTower are be integers that represent
// the index of the tower 0, 1, 2.
//
// Throw an exception (generate an error) if move is invalid, the move is
// invalid if:
//  * The FROM tower is empty
//  * The disk at the top of FROM tower is larger than the disk at the top of
//    TO tower (you can rely on isValidBoard for this one)
//
// This function should:
//  * Use towers.copyBoard() to copy the board to make test moves.
//  * Use towers.isValidBoard() to verify if the board is valid after test moves move.
//  * If move is valid, update the saved board (maybe in towers.game.board?)
//  * Call towers.drawGame() with updated board
//  * If the player has completed the game successfully call towers.win()
//
// ex. towers.makeMove(0, 1) -> move disk from tower 0 to tower 1
towers.makeMove = function (fromTower, toTower) {
    if(fromTower.length === 0) {
        throw "Move invalid: the tower you are trying to move from is empty";
    }
    let testBoard = towers.copyBoard(towers.game.board);
    testBoard[toTower].push(testBoard[fromTower][testBoard[fromTower].length - 1]);
    testBoard[fromTower].pop();
    if(!towers.isValidBoard(testBoard)) {
        throw "Move invalid: you are trying to place a larger disk on a smaller disk";
    }
    towers.game.board = testBoard;
    towers.drawGame(towers.game.board);
    if(towers.game.board[2][0] === 2 && towers.game.board[2][1] === 1 && towers.game.board[2][2] === 0) {
        towers.win();
    }

}

// ----Browser Functions You Will Call----
// These are the functions you will call to update the browser as the game progresses.

// towers.drawGame(board): take a game board and draw it in the browser.
// Uses towers.isValidBoard() to verify the board is valid before drawing it
// Make sure you call this function whenever the game board is updated when a
// new game starts or when a new move is made.
towers.drawGame = function (board) {
    if (!towers.isValidBoard(board)) {
        console.log('Board is not valid, not drawing.', board);
        return;
    }

    console.log('Drawing new board:', board);
    // Erase old board completely
    var boardElem = document.getElementById('board');
    boardElem.innerHTML = '';
    // Draw new board
    board.forEach(function (tower, i) {
        var towerElem = document.createElement('div');
        towerElem.classList.add('tower');
        towerElem.classList.add('tower' + i);
        towerElem.innerHTML = '<button onclick="towers.select(' + i + ')" class="select-btn">Select</button>\n' +
            '<button onclick="towers.drop(' + i + ')" class="drop-btn">Drop</button>';
        tower.forEach(function (disk) {
            var diskElem = document.createElement('div');
            diskElem.classList.add('disk');
            diskElem.classList.add('disk' + disk);
            towerElem.appendChild(diskElem);
        });
        boardElem.appendChild(towerElem);
    });
}

// towers.win(): Update the browser to indicate that the player has successfully
// completed the game. Should be called after player makes final successful
// move.
towers.win = function () {
    document.getElementById('win').innerHTML = 'You win!';
}

// towers.clearWin(): Update the browser to remove the win message. Should be
// called when new game starts.
towers.clearWin = function () {
    document.getElementById('win').innerHTML = '';
}

// ----Browser Functions You Won't Call----
// These are functions that interact with the browser that you won't need to call.
// You can still read them if you're curious.

// towers.select(): Select tower to move a disk FROM.
// Highlights selected tower and saved tower number.
towers.select = function (i) {
    console.log('Player selected tower %s', i);
    document.getElementsByClassName('tower' + i)[0].classList.toggle('selected')
    document.getElementById('board').classList.add('selecting');
    towers.selectedTower = i;
};

// Since the move action is two step process, we have to remember the FROM
// tower between steps, we use this variable for that purpose.
towers.selectedTower = -1;

// towers.drop(): Select tower to move the disk TO. Clears highlighted tower.
// Calls towers.makeMove() with from and to towers and displays message to
// player if an error is received from towers.makeMove().
towers.drop = function (i) {
    var from = towers.selectedTower;
    [].forEach.call(document.getElementsByClassName('tower'), function (node) {
        node.classList.remove('selected');
    });
    document.getElementById('board').classList.remove('selecting');
    console.log('Player makes move from %s to tower %s', towers.selectedTower, i);
    towers.selectedTower = -1;

    try {
        towers.makeMove(from, i);
    } catch (e) {
        alert('Error making move: ' + e);
    }
};

// towers.newGameClick(): Called when player clicks new game button,
// calls towers.newGame().
towers.newGameClick = function () {
    towers.newGame();
};
