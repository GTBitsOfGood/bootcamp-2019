// imports n' things
var router = require('express').Router();
var user = require('../models/models').User;
module.exports = function(passport) {
  // router.get((req,res)=>{
  //   if(!req.isAuthenticated())
  //   {
  //   res.redirect('/login')
  //   }
  // })
  router.get('/register',(req,res)=>
  {
    res.render('../views/register.hbs')
  })
  router.post('/register',(req,res)=>{
    req.checkBody('username','Username is empty').notEmpty();
    req.checkBody('password','Password field is empty').notEmpty()


    let errors = req.validationErrors();
    
    if(errors){
      console.log("Error")
    res.redirect('/register')
    }
    else{

    let newUser = new user({
      username:req.body.username,
      password:req.body.password
    })
    newUser.save().then(()=>{
      console.log("New user registered")
    })
    res.redirect('/login')
  }
  })


  router.get('/login',(req,res)=>
{  res.render('../views/login.hbs')
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
