var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  Name:{
    type: String,
    required: true
  },
  JerseyNumber:{
    type: Number,
    required: false
  },
  Team: {
    type: String
    required: true
  }
});

module.exports =  mongoose.model('Player', PlayerSchema)
