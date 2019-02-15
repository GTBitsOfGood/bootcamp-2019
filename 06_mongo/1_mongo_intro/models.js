"use strict";

/*if (! process.env.MONGODB_URI) {
  console.error('MONGODB_URI missing, make sure you run "source env.sh"');
  process.exit(1);
}*/

// First let's set up our MongoDb connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true}, () => {
    console.log("We are connected.");
});
//mongoose.connect(process.env.MONGODB_URI);
const dogSchema = new mongoose.Schema({
    name: String,
    favorite_toy: String,
    age: Number
});

const Dog = mongoose.model("Dog", dogSchema);

/*const freddy = new Dog({name: "freddy", favorite_toy: "Bone", age: 2})
const spots = new Dog({name: "Spots", favorite_toy: "Bone", age: 1})
const ralph = new Dog({name: "Ralph", favorite_toy: "Ball", age: 1})
ralph.save();
freddy.save();
spots.save();*/
/*Dog.findOne({favorite_toy: "Bone"}).then(results => {
    console.log(results);
}).catch(err => console.log(err));*/

/*const Cat = mongoose.model("Cat", catSchema);

Cat.find((error, cats) => {
  if (error) {
    console.log("Can't find cats", error);
  } else {
    console.log('Cats', cats);
  }
});*/
