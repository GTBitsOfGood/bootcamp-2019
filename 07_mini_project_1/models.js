"use strict";

// Import Mongoose
const mongoose = require("mongoose");

const contribution = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

// Project model
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
    type: String
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  total_contributions: {
    type: Number,
    default: 0
  },
  percent: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    enum: ['Famous Muppet Frogs', 'The Pen Is Mightier', 'Famous Mothers', 'Drummers Named Ringo',
    '1-Letter Words', "Months That Start With Feb", "How Many Fingers Am I Holding Up", 'Potent Potables'],
    required: true
  },
  contributions: [contribution]
});


module.exports = {
  Project
};
