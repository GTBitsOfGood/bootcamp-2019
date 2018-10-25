"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
  name: String,
  gender: String,
  owner: {
    type:Schema.ObjectId,
    ref:'User'
  }
});

var Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
