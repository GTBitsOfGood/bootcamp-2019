"use strict";

if (! process.env.MONGODB_URI) {
  console.error('MONGODB_URI missing, make sure you run "source env.sh"');
  process.exit(1);
}

// First let's set up our MongoDb connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const catSchema = new mongoose.Schema({
  name: String,
  furColor: String
}); // YOUR CODE HERE - define the cat model

const Cat = mongoose.model("Cat", catSchema);

// const crookshanks = new Cat({name: "Crookshanks", furColor: "Black"});
// crookshanks.save();
// const mrB = new Cat({name: "Mr. Bigglesworth", furColor: "White"});
// mrB.save();
// const emp = new Cat({name: "Empurress", furColor: "Calico"});
// emp.save();

Cat.find().then(results => {
  console.log(results);
}).catch(err => console.log(err));

Cat.findOne({name: "Mr. Bigglesworth"})
.then(results => {
  console.log(results);
})
.catch(err => console.log(err));
