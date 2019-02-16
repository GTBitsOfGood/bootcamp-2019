// Require express and create an express app (Part 2.1)
const express = require('express');
const app = express();
// Require mongoose (Part 2.2)
const mongoose = require('mongoose');
// Require and setup body-parser (Part 4.1)
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Require the Player model (Part 2.3)
const Player = require('./model/player');
// Require the Roster model (Part 5.2)

// Ensure that there is a MONGODB_URI environment variable (source env.sh)
if (!process.env.MONGODB_URI) {
  throw new Error(
    "MONGODB_URI is not in the environmental variables. Try running 'source env.sh'"
  );
}

mongoose.connection.on("connected", () => {
  console.log("Success: connected to MongoDb!");
});
mongoose.connection.on("error", err => {
  console.log("Error connecting to MongoDb: " + err);
  process.exit(1);
});
// Establish mongoose connection to the mongoDB on mlab (Part 2.2)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true } );
/* =====================================
        WRITE ROUTES DOWN HERE
   ===================================== */

// (Part 3.1)
app.get('/', (req, res) => {
  Player.find({}, function(error, results){
    res.json(results);
  });
});

// (Part 4.2)
app.post('/addPlayer', (req, res) => {
  let newPlayer = new Player(
      {
        Name: req.body.Name,
        Points: req.body.Points,
        Rebounds: req.body.Rebounds,
        Assists: req.body.Assists
      });
  newPlayer.save().then((error) => {
        console.log(error);
  });

})
// (Part 5.3)

// (BONUS)

// Begin listening on port 3000 (Part 2.1)


app.listen(3000, function(){
  console.log('Listening on port 3000');
});