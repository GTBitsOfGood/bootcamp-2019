"use strict";

// Import Mongoose
const mongoose = require("mongoose");

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
  description: String,
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  contributions: Array
});

module.exports = {
  Project
};
