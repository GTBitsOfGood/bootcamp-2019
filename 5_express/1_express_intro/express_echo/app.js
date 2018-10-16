// Let's bring express into this file!
var express = require('express');

var handlebars = require('express-handlebars');
// Let's create a new express app
var app = express();


app.engine("hbs", handlebars({
	extname: ".hbs"
})
);

app.set("view engine", "hbs");
// Example route:
// This creates an Express route at http://localhost:3000
app.get('/', (req, res) => {
	//res.status(201).send("Welcome to Express!");
	res.render("first_template");
})
app.get('/greet', (request, response) => {
	//let name = request.query.name || "stranger";
	response.render("greet_me", {
		users_name: request.query.name
	});
  //response.send(`<h1>Welcome ${request.query.name || "stranger"}</h1>`)
});
app.get('/:error', (req, res) => {
	res.render("error", {
		error_name: req.params.error
	})
})
app.get('/status/:code', (req, res) => {
	res.sendStatus(req.params.code);
})

app.get('/test/:param1/:param2', (req, res) => {
	res.send(`Welcome ${req.params.param1}, hope you had a good ${req.params.param2}`);
})
app.get('/*', (req,res) => {
	res.status(404).send("404 NOT FOUND");
})
// Create a route that listens to /hello and takes one query parameter
// name and responds with 'Hello there NAME!'
// You can access the query parameter 'name' via request.query.name.

// YOUR CODE HERE

// Start the server listening on port 3000.
app.listen(3000);
// const express = require('express');
// const app = express();
// app.get('/', (request, response) => {
//   response.send('Express is running!')
// });
// app.get('/second', (req, res) => {
// 	res.send("Bits of Good Rocks!");
// })
app.post('/second', (req, res) => {
	res.send("post request babeh!");
})
// app.use('/any', (req, res) => {
// 	res.send("Got a request, dunno what type");
// })
// app.listen(3000);

// console.log("Server is running");
