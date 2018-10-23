var express = require('express');
var router = express.Router();

var cookieStore = {};

var generateId = function() {
  var chunk = function() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return chunk() + chunk() + '-' + chunk() + '-' + chunk() + '-' +
    chunk() + '-' + chunk() + chunk() + chunk();
};

router.use(function(req, res, next) {
  const id = generateId()
  res.cookie('sessionCookie',id)
  req.session = cookieStore[id]= {_isValid:true}
  console.log(req.session)
  next()
  
  });

router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  if (req.session && req.session.user) {
    res.write("<h1>Welcome back, " + req.session.user + "!</h1><p><a href='/logout'>Click here</a> to logout.</p>");
  }
  else {
    console.log(req.session.user)
    res.write("<h1>I don't know who you are!</h1><p><a href='/login'>Click here</a> to login.</p>");

  }
  res.end();
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  res.redirect('/');
});

router.get('/logout', function(req, res, next) {
  // Your code here. Delete the user data from the session, but don't delete the
  // cookie or the session itself.
  
  res.redirect('/');
});

module.exports = router;
