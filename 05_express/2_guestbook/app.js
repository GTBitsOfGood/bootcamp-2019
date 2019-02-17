// This is the top level Express server application file.
const express = require('express');
const path = require('path');

const app = express();

// Enable cookie parsing
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Set up handlebar templates
const exphbs = require('express-handlebars');
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Make files in the folder `public` accessible via Express
app.use(express.static(path.join(__dirname, 'public')));

// We use this module to store and retrieve data.
// data.read(): Read the latest data stored on disk.
// data.save(data): Save the given data to disk.
const data = require('./data');

app.get('/', function(req, res) {
  res.send('Your server is working!');
});

// ---Part 1. Login form---

// GET /login: The login page
// Make this endpoint render the template 'views/login.hbs' using res.render().
//
// Remember that when using res.render() you only need to give it the name of the
// of the template without .hbs
//
// For example if you wanted to render 'views/index.hbs' you'd do res.render('index')
app.get('/login', function(req, res) {
  res.render('login', {username: req.body.username})
});

// POST /login: Receives the form info from /login, sets a cookie on the client
// (the user's browser) and redirects to posts.
// This endpoint is implemented for you.
app.post('/login', function(req, res) {
  res.cookie('username', req.body.username);
  res.redirect('/posts');
});

// ---Part 2. View Posts---

// GET /posts: View posts page
//
// Render 'posts.hbs` with the correct information.
//
// Hint: to get the username, use req.cookies.username
// Hint: use data.read() to read the post data from data.json
app.get('/posts', (req, res) => {
  let array = data.read()
  const isFiltered = req.query.author != undefined
  
  if (req.query.order) {
    console.log('yo')
    const step = (req.query.order === 'descending') ? -1 : 1
    array.sort((a, b) => (a.date - b.date) * step)
  }
  if (req.query.author) {
    console.log('what up')
    array.filter(post => post.author === req.query.author)
  }

  res.render('posts', {
    username: req.cookies.username,
    posts: array,
    order: req.query.order,
    author: req.query.author,
    isFiltered: isFiltered
  });
});

// ---Part 3. Create new posts---
// GET /posts/new: Renders a form for the user to create a new form.
//
// Render 'post_form.hbs'.
//
// User must be logged in to be able to visit this page. If
// the user is not logged in display an error.
//
// Hint: check req.cookies.username to see if user is logged in
app.get('/posts/new', (req, res) => {
  res.render('post_form', { username: req.cookies.username })
});

// POST /posts:
// This route is called by the form on /posts/new when a new post is being created.
//
//
// Create a new post object with right author, title, body and date.
// Read author, title, body, date from req.body.
//
// Example post object:
// {author: 'Moose', date: '5/14/2006', title: 'Hey', body: 'How is it goin?'}
//
// Make sure to check that the user is logged in and that title, body
// and date are all specified.
//
// Read all posts with data.read(), .push() the new post to the array and
// write it back wih data.save(array).
app.post('/posts', (req, res) => {
  if (!req.cookies.username) {
    res.status(401)
    res.send('Please log in to see posts')
  } else if (!req.body.title || !req.body.date || !req.body.body) {
    res.status(400)
    res.send('Body, title, or date missing<br><a href="/posts/new">Go back</a>')
  } else {
    const posts = data.read()
    posts.push({ title: req.body.title, body: req.body.body, author: req.cookies.username, date: req.body.date })
    data.save(posts)
    res.render('posts')
  }
});

// Start the express server
const port = '3000'
app.listen(port);
