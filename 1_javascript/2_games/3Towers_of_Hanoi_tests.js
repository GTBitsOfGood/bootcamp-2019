"use strict";

describe("towers.isArray()", function() {
  it("towers.isArray('a') -> false", function() {
    expect(towers.isArray('a')).toBe(false);
  });
  it("towers.isArray(0) -> false", function() {
    expect(towers.isArray(0)).toBe(false);
  });
  it("towers.isArray([]) -> true", function() {
    expect(towers.isArray([])).toBe(true);
  });
});

describe("towers.isNumber()", function() {
  it("towers.isNumber('a') -> false", function() {
    expect(towers.isNumber('a')).toBe(false);
  });
  it("towers.isNumber([]) -> false", function() {
    expect(towers.isNumber([])).toBe(false);
  });
  it("towers.isNumber(0) -> true", function() {
    expect(towers.isNumber(0)).toBe(true);
  });
});

describe("towers.isValidBoard()", function() {
  it("towers.isValidBoard() -> false", function() {
    expect(towers.isValidBoard()).toBe(false);
  });
  it("towers.isValidBoard(1) -> false", function() {
    expect(towers.isValidBoard(1)).toBe(false);
  });
  it("towers.isValidBoard(towers.newBoard()) -> true", function() {
    expect(towers.isValidBoard(towers.newBoard())).toBe(true);
  });
  it("towers.isValidBoard([]) -> false", function() {
    expect(towers.isValidBoard([])).toBe(false);
  });
  it("towers.isValidBoard([2, 1, 0]) -> false", function() {
    expect(towers.isValidBoard([2, 1, 0])).toBe(false);
  });
  it("towers.isValidBoard([[], [], []]) -> false", function() {
    expect(towers.isValidBoard([[], [], []])).toBe(false);
  });
  it("towers.isValidBoard([[2, 1], [], []]) -> false", function() {
    expect(towers.isValidBoard([[2, 1], [], []])).toBe(false);
  });
  it("towers.isValidBoard([[0, 1], [2], []]) -> false", function() {
    expect(towers.isValidBoard([[0, 1], [2], []])).toBe(false);
  });
  it("towers.isValidBoard([[0], [2], [1]]) -> true", function() {
    expect(towers.isValidBoard([[0], [2], [1]])).toBe(true);
  });
  it("towers.isValidBoard([[], [2, 0], [1]]) -> true", function() {
    expect(towers.isValidBoard([[], [2, 0], [1]])).toBe(true);
  });
  it("towers.isValidBoard([[], [], [2, 1, 0]]) -> true", function() {
    expect(towers.isValidBoard([[], [], [2, 1, 0]])).toBe(true);
  });
  it("towers.isValidBoard([[2, [], [2, 0]]) -> false", function() {
    expect(towers.isValidBoard([[2], [], [2, 0]])).toBe(false);
  });
  it("towers.isValidBoard([[2], [3], [1, 0]]) -> false", function() {
    expect(towers.isValidBoard([[2], [3], [1, 0]])).toBe(false);
  });
  it("towers.isValidBoard([[2], [0, 1], []]) -> false", function() {
    expect(towers.isValidBoard([[2], [0, 1], []]) ).toBe(false);
  });
  it("towers.isValidBoard([[], [], [2, 0, 1]]) -> false", function() {
    expect(towers.isValidBoard([[], [], [2, 0, 1]]) ).toBe(false);
  });
});

describe("towers.newGame()", function() {
  beforeEach(function() {
    spyOn(towers, 'drawGame');
    spyOn(towers, 'clearWin');
    spyOn(towers, 'win');
  });

  it("towers.newGame() calls towers.drawGame() and towers.clearWin()", function() { 
    towers.newGame();
    expect(towers.drawGame).toHaveBeenCalledWith(towers.newBoard());
    expect(towers.clearWin).toHaveBeenCalled();
  });
})

describe('towers.makeMove()', function() { 
  beforeEach(function() {
    spyOn(towers, 'drawGame');
    spyOn(towers, 'clearWin');
    spyOn(towers, 'win');
    spyOn(towers, 'isValidBoard').and.callThrough();
    towers.newGame();
  });

  it("towers.makeMove(1, 0) calls isValidBoard() to validate move", function() { 
    towers.makeMove(0, 1);
    expect(towers.isValidBoard).toHaveBeenCalled();
  });

  it("towers.makeMove(0, 1) then towers.makeMove(0, 1) -> Error: disk from 0 is bigger than disk in 1", function() { 
    towers.makeMove(0, 1);
    expect(function() { towers.makeMove(0, 1) }).toThrow();
  });

  it("towers.makeMove(0, 1) calls towers.drawGame() with updated board", function() { 
    towers.makeMove(0, 1);
    expect(towers.drawGame).toHaveBeenCalledWith([[2, 1], [0], []]);
  });

  it("towers.makeMove() with [0, 1] and [1, 0] in a cycle updated board", function() { 
    for (var i = 0; i < 5; i ++) {
      towers.makeMove(0, 1);
      expect(towers.drawGame).toHaveBeenCalledWith([[2, 1], [0], []]);
      towers.makeMove(1, 0);
      expect(towers.drawGame).toHaveBeenCalledWith([[2, 1, 0], [], []]);
    }
  });

  it("win game with towers.makeMove() and make sure towers.win() is called", function() { 
    towers.makeMove(0, 2);
    expect(towers.drawGame).toHaveBeenCalledWith([[2, 1], [], [0]]);
    towers.makeMove(0, 1);
    expect(towers.drawGame).toHaveBeenCalledWith([[2], [1], [0]]);
    towers.makeMove(2, 1);
    expect(towers.drawGame).toHaveBeenCalledWith([[2], [1, 0], []]);
    towers.makeMove(0, 2);
    expect(towers.drawGame).toHaveBeenCalledWith([[], [1, 0], [2]]);
    towers.makeMove(1, 0);
    expect(towers.drawGame).toHaveBeenCalledWith([[0], [1], [2]]);
    towers.makeMove(1, 2);
    expect(towers.drawGame).toHaveBeenCalledWith([[0], [], [2, 1]]);
    towers.makeMove(0, 2);
    expect(towers.drawGame).toHaveBeenCalledWith([[], [], [2, 1, 0]]);
    expect(towers.win).toHaveBeenCalled();
  });
});
