# Building Twitter!


Today we will be building a clone of the popular media website Twitter, using your knowledge of MongoDB queries, processing, and performance. Yay!

_Note: Make sure you are committing to github **as much as you can**._ If you do this and something happens with your code, you can always go fetch your old version!

## Table of Contents

- **The Big Picture: Your Models** 🖼  
- **Part 0:** Authentication 🔐  
- **Part 1:** Connecting Users 🙇  
- **Part 2:** Follows and Unfollows! 👫  
- **Part 3:** Get Follows  ⭐  
- **Part 4:** Is Following  
- **Part 5:** Viewing ALL the Profiles 🏃  
- **Part 6:** Tweets   
- **Phase 1 Challenges** 🏆  

## The Big Picture: Your Models 🖼

Twitter is a big project. Refer back to this section if you're ever feeling lost and need to see where this is all going. Below is a reference to all of the models we will be using in this project. More detailed information on their implementations and applications can be found in their respective sections!

Alternatively, you could try structuring the application solely from **The Big Picture**, if you're up for the challenge.

**Users**  

- `User` **Schema properties** - the model for all users of your application (_see **User Models**_)
  - `displayName` - the displayed name for a User when visiting their profile
  - `email` - used for authentication, should not be publicly available
  - `password` - used for authentication, definitely should not be publicly available
  - `bio` - a biography that the user can give to display on their profile
- `User` **Schema methods** - methods that your models will inherit to be called from in your routes
  - `follow(idToFollow, cb)` - create and save a new `Follow` object with `this._id` as the `follower` (see below) and `idToFollow` as `following`
  - `unfollow(idToUnfollow, cb)` - find and delete a `Follow` object (if it exists!)
  - `getFollows(cb)` - return array of followers and users followed as User objects in callback `cb`
  - `getTweets(cb)` - return array of Tweets followed as Tweet objects in callback `cb`
  - `isFollowing(user)` - return whether or not the user calling `isFollowing` is following the User model

**Follows**  

- `Follow` - the model that is used to identify a relationship between a User and another they are following (_see **Follows!**_)
  - `follower` - the ID of the User following another
  - `following` - the ID of the User being followed

**Tweets**  

- `Tweet` **Schema properties** - the model that defines a single review on a Tweet
  - `content` - A String with the contents of the Tweet
  - `author` - the ID of the User who posted/authored the tweet


## Part 0: Authentication 🔐 - `app.js`, `routes/index.js`,  `models/models.js`
👀 **Note:** this is step is partially completed for you! All you must do is fill in passport where it is needed! - _The code will be given, but make sure to read through, familiarize yourself with the authentication flow, and add your MongoDB details!_


Before you start this project, check out the codebase, beginning in **`app.js`** - the entry point of your application.

