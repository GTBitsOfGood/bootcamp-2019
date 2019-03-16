// Require express and create an express app (Part 2.1)
let express = require('express');
let app = express();

// Require mongoose (Part 2.2)
let mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {useNewURLParser: true}, ()=>{
    console.log("We are connected to mLab");
});

// Require and setup body-parser (Part 4.1)
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// Require the Player model (Part 2.3)
let player = require('./model/player');

// Require the Roster model (Part 5.2)
let roster = require('./model/roster');



// Ensure that there is a MONGODB_URI environment variable (source env.sh)
if (! process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not in the environmental variables. Try running 'source env.sh'");
}


mongoose.connection.on('connected', function() {
  console.log('Success: connected to MongoDb!');
});
mongoose.connection.on('error', function(err) {
  console.log('Error connecting to MongoDb: ' + err);
  process.exit(1);
});
// Establish mongoose connection to the mongoDB on mlab (Part 2.2)


/* =====================================
        WRITE ROUTES DOWN HERE
   ===================================== */

// (Part 3.1)
app.get("/", ()=> {
    let playerData = Player.find(function(err, result) {
        if (err)
            console.log('Error: ', results);
    })
    res.json(playerData);
})

// (Part 4.2)
app.post('/addPlayer', function() {
    let newPlayer = new Player({
        Name: req.body.Name,
        Points: req.body.Points,
        Rebounds: req.body.Rebounds,
        Assists: req.body.Assists
    });

    newPlayer.save((err,results)=> {
        if (err) {
            console.log('Error: ', results);
        } else {
            console.log('Successfully saved');
        }
    })
})

// (Part 5.3)
app.get('/:rosterid', function() {
    let id = req.params.rosterid;
    let obj = Roster.find(id);
    obj.then(Player.find({Name: obj.Name }));
    res.json()
})

// (BONUS)



// Begin listening on port 3000 (Part 2.1)
app.listen(3000, () => {
    console.log("Listening on port 3000");
})