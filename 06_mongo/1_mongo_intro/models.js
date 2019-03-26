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
});

const bookSchema = new mongoose.Schema({
  name: String
})
const Cat = mongoose.model("Cat", catSchema);
const Book = mongoose.model("Books", bookSchema);

const legend = new Book({name: "Legend"});
legend.save();

const crookshanks = new Cat({name: "Crookshanks", furColor: "black"});
crookshanks.save();
const bigglesworth = new Cat({name: "Mr. Bigglesworth", furColor: "White"});
bigglesworth.save();
const empurress = new Cat({name: "Empuress", furColor: "Calico"});
empurress.save();

Cat.findOne({name:"Mr. Bigglesworth"}).then(results => {
  console.log(results);
}).catch(err => console.log(err));

let Model = mongoose.model('Model', {name: String});
Model.find({name: "Jiggy"}, function(error, m) {});

Cat.find((error, cats) => {
  if (error) {
    console.log("Can't find cats", error);
  } else {
    console.log('Cats', cats);
  }
});
