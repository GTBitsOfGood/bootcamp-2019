const mongoose = require('mongoose')
// const uri = "mongodb+srv://admin:admin123@cluster0-ivpoq.mongodb.net/test?retryWrites=true"
const uri = "mongodb://admin:admin123@cluster0-shard-00-00-ivpoq.mongodb.net:27017,cluster0-shard-00-01-ivpoq.mongodb.net:27017,cluster0-shard-00-02-ivpoq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
mongoose.connect(uri).then(_ => console.log("Success")).catch(console.log)


var Project = mongoose.model('Project', {
  title: {
    type: String,
  }
  // YOUR CODE HERE
});


var project = new Project({
    title: 'I am a test project'
  });

project.save(function(err) {
if (err) {
  console.log(err)
  // res.status(500).json(err);
} else {
  console.log('Success: created a Project object in MongoDb');
}
});