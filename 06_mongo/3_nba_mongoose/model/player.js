var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  Name:{
    type: String,
    required: true
  },
  Points:{
    type: Number,
    required: true
  },
  Rebounds:{
    type: Number,
    required: true
  },
  Assists:{
    type: Number,
    required: true
  }
});

module.exports =  mongoose.model('Player', PlayerSchema)
