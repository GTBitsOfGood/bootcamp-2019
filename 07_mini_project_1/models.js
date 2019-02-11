"use strict";

// Import Mongoose
const mongoose = require("mongoose");

// Project model
const Project = mongoose.model("Project", {
  title: {
    type: String
  }
  // YOUR CODE HERE
});

module.exports = {
  Project
};
