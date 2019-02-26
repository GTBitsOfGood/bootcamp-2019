"use strict";

if (! process.env.MONGODB_URI) {
  console.error('MONGODB_URI missing, make sure you run "source env.sh"');
  process.exit(1);
}

// First let's set up our MongoDb connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const CatSchema = new mongoose.Schema({
  name: String,
  furColor: String
});

const Cat = mongoose.model("Cats", CatSchema);

//const crookshanks = new Cat({name: "Crookshanks", furColor: "Black"});
//const mrBigglesworth = new Cat({name: "Mr. Bigglesworth", furColor: "White"});
//const empurress = new Cat({name: "Empurress", furColor: "Calico"});
//crookshanks.save();
//mrBigglesworth.save();
//empurress.save();

Cat.findOne({name: "Mr. Bigglesworth"}).then(results =>
console.log(results));

Cat.find(function(error, cats) {
  if (error) {
    console.log("Can't find cats", error);
  } else {
    console.log('Cats', cats);
  }
});
