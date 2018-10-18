# (Bonus) Pair programming exercise: Blackjack

In this exercise we're going to build a card game classic: Blackjack, also known as Twenty One. We'll be building off the skills you learned last week using MongoDB, Express, and Node to structure a backend capable of handling game logic as well as using jQuery and AJAX to render gameplay on the frontend in realtime.

In Phase 1, you'll be building out the game with only one player against a dealer.

In Phase 2, we're taking it a step further with multiplayer gameplay using Passport for authenticating your users and pitting them against each other and the dealer.

_**Tip:** Need a refresher on how Blackjack is played? Scroll down to **Rules of Blackjack**!_


## Phase 1: Player 1 Start!

You could do this in any order you'd like, but following it in order of this README might help to understand web application structure - the big picture!

### Introduction ▶️ - `app.js`

First build a Blackjack game where a single person can play against the dealer. Begin by taking a look at `app.js` - the entry point of your application. Everything here is ready for you - dependencies and all - but you need to create a `config.js` file or set an environment variable to allow your application to connect to a local database or mLab instance.

### Creating your model 💾 - `models/Game.js`

Define a Game model that represents a single Blackjack game and able to keep track of the following:

- The bet that the player has made before the game - `Number`
- The cards in the player's hand - `Array` (**do not define a specific schema for the Card**, we'll do that later!)
- The cards in the dealer's hand - `Array`
- The cards in the deck - `Array` (we will be setting this upon Game initialization, with the help of the Deck object)
- The total value of the cards in the player's hand - `Number` (default to 0)
- The total value of the cards in the dealer's hand - `Number` (default to 0)
- The status of the game - could be "Not Started", "Over", or "In Progress" - `String` (default to "Not Started")
- The status of the player - `String`
- The status of the dealer - `String`


### Defining game functions 🎲 - `models/Game.js`

