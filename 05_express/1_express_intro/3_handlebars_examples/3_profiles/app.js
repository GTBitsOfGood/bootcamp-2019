var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var app = express();
var data = require('./data');
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get("/" , (req,res) => {
    res.render("index", {data});
});

app.get("/female" , (req,res) => {
    let isFemale = (data.gender == 'female' ? true : false);
    res.render("index", {data, isFemale });
});

app.get("/male" , (req,res) => {
    let isMale = (data.gender == 'male' ? true : false);
    res.render("index", {data, isMale});
});

// YOUR CODE HERE

app.listen(3000);



