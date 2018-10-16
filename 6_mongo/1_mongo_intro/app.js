const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://admin:password1@ds123173.mlab.com:23173/bootcamp-demo'

mongoose.connect(MONGODB_URI, () => {
	console.log("We are connected to mongo db URI");
});

const dogSchema = new mongoose.Schema( {
	name: String,
	favorite_toy: String,
	age: Number
}); //defines structure of data

const Dog = mongoose.model("Dog", dogSchema);

const freddy = new Dog({name: "Freddy", favorite_toy: "bone", age: 2});
freddy.save();

const spots = new Dog({name: "Spots", favorite_toy: "bone", age: 1});
spots.save();

const ralph = new Dog({name: "Ralph", favorite_toy: "ball", age: 1});
ralph.save();

Dog.findOne({name: "Freddy"})
.then(results => {
	results.age = 3;
	return results.save();
}).then(updated_dog => {
	console.log(updated_dog);
})
.catch(err => console.log("This is an error"));

Dog.findOneAndDelete({name: "Freddy"})
.then(_ => {
	console.log("Freddy is gone from the database");
	Dog.find({name: "Freddy"}).then(result => console.log("Freddy should be gone", result))
});

