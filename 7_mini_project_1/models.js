"use strict";

// Project model
var mongoose = require('mongoose');

var Project = mongoose.model('Project', {
  title: {
    type: String
  },
  goal: {
    type: Number
  },
  description: {
    type: String,
    required: false
  },
  start: {
    type: Date
  },
  end: {
    type: Date
  },
  // YOUR CODE HERE
  contributions: {
    type: [
      {
        name : {
          type : String
        },
        amount : {
          type : Number
        }
      }
    ]
  }
});

module.exports = {
  Project: Project
}
