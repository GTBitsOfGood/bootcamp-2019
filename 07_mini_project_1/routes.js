"use strict";

// Routes, with inline controllers for each route.
const express = require("express");
const router = express.Router();
const Project = require("./models").Project;
const strftime = require("strftime");
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }));;
router.use(bodyParser.json());

// Example endpoint
router.get("/create-test-project", (req, res) => {
  const project = new Project({
    title: "I am a test project"
  });
  project.save(err => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.send("Success: created a Project object in MongoDb");
  });
});

// Part 1: View all projects
// Implement the GET / endpoint.
router.get("/", (req, res) => {
  Project.find((err, array) => {
    res.render('index', { array })
  })
});

// Part 2: Create project
// Implement the GET /new endpoint
router.get("/new", (req, res) => {
  res.render('new.hbs', { errorMessage: '' })
});

// Part 2: Create project
// Implement the POST /new endpoint
router.post("/new", (req, res) => {
  const newProject = new Project({
    title: req.body.title,
    goal: req.body.goal,
    description: req.body.description,
    start: req.body.start,
    end: req.body.end    
  })
  newProject.save()
    .then(() => res.redirect('/'))
    .catch(err => {
      res.render('new', { project: newProject, errorMessage: "Some of the entries you've provided are invalid" })
  })
});

// Part 3: View single project
// Implement the GET /project/:projectid endpoint
router.get("/project/:projectid", (req, res) => {
  Project.findById(req.params.projectid.slice(1)).then(project => {
    let totalRaised = 0
    for (let contribution of project.contributions) {
      const amount = contribution.amount
      totalRaised += amount
    }
    const percentOfGoal = totalRaised / project.goal
    res.render('project.hbs', { project, totalRaised, percentOfGoal })
  }).catch(err => console.log(err))
});

// Part 4: Contribute to a project
// Implement the GET /project/:projectid endpoint
router.post("/project/:projectid", (req, res) => {
  Project.findById(req.params.projectid.slice(1)).then(project => {
    project.contributions.push({
      'name': req.body.name,
      'amount': req.body.amount
    })
    project.save()
  }).catch(err => console.log(err))
});

// Part 6: Edit project
// Create the GET /project/:projectid/edit endpoint
// Create the POST /project/:projectid/edit endpoint

module.exports = router;