1. You should begin by setting your authentication to use a `LocalStrategy` with Passport to identify users by an email address and check their password (which is stored as a hash in your MongoDB database). **Remember**: your currently logged-in users are accessible through your Passport-created `req.user` object. Take advantage of that in the Parts that follow!

    <details>
    <summary>Hint</summary>

    ![](https://preview.ibb.co/cg8NJk/Screen_Shot_2017_09_25_at_8_43_17_AM.png)
    ![](https://preview.ibb.co/euymB5/Screen_Shot_2017_09_25_at_8_43_03_AM.png)

    </details>

2. Next, head into **`routes/index.js`**. and **`routes/auth.js`**. You should notice that the Login, Logout and Registration routes have been provided for you. These already handle storing users on the database and storing the sessions using passport and mongo-connect.

Begin by adding authentication details for your MongoDB database (either with the environment variable `MONGODB_URI` or with the file `connect.js`) on mLab and creating an account.

> ⚠️ **Warning**: You will be changing the schema for a user significantly in the next Part (Connecting Users). Remember to dump your existing users from this Part before testing your website in the next.

### Checkpoint  

Now lets try to register a user! We want to make sure that when we register, all of the users credentials are stored in our database. So to move on, we should check the following:
1. We are able to register a user, and that users credentials are saved to the database  
2. We have changed to registration form to include all properties in our model  
3. Logging in with the incorrect crednetials does not allow us in  
4. Logging in with the correct crednetials works  
5. Once logged in, our `req.user` is now defined  

That’s it! There’s nothing else to code in this part - just make sure to get familiar with your code.
Now, get ready to dive in and create more models and properties to build out the rest of Twitter!

## Part 1: Connecting Users 🙇
Now we’ll be adding more properties to our users in our database model to give them followers and tweets. Notice how we are *not* providing you with the typical scaffolding for each route!

Your job is to take the specifications for each model and determine, with your views, how many routes you *have*, what they are *called*, and what they *do*. Take a deep breath; you've got this!

### Step 1: User Models ⛷ - `models/models.js (UserSchema)`

Begin by defining a `Schema` - you'll need to do this in order to create `virtuals` and `statics` for later.


**Tip: you've been creating `Schema`s already!**

This (we shall call method 1):

```javascript
var User = mongoose.model("User", {
  property1: String
});
```
is equivalent to this (method 2):

```javascript
var userSchema = new mongoose.Schema({
   property1: String
})

//STATIC DEFINITIONS SHOULD GO HERE  
//METHOD DEFINITIONS SHOULD GO HERE

var User = mongoose.model("User", userSchema);
```


**We want to use the method 2**, because Schemas allow us to define useful additional properties on top of them, using virtuals, methods, and statics (more about these below). You will be able to define your properties inside of your Schema just like you normally do. When you create your model, just pass in a Schema as the second parameter, like `mongoose.model("User", userSchema)` as demonstrated above.

Here are the properties you definitely want to ***add to you're already exiting*** **Users Schema**.

1. **displayName** (`String`) - could be a first name, last name, nickname, etc.
2. **email** (`String`) - email used for authentication
3. **password** (`String`) - hashed password used for authentication
4. **bio** (`String`) - a biography for a User
5. **imgUrl** (`String`) - a direct link to your profile image

Make sure that all these fields are defined on the `userSchema` before moving on.

### Step 2: Single Profile Page - `views/singleProfile.hbs`

Now that we are logged in, let's make a profile page that will display all of our information, tweets, etc. Design this page however you please, but make sure you have the following:  

1. **Profile picture** - A spot to load your profile image, given the image in your `User` model.
2. **Tweets container** - A container which will hold and display tweets that belong to you _We will be using this later_.
3. **Followers container** - A container which is hold and display the number of people that follow you _We will be using this later_.
4. **Following container** - A container which is hold and display the number of people that *you* follow _We will be using this later_.
5. **Follow Button** - A nonfunctional button which a user will click when they want to follow you. (*Will be implemented later*)  

### Step 3: Adding the Route 🌀 - `routes/index.js`

* Add a route to a single profile page (`singleProfile.hbs`) based on an ID (as a part of the URL, i.e. `/users/575xxxxxxxxx`) - pass in the relevant details of a User and their populated friends list.

### Checkpoint

Now lets try to register a user! We want to make sure that when we register, all of the users credentials are stored in our database. So to move on, we should check the following:  
1. We have updated our register form to include all values in our `User` model  
2. All of our information appears on our `singleProfile.hbs`  

Great! Now let's make `views/singleProfile.hbs` the page we are redirected to after a successful login. Now, let's get all of the correct information to show up on the page. Once we get the user information from mLab, we can move on.  

If you haven't already, make sure you commit your code to github so you don't lose any changes!

## Part 2: Follows and Unfollows! 👫 - `models/models.js (FollowSchema)`

Follows are awesome, but they are also a little complicated. We _could_ choose to add to two arrays of emails representing followers/users following to _each_ User, but that would mean we would have to update two users every time someone was followed. Instead, we'll keep track of each User's relationship with another model - the `Follow`.

### Step 1: Follows Model

Here are the properties you'll want to define for your Follows Model:

1. **follower (User ID 1)** (`type: mongoose.Schema.ObjectId`, `ref: 'User'`) (for this part, order does matter) - the ID of the user that follows the other.
2. **following (User ID 2)** (`type: mongoose.Schema.ObjectId`, `ref: 'User'`) - The ID of the user being followed

(Note that this is the Twitter way of following. One can follow the other without being followed.)

When you add the above lines to your Schema, you are telling mongoose that that field will contain an `_id` corresponding to a document in the `User` collection (called `users` on mLab). The string value of `ref` will indicate the mongoose model that was made using the same string, in this case the result of `mongoose.model('User', userSchema)`

> ⚠️  **Warning:** Careful about creating duplicate follows! You should be only creating a new Follows document if it doesn't already exist - make sure you handle this in your routes below.

### Step 2: Creating User Methods: Follow/Unfollow ☃️ - `models/models.js (UserSchema)`

Next, you want to create a function for each of the `User` models that allows us to get both the users following a user and the users that a user is following.

We will accomplish this by using Mongoose _methods_. The way we write Mongoose methods is like the following:

```javascript
var userSchema = new mongoose.Schema({...});
userSchema.methods.yourMethodName = function() {
  /* define your method before your model here! */
};
```

**Tip**: It is suggested that when writing your own Schema methods that take callbacks you adhere to the same pattern that mongoose's predefined methods/statics (like `save`/`find`) do: that the callback functions take two arguments, the first being an `error` if there was one and the second being the `response` or `result` of the operation. If you need to send back more than one thing as the `result`, you can just wrap them in an object and call the callback with the singular object as its `result`.


- `follow` - should set a following relationship as on Twitter, Instagram, or any site that supports followers.
  - **Note**: `follow` will be an _instance method_ that acts upon a user - it would be defined in the schema as something along the lines of:

  ```javascript
  userSchema.methods.follow = function (idToFollow, callback){...}
  ```
  You should take in a parameter `idToFollow` of the user to follow; now, calling `.follow` on the logged-in user will follow the user given by `idToFollow`! `follow` should also check if you have followed that user already and prevent you from creating duplicate `Follow` documents.

- `unfollow` - deletes the relationship represented by a `Follow` document where User 1 (the caller of the `unfollow` function) follows User 2 (given by a parameter `idToUnfollow`).

### Checkpoint  

We should now tie our follow/unfollow method to our `follow` button implemented on our profile page.  

We want our follow button to work as followed:  
1. If a user is already following another user, the button should read `unfollow` and should unfollow the user if clicked
2. If a user is not  already following another user, the button should read `follow` and should follow the user if clicked
3. On click, the button should toggle to either `follow` or `unfollow`   

We should check in mLab to make sure the `Follows` collection is updating accordingly.

## Part 3: Get Follows  

_Note: Remember that we are using the **Twitter** method for follows (i.e. a user can follow another **without** having them follow them back)_  

We have made it this far! Now that we are able to follow and unfollow users, we want to be able to display this on our profile, more specifically, in the section that we allocated for our followers in part 1. We should now create methods to help us display the people in which we are ***following*** and the users in which ***follow us***.

- `getFollows` - This method will go through and find all `Follow` documents that correspond to both user relationships where the user's ID (accessible by the caller of the function, `this._id`) is the `follower` and where the user is the `following` of a `Follow` relationship. In other words, you want **both the Users the user follows and the Users the user is being followed by** 'returned' by this function. This should call the callback method with the followers and users you are following with something like `allFollowers` and `allFollowing`.

> **Tip:** When creating your methods for `User`, use _callback functions_ to return data. For example, `getFollows` should be _used_ in a future route like:

```javascript
// myUser is an instance of a user. Could be obtained with User.find, for example
myUser.getFollows(function(followers, following) {
  /* do something with the result of the callback function */  
});
```
> To accomplish this, your implementation should take a parameter that represents a callback function that will later be called with the resulting data. See more about this below.


**Tip**: You can refer to the current model that is calling a method using the `this` keyword - a lot like an object and its function prototypes! As always when using `this`, be mindful of binding issues.


  When first retrieving the correct `Follow` documents relevant to a user, your `allFollowers` and `allFollowing` arrays will look something like:

  ```javascript
  allFollowers = [{
    follower: ID_OF_FOLLOWER,
    following: YOUR_USER_ID
  }, {
    follower: ID_OF_FOLLOWER,
    following: YOUR_USER_ID
  }];
  ```

  After using `.populate`, your data will look like this (callback with this populated set!):

  ```javascript
  allFollowers = [{
    follower: {
      _id: ID_OF_FOLLOWER,
      displayName: "Francisco Flores",
      email: "frankie@joinhorizons.com",
    },
    following: YOUR_USER_ID
  }, {
    follower: {
      _id: ID_OF_FOLLOWER,
      displayName: "Graham Smith",
      email: "graham@joinhorizons.com",
    },
    following: YOUR_USER_ID
  }];
  ```

  Notice how the `following` field for `allFollowers` and the `to` field for `allFollowing` for the populated set of data has been transformed from an ID (`ID_OF_FOLLOWER` or `ID_OF_USER_YOU_ARE_FOLLOWING`) to an actual User object. Use Mongoose's [`.populate()`](http://mongoosejs.com/docs/api.html#model_Model.populate) to populate the correct fields and accomplish this.

#### Additional Routes 🌀 - `routes/index.js`
As aforementioned, we are going to leave many of these design decisions up to you - but here's a few routes that you'll _definitely_ need to have.

  * Both `allFollowers` and `allFollowing` mentioned in the example context object above can be retrieved from using your `getFollows` method - remember that the results are passed into a callback! Example:

  ```javascript
  req.user.getFollows(function(err, response) {
    var allFollowers = response.allFollowers;
    var allFollowings = response.allFollowings;

    res.render({
      ...,
      followers: allFollowers,
      followings: allFollowings
    })
  })
  ```
  * Note also that the `isFollowing` property from the example context object above can be retrieved using the `isFollowing` method that you wrote - call it on the user (`PERSON`) being viewed and pass in `req.user` to check whether or not the currently-logged in user follows the profile they are viewing.
* A route to render `profiles.hbs` with all the Users registered on your site.
* Routes to handle a user **following** or **unfollowing** another, and updating that `Follow` relationship accordingly
  * The routes to handle following and unfollowing should check whether or not the relationship exists first using `find`. For example, if User A with ID 1 attempts to follow  User 2 with ID 2 (a user they are already following), a new `Follow` document _should not_ be created, and the response should be "Already followed!"

## Checkpoint  

Great! Once we have this in place before we move on, we should:

- Populate the area in our `singleProfile.hbs` with our result of `getFollows`, to display all of the users who follow us.     Once we have this populated, we can move onto the next step.

## Part 4: Is Following

- `isFollowing` - this method will take in another User ID and call true or false on the callback based on whether or not the user calling `isFollowing` (`this`) is following the user represented by the ID passed in. Query for a `Follow` document where `follower` is `this._id` and `following` is the ID passed in, and call a callback function with `true` if the resulting query turns up an existing `Follow` document.  

Again, when first retrieving the correct `Follow` documents relevant to a user, your `allFollowing` arrays will look something like:  
  ```javascript
  allFollowing = [{
    follower: YOUR_USER_ID,
    following: ID_OF_USER_YOU_ARE_FOLLOWING
  }]
  ```  
After using `.populate`, your data will look like this (callback with this populated set!):

  ```javascript
  allFollowing = [{
    follower: YOUR_USER_ID,
    following: {
      _id: ID_OF_USER_YOU_ARE_FOLLOWING,
      displayName: "Moose Paksoy",
      email: "moose@joinhorizons.com",
    }
  }]
  ```  

## Checkpoint  
This checkpoint will be very similar to the last. To move on, we should:

1. Make sure our `following` container on our `singleProfile.hbs` is populated with the correct data of all users following our profile.

## Part 5: Viewing ALL the Profiles 🏃 - `views/profiles.hbs`

To have a central directory of Users where people can follow others, we will have a template dedicated to displaying all of the Users registered for our site. You want a way to navigate to and from this screen! A good suggestion would be a link to this page from `singleProfile.hbs`, and finally another link going back to `singleProfile.hbs`. The result will look like:

<img src="https://preview.ibb.co/kE64Yk/All_Users.png" width="500">


## Checkpoint

We should be able to follow ourselves, so let's test our button. MongoDB should update accordingly. To unfollow yourself for now, just simply delete the entry manually in mLab.  

Display something that looks like the following:    

<img src="https://preview.ibb.co/gktq65/single_Profile.png" width="500">  

When creating your Single Profile template, imagine that you are passing in the following context object into the template (_you are responsible for actually passing this into your template_ when you `.render` your route in the following sections!):    

 ```javascript    
 {    
   user: {    
     _id: PERSON_BEING_VIEWED,    
     displayName: "Ethan Lee",    
     email: "ethan@joinhorizons.com",   
     bio: "All I know is cats.",  
     imgUrl: "http://fallinpets.com/wp-content/uploads/2016/09/surrender.jpg",    
   },       
   followers: [{  
     from: {  
       _id: USER_FOLLOWING_PERSON,    
       displayName: "Abhi Fitness",    
       email: "abhi@joinhorizons.com",   
       bio: "Oh me? Probably at the gym.",  
       imgUrl: "http://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-funny-cat-pictures-5.jpg",  
     },
     to: PERSON_BEING_VIEWED
   }],
   following: [{
    from: PERSON_BEING_VIEWED,
    to: {
      _id: PERSON_FOLLOWING_USER,
      displayName: "Josh",
      email: "josh@joinhorizons.com",
      bio: "Hey I'm Josh.",  
      imgUrl: "https://i.ytimg.com/vi/geqVuYmo8Y0/hqdefault.jpg",  
    }
  }],
  isFollowing: true
 }    
 ```
Above, `PERSON` refers to the User profile being rendered currently - this could be your currently logged-in user _or_ any other User on your site!  

If you haven't already, make sure you commit your code to github so you don't lose any changes!

## Halfway Done🏅- `http://localhost:3000`
Time to step back and take a look at your hard work!

Now, you should be able to login, view profile pages, view other profiles, and follow other users.

Hooray! You've just built the fundamentals of a social network! Now it's time to take those users and associate more data with them in the form of tweets.  

If you haven't already, make sure you commit your code to github so you don't lose any changes!


## Part 6: Tweets  
### Step 1: Tweet Model 🍔 - `models/models.js (TweetSchema)`

To start off the basics of the Tweets model, let's create some fundamental properties for _what make a tweet a tweet_. The ones we thought of are as follows:

- **user** (`type: mongoose.Schema.ObjectId`, `ref: 'User'`) - The user who posted/is the author of the tweet
- **content** (`String`) - The content of the tweet.
    - Should limit this field to be a maximum of 140 characters
    <details>
    <summary>Hint</summary>

    [See Mongoose maxlength to do this properly](http://mongoosejs.com/docs/api.html#schema_string_SchemaString-maxlength)

    </details>


That's all for Tweets for now!

### Step 2: Creating Tweets 💛 - `views/newTweet.hbs`
Create a basic form for creating a new tweet with all of its basic information. You should link this form to your profile, so you can easily create a new tweet while on your `singleProfile.hbs` page. Your form should take each of the following inputs:

* The content of the tweet
    <details>
    <summary>Hint</summary>

    You should make sure the user DOES NOT enter more than 140 characters per tweet (Twitter has this limitation, so we should as well!)

    </details>


The end result should look something like:

<img src="https://preview.ibb.co/ch9xm5/newTweet.png" width="500">  

### Adding the Routes 🌀 - `routes/index.js`

Looks like your views and models for Tweets are ready to go! Time to build out your endpoints to render routes with your data. As before, you will be making the design decisions for your routes, but here are basic guidelines for what they should _do_:

* A route for viewing all tweets, rendering `tweets.hbs`.
  * _What to Pass In_: A context object with a property `tweet` that has an array of all Tweet documents.
  * Go the extra mile and implement paging for tweets!

## Checkpoint  

This is a much simpler checkpoint, but is here just to get you used to sanity checking all of your work!! Before you move on, you should make sure that:
- Your submitted tweets appear in your mLab.  

That's it! If you see your tweet you can move on!


## Step 3: Creating User Methods for Tweets 🍃 - `models/models.js (UserSchema)`
The single method you will be creating for your User to fetch tweets will also use a callback to return its results. Likewise, make sure that when you call this in your routes, you are passing in a callback function to define _what happens_ when you get those results back.

- `getTweets` - This method will query the Tweet documents for all tweets with the same User ID as the user calling `getTweets`, which you can identify by the `this` keyword. For this `getTweets`, you will `.populate` the Tweet ID instead!

Remember that because our methods rely on asynchronous calls (namely, database queries such as `find`), we must take in a callback function for these methods to get the result of the function! For example, using the `getTweets` function in our routes will look _something_ like:

```javascript
User.findById(req.params.id, function(err, user1) {
  user1.getTweets(function(tweets) {
    res.render('singleProfile', {
      user: user,
      tweets: tweets
    });
  });
});
```

### Step 4: Browsing your feed 🍻 - `views/feed.hbs`

When viewing all tweets, you should be able to see basic information; content and author are all important here. Don't worry about sorting, searching, or filtering for now.  _Make sure you add links on your feed so that you will be able to navigate to and from your profile and to your twitter feed._  

_Remember_: Your feed should be made up of all tweets authored by users that ***YOU*** follow!


> ⚠️  **Warning:** You may have called these fields by different property names! Make sure that your Handlebars templates `{{placeholders}}` match those that you defined in your models previously. Make sure you update your `singleProfile.hbs` so that your tweets will populate your tweets container!

The end result will look something like the following:

<img src="https://preview.ibb.co/eZqsKQ/feed.png" width="500">


### Adding the Routes 🌀 - `routes/index.js`

Looks like your views and models for your feed is ready to go. Time to build out your endpoints to render routes with your data. As before, you will be making the design decisions for your routes, but here are basic guidelines for what they should _do_:

* A route for creating new tweet, rendering `newTweet.hbs`
  * You'll need to have a `POST` route to handle the form from `newTweet.hbs` as well, so that you can save the new Tweet document with the data received in `req.body`.

## Twitter: DONE! ⭐  
Congrats! You have finished Twitter! You have successfully implemented most of the basic functionality that twitter uses! Make sure you commit your code to github, if you haven't already.  

Hungry for more? Check out the below challenges!

## Twitter Challenge 🏆
You've made it this far, and early. Why not a challenge?  

These challenges will be a bit more open ended, and you will be free to implement them however you want!  

1. Retweets
    <details>
    <summary>Hint</summary>

    You should add another key to our Tweet model. How could we make sure these retweets display on a singleProfile of a user who does not own them?

    </details>  
2. Filter tweets  
    - Based on user, date posted, etc.
3. Enable mentions
   <details>
   <summary>Hint</summary>
   Extract usernames with the '@' symbol in front in tweets. Maybe add another key to your tweets model, which has a list of all users mentioned in the tweet.
   </details>
