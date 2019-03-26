const mongoose = require('mongoose')
require("dotenv").config();
//const mongoDB_URL = 'mongodb+srv://admin:Florida1972@cluster0-uolf6.mongodb.net/test?retryWrites=true'
mongoose.connect(process.env.MONGODB_URI, {useNewURLParser: true }, () => {
    console.log('You are connected to MongoDB 123');
})
// mongoose.connect(mongoDB_URI, {useNewURLParser: true }, () => {
//     console.log('You are connected to MongoDB 123');
// })
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
const freddy = new Dog({
    name: "Freddy",
    favorite_toy: "Bone",
    age: 5,
    breed: "lab"
});
// const freddy = new Dog({name: "Freddy", favorite_toy: "Bone", age: 2});
freddy.save().then(result => console.log("Result: ", result)).catch(err => console.log("error: ", err));
// freddy.save().then(_ => console.log("success")).catch(err => console.log("Error", err))
// const spots = new Dog({name: "Spots", favorite_toy: "Ball", age: 3});
// spots.save();
// const ralph = new Dog({name: "Ralph", favorite_toy: "Pillow", age: 1});
// ralph.save();
//console.log(freddy);
// Dog.findOne({name: "Freddy"})
// .then(results => {
//     results.age = 1;
//     return results.save();
// }).then(updated_dog => {
//     console.log(updated_dog);
// })
//  .catch(err => console.log(err));


Dog.findOneAndDelete({name: "Freddy"}).then(_ => {
    console.log("Freddy is gone from the database");
    Dog.find({name: "Freddy"}).then(result =>
        console.log("Freddy should be gone: ", result)
        );``
})