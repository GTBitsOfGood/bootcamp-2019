# W4D1 | Individual | Passport-Form

Up until now, you've been creating applications that stores users and does very
simple authentication. Now you're going to learn how to use
[Passport](http://passportjs.org) to make authenticating and verifying your user
much easier.

## Goal

In this exercise, you're going to be creating a simple app that does only a few 
key things:

+ lets users register
+ lets users login
+ lets users logout
+ lets **logged in** users view a special page


## Instructions

1. Install dependencies

  In this exercise, we're going to be using **Express** as our web framework,
  **Mongoose** for handling our data storage and modeling, **Handlebars** as our
  templating engine, and **Passport** as our authentication middleware. There
  are a few other dependencies here and there and you can check them out in the
  `package.json`, but those are the major technologies at play here.
  
  You can install them like always by running:
  
  ```bash
  $ npm install
  ```
  
  Remember to fill in your **mLab** url in `models/connect.js`!

1. The registration flow

  In this phase, you will:
  
  1. Make a `GET` route that renders the `register` template.
  1. Create a registration form in the registration template.
  1. Create a `User` model (w or w/o schema) in the models.js
  1. Make a `POST` route that saves a user model 

  First things first, we're going to work on the registration flow. A **flow**
  can be characterized as a *process* or *method* that performs a certain
  action. A **flow** can be a single page or screen that registers users, in our
  case, or a set of them, like for Robinhood or Facebook.
  
  First, Add a route in `auth.js` to access this page from `/register` when a
  your server receives a `GET` request. You should render the
  `views/register.hbs` template in the views folder when handling that GET
  request.
  
  In `register.hbs`, you'll be making a simple registration form that has three
  fields: **username**, **password** and **password repeat**.
  
  **Bootstrap** has already been included in your `/public/css/` folder for
  convenience, but it has ***not*** been linked to your `views/layout.hbs`
  file. If you'd like to use it, please insert the necessary `<link>` tag into
  that file.
  
  After you've created your page, let's make the registration page functional.
  
  First, create a simple `User` model in `models/models.js`. The user should
  only have two properties - a username and a password. Once you've completed
  that, remember to export them using `module.exports`.
  
  Next, create a `POST` route for `/register` in `auth.js`. The route should do
  simple validation on the fields that have been submitted (checking to see if
  the passwords are the same) and, if so, should create a new user with the
  info, save it to the DB, and redirect the user to a `/login` (which we haven't
  done yet, but will do soon!). Otherwise, it should re-render the page, showing
  an error message.

1. The login and logout flow

  In this phase, you will:
  
  1. Create a login template in `views/login.hbs`
  1. Create a `GET` route for `/login` in `routes/auth.js` that renders the 
  `login` template
  1. Create a `POST` route for `/login` that will log the user in if the 
  credentials are correct
  1. Create a `GET` route for `/logout` that will log the user out and redirect 
  to the `/login` route
  
  First, create the login template in `views/login.hbs`. It should only have
  two fields - a **username** and **password** field.
  
  Next, we're going to be adding the ***key*** routes to our `routes/auth.js`
  file that will allow users that have previously registered to login. Implement
  the `GET` route for `/login`, which should render the login template.
  
  Once you've done that, we'll be creating the `POST` route for `/login`. Here
  is where we'll use passport to authenticate the user using something called an
  ***authentication strategy*** (which you'll be creating in the next phase).
  
  ```javascript
  router.post('/login', passport.authenticate('local'), function(req, res) {
      ...
  });
  ```
  
  This uses passport to authenticate the given data and redirect the user to to
  `/` if it's correct. Otherwise, it redirects users to the login page.
  
  When that's done, implement a `GET` route for `/logout`. That route should log
  the user out by calling
  
  ```javascript
  req.logout();
  ```
  
  and then redirecting the user to `/login`.

1. The secret page

  In this final phase, you'll be:
  
  1. Setting up an authentication strategy for **Passport** - we're gonna use
  [**passport-local**](http://passportjs.org/docs/username-password)
  1. Setting the root (`/`) to an **authenticated** route, meaning that a user 
  needs to be logged in to access it

  Finally, we're going to restrict users from looking at certain pages/accessing
  certain routes if they're not logged in.
  
  We need to start off by defining the ***authentication strategy***. This is
  where you'll need to validate login submissions by **(1)** finding users with
  the submitted username and **(2)** checking to see if that user's password and
  the submitted password are one and the same. You can use the snippet I've
  retrieved for you below, but you will need to adapt it to your own models.
  Please put this in `app.js`, above the error handlers.
  
  ```javascript
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;

  passport.use(new LocalStrategy(function(username, password, done) {
    // Find the user with the given username
    // May need to adapt this to your own model!
    User.findOne({ username: username }, function (err, user) {
      // if there's an error, finish trying to authenticate (auth failed)
      if (err) { return done(err); }
      // if no user present, auth failed
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      // if passwords do not match, auth failed
      if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      // auth has has succeeded
      return done(null, user);
    });
  }));
  ```
  
  In `routes/index.js`, make the root url (`/`) an authenticated root, meaning
  that a user must be logged in before being able to view the page. Change your
  route definition to look like this:
  
  ```javascript
  router.get('/', function(req, res) {
    if (!req.isAuthenticated()) {
      res.redirect('/login');
    }
    ...
  });
  ```
  
  To test, try navigating to '/' on `localhost:3000` in your browser. You should
  immediately be redirected to `/login` and shown the login page. Once
  everything is working, ensure that you can view this secret page only once
  you've logged in.
