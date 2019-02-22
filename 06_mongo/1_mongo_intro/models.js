"use strict";

if (!process.env.MONGODB_URI) {
  console.error('MONGODB_URI missing, make sure you run "source env.sh"');
  process.exit(1);
}

// First let's set up our MongoDb connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const Project = mongoose.model("Project", new mongoose.Schema({
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
  }
}))

Project.find((error, projects) => {
  if (error) {
    console.log("Can't find projects", error);
  } else {
    console.log('Projects', cats);
  }
});