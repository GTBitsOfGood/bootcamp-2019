"use strict";

// Project model
var mongoose = require('mongoose');

var Project = mongoose.model('Project', {
  title: {
    type: String,
  }
  // YOUR CODE HERE
});

module.exports = {
  Project: Project
}
