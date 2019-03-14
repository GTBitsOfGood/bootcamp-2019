import React from 'react';

const About = () =>
    <div>
        <h3>Redux Hangman, Horizons Edition</h3>
        <p>
          Hangman is a paper and pencil guessing game for two or more players.
          One player thinks of a word, phrase or sentence and the other tries
          to guess it by suggesting letters or numbers, within a certain number
          of guesses.
        </p>
        <p>
          The word to guess is represented by a row of dashes, representing
          each letter of the word. In most variants, proper nouns, such as
          names, places, and brands, are not allowed. Slang words, sometimes
          referred to as informal or shortened words, are also not allowed. If
          the guessing player suggests a letter which occurs in the word, the
          other player writes it in all its correct positions. If the suggested
          letter or number does not occur in the word, the other player draws
          one element of a hanged man stick figure as a tally mark.
        </p>
        <p>
          The player guessing the word may, at any time, attempt to guess the
          whole word. If the word is correct, the game is over and the guesser
          wins. Otherwise, the other player may choose to penalize the guesser
          by adding an element to the diagram. On the other hand, if the other
          player makes enough incorrect guesses to allow his opponent to
          complete the diagram, the game is also over, this time with the
          guesser losing. However, the guesser can also win by guessing all the
          letters or numbers that appears in the word, thereby completing the
          word, before the diagram is completed.
        </p>

    </div>;


export default About;
