"use strict";

if (! process.env.MONGODB_URI) {
  console.error('MONGODB_URI missing, make sure you run "source env.sh"');
  process.exit(1);
}

// First let's set up our MongoDb connection
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

let catSchema = new mongoose.Schema({
    name: String,
    furColor: String
});
let Cat = mongoose.model("Cat", catSchema); // YOUR CODE HERE - define the cat model
const crookshanks = Cat({name: "Crookshanks", furColor: "Black"});
crookshanks.save();

let mrBigglesWorth = Cat({name: "Mr. BigglesWorth", furColor: "White"});
mrBigglesWorth.save();

let empurress = Cat({name: "Empurress", furColor: "Calico"});
empurress.save();


Cat.findOne({name: "Crookshanks"})
.then(results=>{
    console.log(results);
})
.catch(err=> {
    console.log("Error:", err);
});

