# Mongoose Exercise: NBA List

In this exercise we will be writing a simple server that will use `mongoose` to manage information about NBA players in mongoDB. Our mongoDB will be hosted on mlab.

## Part 0: Preparing to use mlab

1. Set up a database on mlab.

2. Copy the **MongoDB URI** located inside the box at the top of the screen when viewing your collections. It should be under the text that says: `To connect using a driver via the standard MongoDB URI (what's this?)`. You will need this for later when you connect to the database using mongoose.

3. Now we are going to store this URI as an environmental variable using a shell script. Create a new file `env.sh` in `6_mongo/3_nba_mongoose` and put the `MONGODB_URI` from the previous step there:

    ```bash
    export MONGODB_URI="mongodb://moose:peanutbutterandjelly@ds055555.mlab.com:55555/example"
    ```

4. Run `source env.sh` to import the environment variable from `env.sh`. For an explanation of `source` [click here](https://bash.cyberciti.biz/guide/Source_command). **IMPORTANT**: You must run this command each time you open a new shell. This is because the environmental variables are initialized each time a new shell is opened.

You should be able to clearly tell from mlab.com whether you successfully created a database to use. To verify that you saved the `MONGODB_URI` environment variable correctly, you can enter the command `echo $MONGODB_URI`, which should display the value you entered. If it's there, that means it will be accessible in Node as `process.env.MONGODB_URI`.

### `env.sh` - IMPORTANT DISCLAIMER

We've put `env.sh` into the `.gitignore` file so you may notice that Git doesn't prompt you to commit changes for `env.sh`. We've excluded `env.sh` from Git because you shouldn't put your database username and password on GitHub, where other people could see it! In fact, one main reason we've saved it as an environmental variable in the first place is so that this username/password does not appear at all in the server code you end up pushing to github. There are malicious bots that crawl public github repos looking for projects that accidentally pushed their login credentials and stealing them! No bueno!


## Part 1: Initial Install + Test Data

1. Run `npm install` while in the `nba_mongoose` directory to get all the dependencies initially needed by this project (you'll add more soon).

1. From the command line run `node playerAdd.js`. This is a small program we provided to populate your database with some info to start out with.

If everything has been set up correctly up to this point, you should be able to see 5 Players newly added into a collection in mlab. You may need to refresh the page to see the new entries.

## Part 2: Express + Mongoose Setup

We want to do everything we need to in this step such that in the next one we'll be able to make an endpoint on our server that will retrieve all the players in the mongo database and respond with them. The setup this time around is guided step by step to get you more comfortable with this ritual.

1. First we will need express to write a server. You should install express as a dependency in your project with `npm install express`. Then you should get an express app started in our code (the comments in the snippets are already in `index.js` where these are meant to go):

    ```javascript
    // Require express and create an express app
    var express = require('express');
    var app = express();
    ```

    ```javascript
    // Begin listening on port 3000
    app.listen(3000, function(){
      console.log('Listening on port 3000');
    });
    ```

1. Secondly, we will need mongoose to read from the mongo database. Install mongoose with `npm install mongoose` and connect to your database on mlab with:

    ```javascript
    // Require mongoose
    var mongoose = require('mongoose');
    ```

    ```javascript
    // Establish mongoose connection to the mongoDB on mlab
    mongoose.connect(process.env.MONGODB_URI);
    ```

1. mongoose isn't very useful without a model.Take a look at the Player model provided for you in `/3_nba_mongoose/model/player.js`. Require the model this file exports:

    ```javascript
    // Require the Player model
    var Player = require('./model/player');
    ```

At this point there's not much to show for your efforts, but you should be able to at least run your code with `npm start` without getting an error. If all went well, you should see some output indicating both that a mongo-connection was established and that the server has begun listening for requests.

Note: The `start` script for this project (found in `package.json`) uses `nodemon`, which is just like node except if you edit the file that is running (`index.js` in this case) it will automatically rerun itself so you don't have to. `nodemon` is an `npm` package that was installed from this projects dependencies (alsi found in `package.json`) when you ran `npm install`.

## Part 3: GET /  --> Player info

Now we will write an express route which, when hit, will pull info from the Player collection and respond to the requester with that info in a JSON.

1. Make a route that responds to GET requests on simply `localhost:3000`. This route should respond with all the players in the Player collection, fetched using mongoose.

    <details>
      <summary>Express Hint</summary>

      ```javascript
      app.get('/', function() {
        // Put some stuff in here
        // Respond using res.json after getting the data
        // Remember: when it comes to async callbacks,
        // 'after' might mean 'inside' as opposed to 'below'
      });
      ```
    </details>

    <details>
      <summary>Mongoose Hint</summary>

      ```javascript
      Player.find({/*query parameter*/}, function(error, results){
        // In this case, you have no query parameter, you want ALL players,
        // so you can leave the curlies empty.
        // If you were looking for an NBA player with a certain Name
        // your first argument might be { Name: "Michael Phelps" }

        // Check for error / do whatever with results
        // What did you want to do with the results? Do it here!
      });
      ```
    </details>

When this is completed correctly, you should be able to tell by making a GET request to `localhost:3000` while the server is running. Run the server with `npm start` and make a GET request, either using your browser's url bar or PostMan. What you get back should look like the 5 players in your database, formatted much like they are in `/3_nba_mongoose/model/source/playerStats.json`.

## Part 4: POST /addPlayer  --> New Player in DB

We would like to be able to send new players to the server and get them added into the DB using a POST request.

1. Before we can use POST requests effectively, we will want body-parser so `req.body` exists in our express routes. `npm install body-parser` and then:

    ```javascript
    // Require and setup body-parser
    var bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json());
    ```

1. Add a route that takes the POST data sent to `localhost:3000/addPlayer` and saves it in Player collection using mongoose. If the data sent with the POST request is not a valid player, you might respond indicating there was an error, otherwise you can simply respond indicating that the addition was successful. In either case, the response should be JSON. You can see what fields belong to a Player in the model `/3_nba_mongoose/model/player.js`, or by looking at the specific examples in `/3_nba_mongoose/model/source/playerStats.json`.

    <details>
      <summary>Express Hint</summary>

      ```javascript
      app.post('/addPlayer', function() {
        // Put some stuff in here
        // req.body will be involved somewhere
      });
      ```
    </details>

    <details>
      <summary>Mongoose Hint</summary>

      ```javascript
      var newPlayer = new Player({
        // set player details inside this object
        // Name: "Tiger Woods", etc.
      });
      newPlayer.save({/*query parameter*/}, function(error, results){
        // In this case, you have no query parameter, you want ALL players
        // So you can leave the curlies empty

        // Check for error / do whatever with results
        // What did you want to do with the results? Do it here!
      });
      ```
    </details>

    Note: The act of finding Players does not require that you have any particular player already, so in `Player.find()` `.find()` is called directly on the model. Whereas saving a Player requires that you have some player to save, so in `myPlayer.save()` `.save()` is called on some particular instance of the Player model. As such, `.find()` is considered a mongoose `static` while `.save()` is considered a mongoose `method`.

If this step has been completed successfully, you should be able to make a POST request to `localhost:3000/addPlayer` with a body containing that player's info and see it appear in your Player collection. The easiest way to send POST requests for testing is using Postman. To see the results, you could refresh the collection on mlab, or you could make a new GET request to `localhost:3000` to see all the players thanks to the route you completed in Part 3!

## Part 5: POST /addPlayerRoster  --> New Roster in DB

In this part we will be making another collection/model representing a player's Roster information as opposed to their performance information currently in the Player model. Splitting your data across separate collections even when it could reasonably be combined into one like in this case is something that can have it's reasons in certain situations, but here we are doing it just for practice and not for any good reason.

1. Following the example laid out in `3_nba_mongoose/model/player.js`, add a new model **Roster** into the model folder that has the following attributes:

    **Name**
      *	Required
      * Type string

    **JerseyNumber**
      *	Not Required
      *	Type number

    **Team**
      *	Required
      *	Type string

    Notice that Name appears in both the Player and Roster models. This is the linking field that lets you know which Players and Rosters correspond to one another. Often this is better done using the unique id that mongoDB gives all its entries, but for today this should be fine.

1. Use `require` to get the Roster model you just made into your main server file, `index.js`.

1. Make a POST route that can be used to submit a player's roster information to `localhost:3000/addPlayerRoster` and save a new Roster into the database. It can respond with a simple indicator of success when successful.

By now you should be able to ascertain on your own whether what you wrote is working or not. Before moving on, be sure to use this route to add a Roster for a couple of the players already in your database.

## Part 6: GET /:rosterid  --> A player's combined info

The point of this route is for GET requests to `/:rosterid` to specify a Roster id (the unique mongo id of an entry in the Roster collection) and get back the combined fields on that player from both the Player and Roster collections. The act of performing a database query across multiple collections is loosely referred to as a JOIN.

Your response should be a JSON that looks something like:
```json
{
  "Name": "Peyton Manning",
  "Team": "Boston Celtics",
  "JerseyNum": 33,
  "Points": 28,
  "Assists": 4,
  "Rebounds": 10
}
```

1. Do it. You want to first find the Roster entry with the specified id, THEN you want to find the Player entry with a `Name` the same as the one in the Roster entry you just found. Remember that when it comes to async callbacks, when seeing "a THEN b" you should think "b INSIDE a" and not "b AFTER a".

You should be able to use either Postman or your browser to test this route out. You will most likely need to go to mlab to copy paste one of the Roster's ids. You should test this with players who have entries in both the Player and Roster collections, but it would also be ideal if the server didn't crash if you happen to supply the id of a Roster which has no corresponding player.

## BONUS: DELETE /:rosterid  --> Roster & Player removed from DB

Write a route that behaves a lot like the last one you wrote, but in place of responding with the information found it should remove both the Roster and the corresponding Player from their respective collections. This route should respond to DELETE requests to `/:rosterid` with an indication of success or failure.
