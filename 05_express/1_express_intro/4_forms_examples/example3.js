var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var bodyParser = require("body-parser");
var accounts = require('./accounts');

var app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// view engine setup
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('example3');
});

app.post("/login", (req,res) => {
  let name;
  accounts.forEach(function(e) {
    if (req.body.username === e.email && req.body.password === e.password){
      name = e.first_name;
    }
  });
    res.render("greet_me", {
        name: name //this body attribute looks through the body of the post request and attatches it
    });
});

// start the express app
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express started. Listening on port %s', port);

module.exports = app;
