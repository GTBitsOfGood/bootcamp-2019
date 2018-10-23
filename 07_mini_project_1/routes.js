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
router.get('/', (req,res) =>{
  Project.find((err,projects)=>{
    res.render('index',{projects})
  })
  });

// Part 2: Create project
// Implement the GET /new endpoint
router.get('/new', function(req, res) {
  res.render('new')
});

// Part 2: Create project
// Implement the POST /new endpoint
router.post('/new', function(req, res) {
  let project = new Project({
    title:req.body.title,
    goal:req.body.goal,
    start:req.body.start,
    description:req.body.description,
    end:req.body.end
  })
  return project.save()
  .then(() =>{
    res.redirect('/')
  })});

// Part 3: View single project
// Implement the GET /project/:projectid endpoint
router.get('/project/:projectid', function(req, res) {
  Project.findById(req.params.projectid,(err,project)=>
  {
     res.render('project',{project})
  })
});

// Part 4: Contribute to a project
// Implement the GET /project/:projectid endpoint
router.post('/project/:projectid', function(req, res) {
  Project.findById(req.params.projectid,(err,project)=>{
    console.log("Amount",req.body.amount)
    project.contributions.push(
      {
      name:req.body.name,
      amount:parseInt(req.body.amount)}
      )
    return project.save().then(()=>{
      res.redirect(`/project/${req.params.projectid}`)
    })
  })
});

// Part 6: Edit project
// Create the GET /project/:projectid/edit endpoint
// Create the POST /project/:projectid/edit endpoint

module.exports = router;
