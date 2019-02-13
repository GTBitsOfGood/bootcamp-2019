"use strict";

if (! process.env.MONGODB_URI) {
  console.error('MONGODB_URI missing, make sure you run "source env.sh"');
  process.exit(1);
}

// First let's set up our MongoDb connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const Cat = mongoose.model("Catto", new mongoose.Schema({
  name: String,
  furColor: String
})); // YOUR CODE HERE - define the cat model

Cat.find((error, cats) => {
  if (error) {
    console.log("Can't find cats", error);
  } else {
    console.log('Cats', cats);
  }
});

const Crookshanks = new Cat({
  name: "Crookshanks",
  color: "Black"
});
Crookshanks.save();

const Bigglesworth = new Cat({
  name: "Mr. Bigglesworth",
  color: "White"
});
Bigglesworth.save();

const Empurress = new Cat({
  name: "Empurress",
  color: "Calico"
});
Empurress.save();

console.log(Cat.findOne({name: "Mr. Bigglesworth"}));

