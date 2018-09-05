"use strict";

// Game 2. Hangman
// In this exercise we're building a game of Hangman in the browser.
// Like in the previous Tic Tac Toe exercise, some of the functions have
// already been implemented for you. This time there's more left for you to
// do.
//
// The functions you're supposed implement are marked "YOUR CODE HERE".
// You will find them near the top of this file.
//
// Other functions are further below in three sections:
//  * Helper Functions
//  * Game State Functions
//  * Browser Functions

// Our functions go in a library called hangman.
window.hangman = window.hangman || {};

// ----Helper Functions----
// These functions are the basic building blocks of our game. We'll build on them later.

// hangman.isGuessWrong(word, letter): return true if guess is wrong, as in the
// guessed letter (guess) is not in word.
//
// guess must be a single letter. Throw an exception (generate an error) if
// guess is longer than a single letter.
//
// You can use JavaScript built-in String.indexOf() here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
//
// ex. hangman.isGuessWrong('', 'd') -> true
// ex. hangman.isGuessWrong('c', 'd') -> true
// ex. hangman.isGuessWrong('cat', 'd') -> true
// ex. hangman.isGuessWrong('dog', 'd') -> false
// ex. hangman.isGuessWrong('dog', 'o') -> false
// ex. hangman.isGuessWrong('dog', 'g') -> false
// ex. hangman.isGuessWrong('carrot', 'c') -> false
// ex. hangman.isGuessWrong('carrot', 'r') -> false
// ex. hangman.isGuessWrong('carrot', 't') -> false
// ex. hangman.isGuessWrong('dog', 'do') -> Error!
hangman.isGuessWrong = function(word, guess) {
  // YOUR CODE HERE
  throw "hangman.isGuessWrong() is not implemented, you should implement it.";
}

// hangman.words: a word is randomly chosen from this array when a new game starts.
hangman.words = [ 'cat', 'doctor', 'dog', 'horizons', 'school', 'technology' ];

// hangman.getRandomInteger(min, max): returns a random integer between min (included) and max (excluded).
// Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
hangman.getRandomInteger = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// hangman.getRandomWord(): returns a random word from hangman.words.
// Use: hangman.getRandomInteger() and hangman.words
//
// ex. getRandomWord() -> 'cat'
hangman.getRandomWord = function() {
  // YOUR CODE HERE
  throw "hangman.getRandomWord() is not implemented, you should implement it.";
}

// hangman.maxWrongGuesses: Maximum wrong guesses allowed during a hangman game.
// When player makes this many wrong guesses, the game is over and the player loses.
hangman.maxWrongGuesses = 6;

// hangman.getGameStatus(word, guesses): take a word and an array of guesses and 
// returns a string indicating the game state.
//
// Returns 'lose': if the number of wrong guesses is greater than or equal to
//                 hangman.maxWrongGuesses 
// Returns 'win': if all the letters in word have been guessed
// Returns 'in_progress': if game is not over yet
//
// Uses: hangman.isGuessWrong(), hangman.maxWrongGuesses
//
// ex. hangman.getGameStatus('cat', []) -> 'in_progress'
// ex. hangman.getGameStatus('cat', ['c', 'a', 't']) -> 'win'
// ex. hangman.getGameStatus('cat', ['c', 'a']) -> 'in_progress'
// ex. hangman.getGameStatus('cat', ['x', 'y', 'z', 'b', 'd', 'e']) -> 'lose'
// ex. hangman.getGameStatus('carrot', ['c', 'a', 'r', 'o', 't']) -> 'win'
hangman.getGameStatus = function(word, guesses) {
  // YOUR CODE HERE
  throw "hangman.getGameStatus() is not implemented, you should implement it.";
}

// ----Game State Functions----
// Just like in Tic Tac Toe we store game state in the game object. These functions help
// us read and update game state as the game progresses.
// Values are initially empty (null). When the game starts, they will be set to new values.
hangman.game = {
  word: null, // The word player is trying to guess
  guesses: null // An array of letters containing guesses player has made so far
                // ex. ['a', 'b', 'c']
}

