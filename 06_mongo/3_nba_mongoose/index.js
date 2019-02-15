// Require express and create an express app (Part 2.1)
let express = require('express');
let app = express();
app.listen(3000, () => {
  console.log('Listening on port 3000');
});

// Require mongoose (Part 2.2)
let mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
// Require and setup body-parser (Part 4.1)
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Require the Player model (Part 2.3)
let Player = require('./model/player');
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

/* =====================================
        WRITE ROUTES DOWN HERE
   ===================================== */

// (Part 3.1)
app.get('/', (req, res) => {
  Player.find({}, (err, results) => {
    if (err) console.log(err);
    else res.send(results);
  })
});

// Player.find({}, (err, res) => {
//   if (err) console.log(err);
//   return res;
// });
// (Part 4.2)
app.post('/addPlayer', (req, res) => {
  let newPlayer = new Player({
      Name: req.query.name,
      Points: req.query.points,
      Rebounds: req.query.rebounds,
      Assists: req.query.assists
  });
  newPlayer.save({}, (err, results) => {
    if (err) res.send(err);
    else res.send("Success");
  })
});
// (Part 5.3)

// (BONUS)

// Begin listening on port 3000 (Part 2.1)
