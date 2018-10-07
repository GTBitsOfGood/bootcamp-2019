"use strict";

var path = require('path');
var express = require('express');
var exphbs  = require('express-handlebars');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect(require('./connect'));

var app = express();

app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

var Restaurant = mongoose.model('Restaurant', {
  // YOUR MODEL HERE
});

app.get('/', function(req, res) {
  Restaurant.find(function(err, restaurants) {
    res.render('index', {
      restaurants: restaurants
    });
  });
});

app.get('/import/restaurants', function(req, res) {
  var r = new Restaurant(require('./menu.json'));
  r.save(function(err) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.redirect('/');
    }
  });
});

app.listen(3000);
