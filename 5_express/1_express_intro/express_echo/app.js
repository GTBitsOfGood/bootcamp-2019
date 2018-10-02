// Let's bring express into this file!
var express = require('express');

// Let's create a new express app
var app = express();

// Example route:
// This creates an Express route at http://localhost:3000
app.get('/', function(request, response) {
  response.send('Express is running!')
});

// Create a route that listens to /hello and takes one query parameter
// name and responds with 'Hello there NAME!'
// You can access the query parameter 'name' via request.query.name.

// YOUR CODE HERE

// Start the server listening on port 3000.
app.listen(3000);