// hangman.startGame(): Start a new game of hangman.
// If a game is already in progress, clears the game state and starts a new game.
// called when game is started.
//
// This function should:
//  * set hangman.game.word to a new word chosen with hangman.getRandomWord()
//  * set hangman.game.guesses to be an empty array []
//  * draw the game in the browser with hangman.drawGame() after state has been updated
hangman.startGame = function() {
  // YOUR CODE HERE
  throw "hangman.startGame() is not implemented, you should implement it.";
}

// hangman.makeGuess(letter): This function is called when the player makes a guess.
// "letter" will be a string that's only 1 letter long.
//
// This function should:
//  * throw an exception (generate an error) if game is over (using hangman.getGameStatus())
//  * add letter to the array of guesses (hangman.game.guesses)
//  * draw the game in the browser with hangman.drawGame() after state has been updated
hangman.makeGuess = function(letter) {
  // YOUR CODE HERE
  throw "hangman.makeGuess() is not implemented, you should implement it.";
}

// ----Browser Functions----
// These are functions that handle interaction with the browser. You only need
// to use hangman.drawGame() but you can look at the others also.
// 
// hangman.drawGame(): Update the browser to display the latest state of the game.
//
// Make sure you update hangman.game before calling this function as it reads game
// state from hangman.game.
//
// Uses:
//  * hangman.isGuessWrong() to count wrong guesses
//  * hangman.maxWrongGuesses to figure out how many guesses are left
//  * hangman.getGameStatus() to get game status
hangman.drawGame = function() {
  // Count wrong guesses
  var wrongGuesses = [];
  hangman.game.guesses.forEach(function(guess) {
    if (hangman.isGuessWrong(hangman.game.word, guess)) {
      wrongGuesses.push(guess);
    }
  });
  var guessesLeft = hangman.maxWrongGuesses - wrongGuesses.length;
  document.getElementById('guessesLeft').innerHTML = guessesLeft + '';
  
  var imgSrc = ['img/hangman', wrongGuesses.length, '.png'].join('');
  document.getElementById('man').src = imgSrc;

  // Hide letters from word and display it
  var letters = hangman.game.word.split('');
  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i];
    if (letter === ' ') {
      // Make spaces explicit
      letters[i] =  '&nbsp;';
    } else if ((! guessesLeft) || (hangman.game.guesses.indexOf(letter) > -1)) {
      // Game is over or letter has been guessed, capitalize it then reveal it
      letters[i] = letter.toUpperCase();
    } else {
      // Letter has not been guessed, hide it
      letters[i] =  '_';
    }
  }
  document.getElementById('word').innerHTML = letters.join(' ');

  // Update game status
  var status = hangman.getGameStatus(hangman.game.word, hangman.game.guesses);
  var statuses = {
    'win': 'You win!',
    'lose': 'You lose.',
    'in_progress': ''
  }
  document.getElementById('status').innerHTML = statuses[status];
}

// hangman.playerLetterClick(event): This function is called when the player clicks on 
// a letter to make a guess. This function in turn calls hangman.makeGuess() with the
// button that the user clicked on.
// It also handles disabling buttons once they are clicked.
hangman.playerLetterClick = function(event) {
  if ((! hangman.game.word) || (! hangman.game.guesses)) {
    console.log("Ignoring user click. Game not initialized. Game: %O", hangman.game);
    return;
  }

  if ((! event.target) || (event.target.tagName !== 'BUTTON')) {
    console.log("Ignore user click outside button. Event: %O", event);
    return;
  }

  if (event.target.disabled) {
    console.log("Ignore user click to disabled button. Event: %O", event);
    return;
  }

  var letter = event.target.innerHTML.trim().toLowerCase();
  console.log("Player makes guesses '%s'", letter);
  hangman.makeGuess(letter);
  event.target.disabled = true;
}

// hangman.resetButtons(): letters become disabled when the player clicks on them, when a new game
// starts, this function re-enables them.
hangman.resetButtons = function() {
  // Get all buttons
  var buttons = document.querySelectorAll('.letters button');
  if (buttons) {
    [].forEach.call(buttons, function(button) {
      button.disabled = false;
    });
  }
}
