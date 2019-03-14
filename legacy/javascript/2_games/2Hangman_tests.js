"use strict";

describe("hangman.isGuessWrong()", function() {
  it("hangman.isGuessWrong('', 'd') -> true", function() {
    expect(hangman.isGuessWrong('', 'd') ).toBe(true);
  });
  it("hangman.isGuessWrong('c', 'd') -> true", function() {
    expect(hangman.isGuessWrong('c', 'd') ).toBe(true);
  });
  it("hangman.isGuessWrong('cat', 'd') -> true", function() {
    expect(hangman.isGuessWrong('cat', 'd') ).toBe(true);
  });
  it("hangman.isGuessWrong('dog', 'd') -> false", function() {
    expect(hangman.isGuessWrong('dog', 'd') ).toBe(false);
  });
  it("hangman.isGuessWrong('dog', 'o') -> false", function() {
    expect(hangman.isGuessWrong('dog', 'o') ).toBe(false);
  });
  it("hangman.isGuessWrong('dog', 'g') -> false", function() {
    expect(hangman.isGuessWrong('dog', 'g') ).toBe(false);
  });
  it("hangman.isGuessWrong('carrot', 'c') -> false", function() {
    expect(hangman.isGuessWrong('carrot', 'c') ).toBe(false);
  });
  it("hangman.isGuessWrong('carrot', 'r') -> false", function() {
    expect(hangman.isGuessWrong('carrot', 'r') ).toBe(false);
  });
  it("hangman.isGuessWrong('carrot', 't') -> false", function() {
    expect(hangman.isGuessWrong('carrot', 't') ).toBe(false);
  });
  it("hangman.isGuessWrong('dog', 'do') -> Error!", function() {
    expect(function() { hangman.isGuessWrong('dog', 'do') }).toThrow();
  });
});

describe("hangman.getGameStatus()", function() {
  it("hangman.getGameStatus() calls hangman.isGuessWrong() to count wrong guesses", function() {
    spyOn(hangman, 'isGuessWrong').and.callThrough();
    hangman.getGameStatus('cat', ['a']);
    expect(hangman.isGuessWrong).toHaveBeenCalled();
  });
  it("hangman.getGameStatus('cat', []) -> 'in_progress'", function() {
    expect(hangman.getGameStatus('cat', [])).toBe('in_progress');
  });
  it("hangman.getGameStatus('cat', ['c', 'a', 't']) -> 'win'", function() {
    expect(hangman.getGameStatus('cat', ['c', 'a', 't'])).toBe('win');
  });
  it("hangman.getGameStatus('cat', ['c', 'a']) -> 'in_progress'", function() {
    expect(hangman.getGameStatus('cat', ['c', 'a'])).toBe('in_progress');
  });
  it("hangman.getGameStatus('cat', ['x', 'y', 'z', 'b', 'd', 'e']) -> 'lose'", function() {
    expect(hangman.getGameStatus('cat', ['x', 'y', 'z', 'b', 'd', 'e'])).toBe('lose');
  });
  it("hangman.getGameStatus('cat', ['c', 'y', 'z', 'b', 'd', 'e']) -> 'in_progress'", function() {
    expect(hangman.getGameStatus('cat', ['c', 'y', 'z', 'b', 'd', 'e'])).toBe('in_progress');
  });
  it("hangman.getGameStatus('carrot', ['c', 'a', 'r', 'o', 't']) -> 'win'", function() {
    expect(hangman.getGameStatus('carrot', ['c', 'a', 'r', 'o', 't'])).toBe('win');
  });
  it("hangman.getGameStatus('carrot', ['r', 'o', 't', 'a', 'c']) -> 'win'", function() {
    expect(hangman.getGameStatus('carrot', ['r', 'o', 't', 'a', 'c']) ).toBe('win');
  });
  it("hangman.getGameStatus('carrot', ['r', 'o', 't', 'a', 'e', 'x', 'y', 'z', 'f']) -> 'in_progress'", function() {
    expect(hangman.getGameStatus('carrot', ['r', 'o', 't', 'a', 'e', 'x', 'y', 'z', 'f']) ).toBe('in_progress');
  });
  it("hangman.getGameStatus('carrot', ['r', 'o', 't', 'a', 'e', 'x', 'y', 'z', 'f', 'c']) -> 'win'", function() {
    expect(hangman.getGameStatus('carrot', ['r', 'o', 't', 'a', 'e', 'x', 'y', 'z', 'f', 'c']) ).toBe('win');
  });
  it("hangman.getGameStatus('carrot', ['r', 'o', 't', 'a', 'e', 'x', 'y', 'z', 'f', 'u']) -> 'lose'", function() {
    expect(hangman.getGameStatus('carrot', ['r', 'o', 't', 'a', 'e', 'x', 'y', 'z', 'f', 'u']) ).toBe('lose');
  });
});

