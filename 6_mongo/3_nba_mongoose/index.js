// Require express and create an express app (Part 2.1)
var exp = require('express');
// Require mongoose (Part 2.2)
var mongo = require('mongoose');
// Require and setup body-parser (Part 4.1)
var bodyp = require('body-parser')
// Require the Player model (Part 2.3)

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

// (Part 4.2)

// (Part 5.3)

// (BONUS)



// Begin listening on port 3000 (Part 2.1)
