// Require express and create an express app (Part 2.1)
const express = require('express')
const app = express();
app.listen(3000);
// Require mongoose (Part 2.2)
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI);
// Require and setup body-parser (Part 4.1)

// Require the Player model (Part 2.3)
const Player = require('./model/player')
// Require the Roster model (Part 5.2)



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
app.get('/', (req, res) => {
  res.send()
})
// (Part 4.2)

// (Part 5.3)

// (BONUS)



// Begin listening on port 3000 (Part 2.1)