Begin by finishing the Card constructor, which takes parameters `suit` (a string that represents the suit of the card, which could be "hearts", "diamonds", "spades", or "clubs"), `val` (a number that represents the value of the card in Blackjack - see **Rules of Blackjack**), and `symbol` (a string that represents the card's displayed value - Aces have a `symbol` of  "A", Kings have a `symbol` of "K", Queens "Q", Jacks "J", and number cards simply their number value).

**It's important to note that the Card constructor should not represent a Mongoose model - it will only be an object we use for the Deck object.**

Next, fill out the prototype methods for an object representing a Deck.

- `createDeck` will populate the `this.deck` array with a full set of 52 cards (each represented by a Card object). Populate aces with a `val` of 11 for now - we'll deal with its possible value of 1 in another function.

- `shuffleDeck` will take `this.deck` and place the cards at random indices. You can try to implement your own shuffle, or check out [this page on the Fisher-Yates shuffle](http://www.programming-algorithms.net/article/43676/Fisher-Yates-shuffle) if you're struggling! Don't copy and paste code without understanding it - find a way to implement the pseudocode or write your own.

When playing with the backend only, we must be able to view our game results. For
this, we need to know the state of the game with every move. For example, if a user
draws a card, we need to know their current cards, score, status of the game to
be able to continue playing. This is a JSON object that is sent to the client.

Finally, we'll define methods used by our Game. Because we are defining these static and instance methods as part of our *Schema*, they will be available for us to call from models in other places, such as our routes.

- `GameSchema.methods.calcValue` will take a `hand` parameter (an Array, either the dealer or player's hand) and return the point value for the hand. The point value for the hand will take into account the possibility of aces in a `hand` and return the optimal value (i.e., a blackjack of a king and an ace should return 21, not 11).
- `GameSchema.methods.dealInitial` will begin our game by dealing two cards from the deck to both the dealer and the player. Update all properties related to this action (including `status`, totals, and hands), and refer to the current Game Mongoose model using the `this` keyword!
- `GameSchema.methods.hit` will update the user's hand with the next card from the deck and subsequently update the game's values for `userTotal` and determine if the game is over at this point. If it is, call `gameOver` (to be implemented)!
- `GameSchema.methods.stand` is called when the user has finished drawing cards. Here, you will draw cards for the dealer until either the dealer busts or reaches a point value 17 or greater. The dealer will stop drawing cards after reaching 17 or above. Since the players will no longer draw cards after this process, call `gameOver` upon the completion of this function.
- `GameSchema.methods.gameOver` is called when, well, the game is over. Set the `status` of the game to "Over" and determine the outcome of the game, setting `userStatus` and `dealerStatus` appropriately.

### Exposing gameplay through routes 🔮 - `routes/index.js`

The first function we want to write in our Router is `gameRepresentation`, which will take a `game` model as a parameter and return us an object that represents the game state we want to send back to a client.

Below is a suggested game state representation. Here you can know the cards of each
player, whether the game has ended, if someone has lost, etc. This model is a
suggestion and can be changed, but notice that we have not included the deck array in the object we are sending back in `gameRepresentation` - we don't want the user to be able to store the deck!

```
{
  id: game._id,
  playerBet: game.playerBet,
  status: game.status,
  userTotal : game.userTotal,
  dealerTotal : game.dealerTotal,
  userStatus : game.userStatus,
  dealerStatus : game.dealerStatus,
  currentPlayerHand : game.currentPlayerHand,
  houseHand : game.houseHand
}
```


These are the most important methods on the backend. They will do all the actions
for our game. We'll start by implementing the ones that are necessary to be able
to play with the backend only, making requests from postman.

All routes respond with a JSON object as returned by the `gameRepresentation` function.

1. `GET /`
	- Return all games in the database, but only with its ID and current status - no need to return with the entire game state representation
	- Take an optional query `status` and respond with only games corresponding to `?status=X`, where `X` is "Over", "In Progress", or "Waiting."
1. `POST /game`:
	- Creates new game
  	- Redirects to `/game/id`, with the new game's ID.
1. `GET /game/:id`
	- Render the `viewgame` template with a context object that has a `title` property and a `game` property. The `game` should have the `Game state representation`.
1. `POST /game/:id`:
	- The player declares their bet (in a field of the request body called `bet`) for the game by `:id`.
	- Call your `dealInitial` on the game here
	- Error if the player has already declared their bet
	- Responds with `Game state representation`
1. `POST /game/:id/hit`:
	- Player draws another card
	- Error if the player has not yet declared their bet
	- Error if the game is not in progress
	- If player busts, game is over, otherwise player can hit again or stand
	- Responds with `Game state representation`
1. `POST /game/:id/stand`: (renders JSON)
	- Error if the player has not yet declared their bet
	- Error if the game is not in progress
	- Player stops drawing cards
	- Dealer draws cards until they have more than 17
	- Determine winner
	- Game is over
	- Responds with `Game state representation`


### Templating your games list 🎛 - `views/index.hbs`

We've provided you with templating and styling for gameplay, but you are responsible for creating the first screens of your application. Using the context object you passed in with your `GET /` request, write a template for listing your active games. Each active game listed should allow a user to click through and play the game. Since it's a one-player game for now, you only have to worry about whether or not the game is in progress.

### Testing your game with Postman 📬 - `Postman`

After writing these routes, you will be able to test your game through using HTTP requests only using Postman! Try each route and your game flow to test your functionality up to this point.

1. `POST /game` will create your new game and give you an ID to use: `312314234234`
2. `POST /game/312314234234/bet` with request body `{bet: 123}` will return you something like
 ```javascript
{
  id: 312314234234,
  playerBet:  123,
  status: "Not Started",
  userTotal: 12,
  dealerTotal: 17,
  userStatus: "Waiting",
  dealerStatus: "Waiting",
  currentPlayerHand : [{"clubs", 10, "K"}, {"spades", 2, "2"}]
  houseHand: [{"hearts", 11, "A"}, {"spades", 6, "6"}]
}
```


3. `POST /game/312314234234/hit` gives the player a new card. Returns:
 ```javascript
{
  ...
  dealerTotal : 17,
  currentPlayerHand : [{"clubs", 10, "K"}, {"spades", 2, "2"}, {"hearts", 6, "6"}]
  ...
}
```
4. `POST /game/:id/stand` Returns the final status of the game and who has won.


### Putting the frontend together ⚡️ - `public/javascripts/game.js`

Time to build the frontend behavior for your game. First take a look at the template you are working with at `views/viewgame.hbs`. Notice how both the bet form and gameplay buttons are displayed simultaneously - you will prevent this with jQuery and display it so that the application flow is something like the following:

Firstly: determine which view to display based on the response of `getData()`, which retrieves the current game information with an AJAX request upon pageload.

Secondly: build out the logic for all other AJAX requests and updating the view.

**For active or unplayed game:**

1. Bet form is the only element shown upon page load
2. The user submits the bet form and the form submit event is handled with AJAX (by `preventDefault`'ing!).
3. The `play` function is called; the bet form is hidden, and both the dealer and user elements (`.dealer-area` and `.user-area`) are now shown. The `play` function should also be responsible for rendering cards from both hands.
4. Event handlers are set for each button, to correspond to `hit()` and `stand()` functions.
5. Upon calling `hit()` or `stand()`, an AJAX request is fired and the game is updated accordingly - `play` should be called to render the game with the new information.

**For played game:** show winner/loser/draw.


## Phase 2: Level Up with Multiplayer

Time for a challenge. Dealing with multiple users will require you to create new User models and authenticate them into your games. Using what you've learned today about Passport, add basic user login functionality to your Blackjack game.

### Routes

- `GET /`: (exists from part 1)
  - Query parameter for filtering games to current player
- `GET /login`: (new)
  - Render `Login` view
- `POST /login`: (new)
  - If username does not exist in MongoDb, create user
  - Set cookie for login
  - Redirect to `/`
- `POST /logout`: (new)
  - Delete login cookie
  - Redirect to `/`
- `POST /game/:id/bet` `/game/:id/hit` `/game/:id/stand`: (exists from part 1)
  - Error if it's not the current player's turn
  - Update game state representation

#### Changes to game state representation

For the multiplayer game we need a few additional pieces of info on the
game status:

```
{
  "dealerCards": [card1, card2 ...],
  "playerId": id,
  "playerCards": [card1, card2 ...],
  "playerStatus: "turnNow"/"waiting"/"won"/"lost"/"draw"
  "player2Id": playerId
  "player2Cards": [card1, card2 ...],
  "player2Status: "turnNow"/"waiting"/"won"/"lost"/"draw"
}
```

### Views

- List games: (exists in part 1)
  - Option to filter games that a player can join
  - Option to filter games that a player is already in
- View game: (exists in part 1)
  - If game has an empty seat (i.e. both players are not set) button to join game
  - If current player's turn:
- Login
  - A form for logging into the game

### Models

- Player: the person playing the game. Properties:
  - Username (`String`): name to display in the UI for user
  - Money (`Number`): number of Horizons Dollars belonging to player
- Game: additional properties
  - Player 1 id (`ObjectId`): Mongo id of the player in the game
  - Player 2 bet (`Number`): number of Horizons Dollars the 2nd player has bet.
  - Player 2 hand (`Array` of `String`s): cards in the 2nd players hand.
  - Player 2 id (`ObjectId`): Mongo id of the player in the game

## Rules of Blackjack

We will be playing with a simplified set of rules.

### Scoring hands

The value of a hand is the sum of the point values of the individual cards.
Except, a "blackjack" is the highest hand, consisting of an ace and any
10-point card, and it outranks all other 21-point hands.

Aces may be counted as 1 or 11 points, 2 to 9 according to face value, and tens
and face cards count as 10 points.

[Source](http://wizardofodds.com/games/blackjack/basics/)


### Game flow

1. Players decide how much they will bet.
1. Dealer gives each player 2 cards face up.
1. Dealer gives herself 1 card face up, 1 card face down.
1. If the dealer has a blackjack (an Ace and any 10 point card) then players
  who don't also have blackjacks lose their bets. Players who also have
  blackjacks get their bets back.
1. If the dealer doesn't have a blackjack, players decide their moves.
  They can:

  1. **Hit:** Take another card. The player can hit keep hitting until they
  reach 21. If player goes over 21, they lose.
  1. **Stand:** Player choses to not take a card. This ends the player's turn.

1. After all players have taken their turns, the dealer reveals her face-down
  card. The dealer than keeps drawing more cards until she has more than 16
  points.
1. If the dealer ends up with more than 21 points (i.e. busts), all players who
  have not busted win and get back double their bets.
1. Otherwise:

  1. Players who have less points than the dealer lose.
  1. Players who have the same points as the dealer get their bets back.
  1. Players who have more points than the dealer get back double their bets.
