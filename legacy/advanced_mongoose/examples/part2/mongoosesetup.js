"use strict";

var mongoose = require('mongoose');
var User = require('./user');
var Pet = require('./pet');

if (! process.env.MONGODB_URI) {
  console.log('MONGODB_URI config variable is missing. Try running "source env.sh"');
  process.exit(1);
}

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', console.error);

Pet.find().limit(1).exec(function(err, dbPets) {
  if (! dbPets.length) {
    var pets = require('./pets.json').map(function(pet) {
      return new Pet(pet);
    });
    Pet.insertMany(pets, function(err) {
      if (err) {
        console.log('Error populating data in MongoDB', err);
      } else {
        console.log('MongoDB Pets initialized successfully.');
      }
    });
  }
});

User.find().limit(1).exec(function(err, dbUsers) {
  // Only insert into DB if there are no users yet
  if (! dbUsers.length) {
    var users = require('./users.json').map(function(user) {
      return new User(user);
    });
    User.insertMany(users, function(err) {
      if (err) {
        console.log('Error populating data in MongoDB', err);
      } else {
        console.log('MongoDB Users initialized successfully.');
      }
    });
  }
});
