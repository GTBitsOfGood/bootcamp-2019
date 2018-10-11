"use strict";
require('dotenv').config();
if (! process.env.MONGODB_URI) {
  console.error('MONGODB_URI missing, make sure you run "source env.sh"');
  process.exit(1);
}

// First let's set up our MongoDb connection
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true})

var Cat; // YOUR CODE HERE - define the cat model
const catSchema = new mongoose.Schema({
  name: {
    type:String,
    lowercase: true
  },
  furColor: String
})
Cat = mongoose.model("Cat",catSchema)
let crookshanks = new Cat({name:"Crookshanks", furColor:"Black"})
let bigglesworth = new Cat({name:"Mr Bigglesworth", furColor:"White"})
let empuress = new Cat({name:"Empurress",furColor:"Calico"})
crookshanks.save()
bigglesworth.save()
empuress.save()
Cat.find(function(error, cats) {
  if (error) {
    console.log("Can't find cats", error);
  } else {
    console.log('Cats', cats);
  }
});
