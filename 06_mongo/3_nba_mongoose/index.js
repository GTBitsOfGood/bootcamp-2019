require("dotenv").config();
// Require express and create an express app (Part 2.1)
const express = require('express');
const app = express();
// Require mongoose (Part 2.2)
const mongoose = require("mongoose");
// Require and setup body-parser (Part 4.1)
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Require the Player model (Part 2.3)
const Player = require("./model/player");
// Require the Roster model (Part 5.2)
const Roster = require("./model/roster");
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
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

/* =====================================
        WRITE ROUTES DOWN HERE
   ===================================== */

// (Part 3.1)
app.get('/', function (req, res) {
    Player.find(function (error, results) {
        let arr = results.forEach((item, index) => results[index] = {
            "Name": item.Name,
            "Points": item.Points,
            "Rebounds": item.Rebounds,
            "Assists": item.Assists
        });
        res.json(results);
    });
});

// (Part 4.2)
app.post('/addPlayer', function (req, res) {
    if (req.body.Name && req.body.Points
        && req.body.Rebounds && req.body.Assists) {
        let newPlayer = new Player({
            "Name": req.body.Name,
            "Points": parseInt(req.body.Points),
            "Rebounds": parseInt(req.body.Rebounds),
            "Assists": parseInt(req.body.Assists)
        });
        newPlayer.save();
        res.json("success!");
    } else {
        res.status(417).json("One of the field required is empty!");
    }
});
// (Part 5.3)
app.post('/addRoster', function (req, res) {
    if (req.body.Name && req.body.JerseyNumber
        && req.body.Team) {
        let newRoster = new Roster({
            "Name": req.body.Name,
            "JerseyNumber": parseInt(req.body.JerseyNumber),
            "Team": req.body.Team,
        });
        newRoster.save();
        res.json("success!");
    } else {
        res.status(417).json("One of the field required is empty!");
    }
});

// (part 6)
app.get('/:rosterId', function (req, res) {
    let playerJson = {};
    Roster.findOne({_id: req.params.rosterId}, function (error, results) {
        if(results) {
            playerJson.Name = results.Name;
            playerJson.JerseyNumber = results.JerseyNumber;
            playerJson.Team = results.Team;
        }
        Player.findOne({Name: playerJson.Name}, function (error, results) {
            if(results) {
                playerJson.Points = results.Points;
                playerJson.Rebounds = results.Rebounds;
                playerJson.Assists = results.Assists;
            }
            if(playerJson.Name) {
                res.json(playerJson);
            } else {
                res.status(417).json("The specified id does not match any player on the roster!");
            }
        });
    });
});
// (BONUS)
app.delete('/:rosterId', function (req, res) {
    let name = "";
    Roster.findOneAndDelete({_id: req.params.rosterId}, function (error, results) {
        if(results) {
            name = results.Name;
        }
        Player.findOneAndDelete({Name: name}, function (error, results) {
            if(results.Name) {
                res.json("success");
            } else {
                res.status(417).json("The specified id does not match any player on the roster!");
            }
        });
    });
});
// Begin listening on port 3000 (Part 2.1)
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
