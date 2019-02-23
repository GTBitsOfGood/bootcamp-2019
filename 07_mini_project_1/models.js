"use strict";

// Import Mongoose
const mongoose = require("mongoose");

// Project model
const cont = mongoose.Schema({
  name: {
    type: String,
        required: true
  },
  amount: {
    type: Number,
        required: true
  }
});
const Project = mongoose.model("Project", {
  title: {
    type: String,
    required: true
  },
  goal: {
    type: Number,
    required: true
  },
  description: {
    type: String,
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  contributions: [cont],
  category: {
    type: String,
    enum: ['Famous Muppet Frogs',
      'The Pen Is Mightier',
      'Famous Mothers',
      'Drummers Named Ringo',
      '1-Letter Words',
      'Months That Start With "Feb"',
      'How Many Fingers Am I Holding Up',
      'Potent Potables'
    ]
  }

});

module.exports = {
  Project
};
