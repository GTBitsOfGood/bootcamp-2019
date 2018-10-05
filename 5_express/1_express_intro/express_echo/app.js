// Let's bring express into this file!
var express = require('express');
const handlebars = require('express-handlebars');
// Let's create a new express app
var app = express();


app.engine("hbs",
handlebars({
  extname: ".hbs"
}
)
)

app.set("view engine","hbs")
// Example route:
// This creates an Express route at http://localhost:3000
app.get('/', function(request, response) {
  response.render('template')
});

app.get('/status/:code',(req,res)=>{
  res.sendStatus(req.params.code)
})
// app.get("/greet/:name",(req,res)=>{
//   res.status().send(`Welcome ${req.params.name}`)
// })

app.get('/hello',(req,res)=>{
  const name = req.query.name
  res.render('greet_me',
  {users_name: name})
})

// Create a route that listens to /hello and takes one query parameter
// name and responds with 'Hello there NAME!'
// You can access the query parameter 'name' via request.query.name.

// YOUR CODE HERE

// Start the server listening on port 3000.
app.listen(3000);

console.log("Server is running")

