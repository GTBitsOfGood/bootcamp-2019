"use strict";

// Routes, with inline controllers for each route.
const express = require("express");
const router = express.Router();
const Project = require("./models").Project;
const strftime = require("strftime");

// Example endpoint
router.get("/create-test-project", (req, res) => {
  const project = new Project({
    title: "I am a test project"
  });
});

// Part 1: View all projects
// Implement the GET / endpoint.
router.get("/", (req, res) => {
  Project.find({}, (error, results) => {
    res.render('index', {items: results});
  });
});

// Part 2: Create project
// Implement the GET /new endpoint
router.get("/new", (req, res) => {
  // YOUR CODE HERE
  res.render('new');
});

// Part 2: Create project
// Implement the POST /new endpoint
router.post("/new", (req, res) => {

  const newProj = new Project(req.body);
  newProj.save().then(() => {
    res.redirect('/');
  }).catch((error) => {
    res.render('new', {proj: req.body, error: 'Make sure you fill in all of your information!'});
  });

});

// Part 3: View single project
// Implement the GET /project/:projectid endpoint
router.get("/project/:projectid", (req, res) => {
  Project.findById(req.params.projectid, (err, proj) => {
    res.render('project', {proj});
  });
});

// Part 4: Contribute to a project
// Implement the GET /project/:projectid endpoint
router.post("/project/:projectid", (req, res) => {
  // YOUR CODE HERE
});

// Part 6: Edit project
// Create the GET /project/:projectid/edit endpoint
// Create the POST /project/:projectid/edit endpoint

module.exports = router;
