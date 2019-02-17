"use strict";

if (! process.env.MONGODB_URI) {
  console.error('MONGODB_URI missing, make sure you run "source env.sh"');
  process.exit(1);
}

// First let's set up our MongoDb connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true});

const catSchema = new mongoose.Schema({
    name: String,
    fur_color: String
});

const Cat = mongoose.model("Cat", catSchema);
// YOUR CODE HERE - define the cat model

//Name: Crookshanks Color: Black
// Name: Mr. Bigglesworth Color: White
// Name: Empurress Color: Calico
const crookshanks = new Cat({name: "Crookshanks", fur_color: "Black"});
crookshanks.save();
const mrbigglesworh = new Cat({name: "Mr. Bigglesworth", fur_color: "White"});
mrbigglesworh.save();
const empurress = new Cat({name: "Empurress", fur_color: "Calico"});
empurress.save();

Cat.findOne({ name: "Mr. Bigglesworth"}).then(results => {
    console.log(results);
})
    .catch(err => console.log(err));

Cat.find((error, cats) => {
  if (error) {
    console.log("Can't find cats", error);
  } else {
    console.log('Cats', cats);
  }
});
