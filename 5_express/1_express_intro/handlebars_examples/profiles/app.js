var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');

var app = express();
var data = require('./data');
var male = false;
var female = false;
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// YOUR CODE HERE
app.get('/male', (req, res) => {
	male = true;
	female = false;
	res.render('index', {data, male});
})
app.get('/female', (req, res) => {
	female = true;
	male = false;
	res.render('index', {data, female});
})
app.get('/', (req, res) => {
	female = false;
	male = false;
	res.render('index', { students: data });
})

app.listen(3000);



