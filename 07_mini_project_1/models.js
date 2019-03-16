"use strict";

// Project model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


let ContSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    }

});

var Project = mongoose.model('Project', {
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

  contributions: [ContSchema],
  category: {
    type: String,
    required: true,
    enum: ['Famous Muppet Frogs', 'The Pen is Mighterier', 'Famous Mothers',
    'Drummers Named Ringo', '1-Letter Words', 'Months That Start With Feb',
    'How Many Fingers Am I Holding Up', 'Potent Potables']
  }
});

module.exports = {
  Project: Project
}
