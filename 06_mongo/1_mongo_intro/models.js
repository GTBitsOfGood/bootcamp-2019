"use strict";

const uri = "mongodb://admin:Daisy99#@cluster0-shard-00-00-0q7ol.mongodb.net:27017,cluster0-shard-00-01-0q7ol.mongodb.net:27017,cluster0-shard-00-02-0q7ol.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

require('dotenv').config();

if (! process.env.MONGODB_URI) {
  console.error('MONGODB_URI missing, make sure you run "source env.sh"');
  process.exit(1);
}

const realURI =process.env.MONGODB_URI;
console.log(realURI);

// First let's set up our MongoDb connection
var mongoose = require('mongoose');
mongoose.connect(uri, { useNewUrlParser: true }, () => {
  console.log("Connected");
});

const catSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true  //not able to save if it is not present.
  },
  furColor: String,
  breed: {
    required: false,
    type: String,
    enum: ["Lab", "Poodle"]
  },
  age: {
    type: Number,
    required: false,
    min: 0,
    max: 100
  }
});

const Cat = mongoose.model("Cat", catSchema);
/*
const crookshanks = new Cat({
  name: "Crookshanks",
  furColor: "Black"
});
crookshanks.save();

const mrbigglesworth = new Cat({
  name: "Mr.Bigglesworth",
  furColor: "White"
});
mrbigglesworth.save();

const empurress = new Cat({
  name: "Empurress",
  furColor: "Calico"
});
empurress.save();
*/
/*
Cat.findOne({name: "Mr.Bigglesworth, but better!"}).then(results => {
  results.name = "Mr.Bigglesworth";
  return results.save();
}).then(updated_cat => {
  console.log(updated_cat);
}).catch(err => console.log("An error occurred", err));
*/
Cat.findOneAndDelete({name: "Mr.Bigglesworth"}).then(() => console.log("Mr.Bigglesworth died"));

Cat.find().then(results => {
  console.log(results);
})
.catch(err => console.log(err));

Cat.find({ furColor: 'White'}).then(results => {
  console.log(results);
})
.catch(err => console.log(err));
/*
Cat.find(function(error, cats) {
  if (error) {
    console.log("Can't find cats", error);
  } else {
    console.log('Cats', cats);
  }
});
*/
