"use strict";

var express = require('express');

// Express setup
var app = express();

var exphbs = require('express-handlebars');
var hbs = require('./helpers');

app.engine('.hbs', exphbs(hbs));
app.set('view engine', '.hbs');

// mongoose setup
require('./mongoosesetup');
var User = require('./user');
var Pet = require('./pet');

//-------------------EDIT ONLY BELOW THIS LINE!----------------------//
app.get('/pets', function(req,res,next) {
  Pet.find(function(err, pets){
    res.render('pets', {
      pets: pets
    });
  });
});

app.get('/', function(req, res, next) {
  User.find().sort({"name.first":"asc"}).exec(function(err,users){
    res.render('index', {
      users: users
    });
  });
});

app.get('/toggle', function(req, res) {
  User.findById('59273a8890347f4a60741005', function(err, user) {
    if (! user) {
      res.status(404).send('Not found');
    } else {
      user.toggleGender();
      user.save(function(err) {
        res.render('index', {
          users: [user]
        });
      });
    }
  });
});

app.get('/users/:name', function(req, res, next) {
  if (! req.params.name) {
    res.status(400).json({
      error: 'Missing name parameter'
    });
  } else {
    User.findByName(req.params.name, function(err, users) {
      res.render('index', {
        users: users
      });
    });
  }
});

//-------------------EDIT ONLY ABOVE THIS LINE!----------------------//



var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('listening on port ' + port);
});
