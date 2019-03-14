"use strict";

if (! process.env.MONGODB_URI) {
  console.error('MONGODB_URI missing, make sure you run "source env.sh"');
  process.exit(1);
}

// First let's set up our MongoDb connection
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const catSchema = new mongoose.Schema({
  name: String,
  furColor: String
});

const Cat = mongoose.model("Cat", catSchema);

const crookshanks = new Cat({ name: "Crookshanks", furColor: "black" })
crookshanks.save();

const bigglesworth = new Cat({ name: "Mr. Bigglesworth", furColor: "white" })
bigglesworth.save();

const empurress = new Cat({ name: "Empurress", furColor: "calico" })
empurress.save();
//crookshanks.save((err, result) => {
Cat.find(function(error, cats) {
  if (error) {
    console.log("Can't find cats", error);
  } else {
    console.log('Cats', cats);
  }
});
//});

//crookshanks.save().then(_ => Cat.find()) //returns cat.find
//.then((allMyCats) => console.log(allMyCats)) //can simplify to just .then(console.log)
//.catch(err => console.log(err)); //can also .catch(console.log)

//function crossreferenceWithCache() {}
//.then(crossreferenceWithCache)

//function ayncFreind() {
  //return new Promise((resolve, reject) => {
    //does async stuff

    //const err;
    //if (err) {
      //reject(err)
    //}
    //const result;
    //resolve(result);
  //});
  //starts a timer
//}
