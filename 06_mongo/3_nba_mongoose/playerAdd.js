require("dotenv").config();
// importing playerStats.json from source folder
const playerStats = require("./model/source/playerStats.json");

// mongoose configuration
const mongoose = require("mongoose");
const Player = require("./model/player");
const fs = require("fs");

if (!process.env.MONGODB_URI) {
  throw new Error(
    "MONGODB_URI is not in the environmental variables. Try running 'source env.sh'"
  );
}
mongoose.connection.on("connected", () => {
  console.log("Success: connected to MongoDb!");
});
mongoose.connection.on("error", () => {
  console.log("Error connecting to MongoDb. Check MONGODB_URI in env.sh");
  process.exit(1);
});

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

// loop through playerStats.json and add each player and their stats to mlab
playerStats.forEach((player, i, arr) => {
  const newPlayer = new Player({
    Name: player.Name,
    Points: player.Points,
    Rebounds: player.Rebounds,
    Assists: player.Assists
  });

  newPlayer.save(err => {
    if (err) {
      console.log("error", err);
    }
    if (i === arr.length - 1) {
      // close mongoose connection
      console.log("Added 5 Players");
      mongoose.connection.close();
    }
  });
});
