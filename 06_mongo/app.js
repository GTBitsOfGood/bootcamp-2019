const mongoose = require('mongoose');
require('dotenv').config()

// const MONGODB_URI = "mongodb://admin:password1@ds141623.mlab.com:41623/bootcamp-demo"

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true}, function() {
    console.log("We are connected to mlab!");
});

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        enum: ["lab", "poodle"]
    },
    favorite_toy: String,
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
});

const Dog = mongoose.model("Dog", dogSchema);

// const amsh = new Dog({name: "Amsh", favorite_toy: "bone", age: 9});
// amsh.save();
// const sreekar = new Dog({name: "Sreekar", favorite_toy: "ball", age: 8});
// sreekar.save();
// const sanket = new Dog({name: "Sanket", favorite_toy: "bone", age: 5});
// sanket.save();

// Dog.findOne({name: "Amsh"}).then(function(results) {
//     results.age = 10;
//     return results.save(); // Allows to access updated dog.
// }).then(function(updated_dog) {
//     console.log(updated_dog);
// }).catch(function(err) {console.log(err)});

// Dog.findOneAndDelete({name: "Amsh"}).then(_ => {
//     console.log("Amsh is gone!");
//     Dog.find({name: "Amsh"}).then(result => {
//         console.log("Amsh should be gone: ", result)
//     })
// });
