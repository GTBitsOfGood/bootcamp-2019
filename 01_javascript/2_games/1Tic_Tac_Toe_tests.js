describe("tictactoe.errorIfNotXOrO()", function() {
  function callError(param) {
    return function() {
      tictactoe.errorIfNotXOrO(param);
    }
  }

  it("tictactoe.errorIfNotXOrO('x') -> Nothing happens", function() {
    expect(callError('x')).not.toThrow();
  });
  it("tictactoe.errorIfNotXOrO('o') -> Nothing happens", function() {
    expect(callError('o')).not.toThrow();
  });
  it("tictactoe.errorIfNotXOrO('') -> Error is generated", function() {
    expect(callError('')).toThrow();
  });
});

describe("tictactoe.getOtherSide()", function() {
  it("tictactoe.getOtherSide('x') -> 'o'", function() {
    expect(tictactoe.getOtherSide('x')).toBe('o');
  });
  it("tictactoe.getOtherSide('o') -> 'x'", function() {
    expect(tictactoe.getOtherSide('o')).toBe('x');
  });
  it("tictactoe.getOtherSide('a') -> Error", function() {
    expect(function() { tictactoe.getOtherSide('a') }).toThrow();
  })
});

describe("tictactoe.makeMove()", function() {
  it("tictactoe.makeMove(tictactoe.newBoard(), 0, 0, 'x') -> [['x', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]", function() {
    expect(tictactoe.makeMove(tictactoe.newBoard(), 0, 0, 'x')).toEqual([['x', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
  });
  it("tictactoe.makeMove(tictactoe.newBoard(), 2, 1, 'o') -> [[' ', ' ', ' '], [' ', ' ', ' '], [' ', 'o', ' ']]", function() {
    expect(tictactoe.makeMove(tictactoe.newBoard(), 2, 1, 'o')).toEqual([[' ', ' ', ' '], [' ', ' ', ' '], [' ', 'o', ' ']]);
  });
  it("tictactoe.makeMove(tictactoe.newBoard(), 2, 1, ' ') -> Error: xOrO not 'x' or 'o'", function() {
    expect(function() { tictactoe.makeMove(tictactoe.newBoard(), 2, 1, ' ') }).toThrow();
  });
  it("tictactoe.makeMove([['o', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']], 0, 0, 'x') -> Error: 0, 0 already occupied", function() {
    expect(function() { tictactoe.makeMove([['o', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']], 0, 0, 'x') }).toThrow();
  });
  it("tictactoe.makeMove([[' ', ' ', ' '], [' ', ' ', ' '], [' ', 'o', ' ']], 2, 1, 'o') -> Error: 2, 1 already occupied", function() {
    expect(function() { tictactoe.makeMove([[' ', ' ', ' '], [' ', ' ', ' '], [' ', 'o', ' ']], 2, 1, 'o') }).toThrow();
  });
  it("tictactoe.makeMove([['o', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']], 0, 0, 'o') -> Error: 0, 0 already occupied", function() {
    expect(function() { tictactoe.makeMove([['o', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']], 0, 0, 'o') }).toThrow();
  });
  it("tictactoe.makeMove([[' ', ' ', ' '], [' ', ' ', ' '], [' ', 'o', ' ']], 2, 1, 'x') -> Error: 2, 1 already occupied", function() {
    expect(function() { tictactoe.makeMove([[' ', ' ', ' '], [' ', ' ', ' '], [' ', 'o', ' ']], 2, 1, 'x') }).toThrow();
  });
});

function boardToString(board) {
  return board.map(function(row) {
    return row.join('|');
  }).join('\n');
}

describe("tictactoe.getResult()", function() {
  it("tictactoe.getResult(tictactoe.newBoard()) -> '?'", function() {
    expect(tictactoe.getResult(tictactoe.newBoard())).toBe('?');
  });

  var flipCell = function(cell) {
    if (cell === 'x') {
      return 'o';
    }
    if (cell === 'o') {
      return 'x';
    }
    return cell;
  }

  // Return board with x's replaced with o's
  var flipBoard = function(board) {
    return board.map(function(row) {
      return row.map(flipCell);
    });
  };

  var testResult = function(board, expectedResult) {
    var boardStr = boardToString(board);
    it("Expect '" + expectedResult + "'\n" + boardStr, function(board, expectedResult) {
      expect(tictactoe.getResult(board)).toBe(expectedResult);
    }.bind(null, board, expectedResult));

    // Swap x's with o's and make sure that the result is the same
    board = flipBoard(board);
    expectedResult = flipCell(expectedResult);
    boardStr = boardToString(board);
    it("Expect '" + expectedResult + "'\n" + boardStr, function(board, expectedResult) {
      expect(tictactoe.getResult(board)).toBe(expectedResult);
    }.bind(null, board, expectedResult));
  }

  testResult([["x", "o", "x"],
              ["x", "o", "x"],
              ["o", "x", "o"]], '-');
  testResult([["x", "o", " "],
              ["o", "x", " "],
              ["o", "x", "x"]], 'x');
  testResult([["x", "o", "x"],
              ["o", "x", " "],
              ["x", "o", " "]], 'x');
  testResult([["o", "o", "o"],
              ["x", "x", " "],
              ["x", " ", " "]], 'o');
  testResult([["x", "x", " "],
              ["o", "o", "o"],
              ["x", " ", " "]], 'o');
  testResult([["x", "x", " "],
              ["x", " ", " "],
              ["o", "o", "o"]], 'o');
  testResult([["o", "x", "x"],
              ["o", "x", " "],
              ["o", " ", " "]], 'o');
  testResult([["x", "o", "x"],
              ["x", "o", " "],
              [" ", "o", " "]], 'o');
  testResult([["x", "x", "o"],
              ["x", " ", "o"],
              [" ", " ", "o"]], 'o');
  testResult([["o", "o", "x"],
              ["x", "x", "o"],
              ["o", " ", " "]], '?');
  testResult([["o", " ", "x"],
              ["o", "x", " "],
              [" ", " ", "x"]], '?');
  testResult([["o", " ", "x"],
              ["o", "x", " "],
              [" ", "o", "x"]], '?');
});

describe("tictactoe.getComputerMove()", function() {
  function makesValidMove(board) {
    it("getComputerMove() makes valid move for " + boardToString(board), function() {
      var move = tictactoe.getComputerMove(board, 'x');
      expect(move).toBeTruthy();
      expect(function() {
        tictactoe.makeMove(board, move[0], move[1], 'x');
      }).not.toThrow();
    })
  }

  makesValidMove([[" ", " ", " "],
                  [" ", " ", " "],
                  [" ", " ", " "]]);
  makesValidMove([["o", "o", "x"],
                  ["x", "x", "o"],
                  ["o", " ", " "]]);
  makesValidMove([["o", "o", "x"],
                  ["x", " ", "o"],
                  [" ", "o", "x"]]);
  makesValidMove([["o", " ", " "],
                  [" ", " ", " "],
                  [" ", " ", " "]]);
  makesValidMove([[" ", " ", " "],
                  [" ", "o", " "],
                  [" ", " ", " "]]);
  makesValidMove([[" ", " ", " "],
                  [" ", " ", " "],
                  [" ", " ", "o"]]);

  it('getComputerMove() makes inevitable move', function() {
    var board = [["x", " ", "x"],
                 ["x", "o", "x"],
                 ["o", "x", "o"]];
    expect(tictactoe.getComputerMove(board, 'x')).toEqual([0, 1]);
  });

  it('getComputerMove() throws error for full board', function() {
    var board = [["x", "o", "x"],
                 ["x", "o", "x"],
                 ["o", "x", "o"]];
    expect(function() { tictactoe.getComputerMove(board, 'x') }).toThrow();
  });
});
