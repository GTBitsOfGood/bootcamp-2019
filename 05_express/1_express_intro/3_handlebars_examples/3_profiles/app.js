var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');

var app = express();
var data = require('./data');
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get("/", (req, res) => {
    let directory = data;
    res.render("index.hbs", {directory});
});

app.get("/male", (req, res) => {
    let directory = data.filter(e => e.gender === "Male");
    res.render("index.hbs", {directory});
});

app.get("/female", (req, res) => {
    let directory = data.filter(e => e.gender === "Female");
    res.render("index.hbs", {directory});
});

// YOUR CODE HERE

app.listen(3000);



