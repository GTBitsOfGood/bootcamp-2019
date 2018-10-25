// imports n' things
var router = require('express').Router();
var user = require('../models/models').User;
module.exports = function(passport) {
  router.use((req,res)=>{
    if(!req.isAuthenticated())
    {
    console.log("Not logged in")
    res.redirect('/login')
    }
    res.send('Hi nigga')
  })
  router.get('/register',(req,res)=>
  {
    res.render('../views/register.hbs')
  })
  router.post('/register',(req,res)=>{
    let newUser = new user({
      username:req.body.username,
      password:req.body.password
    })
    newUser.save()
    res.redirect('/login')
  })

  router.get('/login',(req,res)=>
{
  res.render('../views/login.hbs')
})

router.post('/login',passport.authenticate('local'),(res,req)=>{
  res.redirect('/')
})

router.get('/logout',(req,res)=>{
  req.logout();
  res.redirect('/login')
})
  
  
  
  return router;
};
