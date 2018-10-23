var mongoose = require('mongoose');

// Step 0: Remember to add your MongoDB information in one of the following ways!
if (! process.env.MONGODB_URI) {
  console.log('Error: MONGODB_URI is not set. Did you run source env.sh ?');
  process.exit(1);
}

var connect = process.env.MONGODB_URI;
mongoose.connect(connect);

var userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    default: 'https://horizons-static.s3.amazonaws.com/horizons_h.png'
  },
  displayName: {
    type: String,
  },
  bio: {
    type: String,
  }
  /* Add other fields here */
});

userSchema.methods.getFollows = function (callback){

}
userSchema.methods.follow = function (idToFollow, callback){

}

userSchema.methods.unfollow = function (idToUnfollow, callback){

}
userSchema.methods.getTweets = function (callback){

}

var FollowsSchema = mongoose.Schema({

});


var tweetSchema = mongoose.Schema({

});

tweetSchema.methods.numLikes = function (tweetId, callback){

}


var User = mongoose.model('User', userSchema);
var Tweet = mongoose.model('Tweet', tweetSchema);
var Follow = mongoose.model('Follow', FollowsSchema);

module.exports = {
  User: User,
  Tweet: Tweet,
  Follow: Follow
};
