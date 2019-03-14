"use strict";

// Routes, with inline controllers for each route.
var express = require('express');
var router = express.Router();
var Project = require('./models').Project;
const strftime = require("strftime");
const bodyParser = require('body-parser');
const moment = require('moment');

router.use(bodyParser.urlencoded({ extended: false }));;
router.use(bodyParser.json());

// Example endpoint
router.get('/create-test-project', function(req, res) {
  let project = new Project({
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
    Project.find(function(err, array) {
      res.render('index', {items: array});
    });
});

// Part 2: Create project
// Implement the GET /new endpoint
router.get('/new', function(req, res) {
    res.render('new', {newp: req.query.newp});
});

// Part 2: Create project
// Implement the POST /new endpoint
router.post('/new', function(req, res) {
  let project = new Project({
    title: req.body.title,
    goal: req.body.goal,
    description: req.body.description,
    start: req.body.start,
    end: req.body.end
  })
  project.save(function(err) {
    console.log(err);
    res.redirect('/');
  });
});

// Part 3: View single project
// Implement the GET /project/:projectid endpoint
router.get('/project/:projectid', function(req, res) {
  Project.findById(req.params.projectid, function(err, project1) {
    console.log(err);
    res.render('project', {proj: project1});
  });
});

// Part 4: Contribute to a project
// Implement the GET /project/:projectid endpoint
router.post('/project/:projectid', function(req, res) {
  let contri = {
    name: req.body.name,
    amount: req.body.amount
  }
  Project.findById(req.params.projectid, function(err, project1) {
    console.log(err);
    project1.contributions.push(contri);
    res.render('project', {proj: project1});
    project1.save();
  });
});

// Part 6: Edit project
// Create the GET /project/:projectid/edit endpoint
router.get('/project/:projectid/edit', (req, res) => {
  Project.findById(req.params.projectid, function(err, project1) {
    const start = moment(project1.start).utc().format("YYYY-MM-DD");
    const end = moment(project1.end).utc().format("YYYY-MM-DD");
    res.render('editProject.hbs', {proj: project1, start, end});
  });
});

// Create the POST /project/:projectid/edit endpoint
router.post('project/:projectid/edit', (req, res) => {
  Project.findByIdAndUpdate(req.params.projectid, {
    title: req.body.title,
    goal: req.body.goal,
    description: req.body.description,
    start: req.body.start,
    end: req.body.end,
    category: req.body.category
  }, 
  (err) => console.log(err)).then(() => res.redirect('/project/' + req.params.projectid + '/edit'));
});

module.exports = router;
