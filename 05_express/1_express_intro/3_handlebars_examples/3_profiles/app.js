var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');

var app = express();
var data = require('./data');

app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// console.log(data);

// YOUR CODE HERE
app.get('/', (req, res) => {
    res.render("index", { data })
});



app.listen(3000);