describe("hangman.getRandomWord()", function() {
  it('hangman.getRandomWord() returns a word from hangman.words', function() {
    var word = hangman.getRandomWord();
    expect(word).toBeTruthy();
    expect(hangman.words.indexOf(word)).toBeGreaterThan(-1);
  });
});

describe("hangman.startGame()", function() {
  // Save and restore game state before and after tests
  var word, guesses;
  beforeEach(function() {
    spyOn(hangman, 'drawGame');
    word = hangman.game.word;
    guesses = hangman.game.guesses;
  });
  afterEach(function() {
    hangman.game.word = word;
    hangman.game.guesses = guesses;
  });

  it("hangman.game values are empty (null) at start", function() {
    expect(hangman.game.word).toBeNull();
    expect(hangman.game.guesses).toBeNull();
  })

  it("hangman.startGame() sets hangman.game.word using hangman.getRandomWord()", function() {
    // intercept calls to getRandomWord()
    spyOn(hangman, 'getRandomWord').and.returnValue('word');

    hangman.startGame();
    expect(hangman.getRandomWord).toHaveBeenCalled();
    expect(hangman.game.word).not.toBeNull();
    expect(hangman.game.word).toBe('word');
  });

  it("hangman.startGame() sets hangman.game.guesses to be an empty array []", function() {
    hangman.startGame();
    expect(hangman.game.guesses).toEqual([]);
  });

  it("hangman.startGame() calls hangman.drawGame() after setting hangman.game", function() {
    var errorIfGameEmpty = function() {
      expect(hangman.game.word).not.toBeNull();
      expect(hangman.game.word).not.toBeNull();
    }
    hangman.drawGame.and.callFake(errorIfGameEmpty);

    hangman.startGame();
    expect(hangman.drawGame).toHaveBeenCalled();
  });
});

describe("hangman.makeGuess()", function() {
  // Save and restore game state before and after tests
  var word, guesses;
  beforeEach(function() {
    spyOn(hangman, 'drawGame');
    word = hangman.game.word;
    guesses = hangman.game.guesses;
    hangman.startGame(); // start game
  });
  afterEach(function() {
    hangman.game.word = word;
    hangman.game.guesses = guesses;
  });

  it("hangman.makeGuess() throws an exception (generate an error) if game is already lost before move was made (using hangman.getGameStatus())", function() {
    spyOn(hangman, 'getGameStatus').and.returnValue('lose');
    expect(function() { hangman.makeGuess('y') }).toThrow();
  });
  it("hangman.makeGuess() throws an exception (generate an error) if game is already won before move was made (using hangman.getGameStatus())", function() {
    spyOn(hangman, 'getGameStatus').and.returnValue('win');
    expect(function() { hangman.makeGuess('y') }).toThrow();
  });
  it("hangman.makeGuess() adds letter to the array of guesses (hangman.game.guesses)", function() {
    hangman.makeGuess('x');
    expect(hangman.game.guesses).toEqual(['x']);
  });
  it("hangman.makeGuess() draws the game in the browser with hangman.drawGame() after state has been updated", function() {
    hangman.drawGame.and.callFake(function() {
      expect(hangman.game.guesses).toEqual(['x']);
    });
    hangman.makeGuess('x');
    expect(hangman.drawGame).toHaveBeenCalled();
  });
  it("hangman.makeGuess() should check game status BEFORE making move", function() {
    spyOn(hangman, 'getGameStatus').and.callFake(function() {
      expect(hangman.game.guesses).toEqual([]);
      return 'in_progress';
    });
    hangman.makeGuess('x');
    expect(hangman.drawGame).toHaveBeenCalled();
  });
});
