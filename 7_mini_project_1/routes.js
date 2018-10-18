"use strict";

// Routes, with inline controllers for each route.
var express = require('express');
var router = express.Router();
var Project = require('./models').Project;
var strftime = require('strftime');

// Example endpoint
router.get('/create-test-project', function(req, res) {
  var project = new Project({
    title: 'I am a test project'
  });
  project.save(function(err) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.send('Success: created a Project object in MongoDb');
    }
  });
});

// Part 1: View all projects
// Implement the GET / endpoint.
router.get('/', function(req, res) {
  // YOUR CODE HERE
  Project.find(function(err, array) {
    if (!err) {
      res.render('index', {items: array});
    }
  })
});

// Part 2: Create project
// Implement the GET /new endpoint
router.get('/new', function(req, res) {
  // YOUR CODE HERE
  console.log('hello');
  res.render('new')
});

// Part 2: Create project
// Implement the POST /new endpoint
router.post('/new', function(req, res) {
  // YOUR CODE HERE
  let arr = req.body
  console.log(arr);
  let toAdd = new Project(arr)
  toAdd.save()
  .then(res=> {
    console.log(res)
    res.render('/')
  })
  .catch(err => {
    res.render('new', {project: req.body})
  })
  console.log(toAdd)
  // res.render('new', arr)
});

// Part 3: View single project
// Implement the GET /project/:projectid endpoint
router.get('/project/:projectid', function(req, res) {
  // YOUR CODE HERE
  let proj = req.params.projectid;
  console.log("INSIDE GET", proj);
  Project.findById(proj, (err, projected) => {
    if (!err) {
      // console.log(projected);
      let sum = projected.contributions.reduce((acc, curr) => acc + curr.amount, 0);
      console.log("sum", sum);
      
      res.render('project', {single: projected, count: sum});
    }
  });
});

// Part 4: Contribute to a project
// Implement the POST /project/:projectid endpoint
router.post('/project/:andre', function(req, res) {
  // YOUR CODE HERE
  let arr = req.body;
  let proj = req.params.andre;
  // console.log(proj);
  console.log("please", proj);
  Project.findById(proj, (err, projected) => {
    console.log(err);
    console.log(projected);
    
    if (!err) {
      // console.log(projected);
      let conts = projected.contributions
      let newconts = [...conts,arr] 
      projected.contributions = newconts;
      projected.save();
      console.log("hello");
      res.render('project', {single: projected});
    }
  });
});

// Part 6: Edit project
// Create the GET /project/:projectid/edit endpoint
// Create the POST /project/:projectid/edit endpoint

module.exports = router;
