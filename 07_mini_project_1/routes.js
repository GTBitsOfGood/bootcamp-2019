"use strict";

// Routes, with inline controllers for each route.
const express = require("express");
const router = express.Router();
const Project = require("./models").Project;
const strftime = require("strftime");
const user = new Project({title: "title", goal: "{query_goal}", description: "{query_description}", start: "{query_start}", end: "{query_end}}"});

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
    res.render('index', {items: array});
  });
});

// Part 2: Create project
// Implement the GET /new endpoint
router.get("/new", (req, res) => {
  res.render('new', {query_newproj: req.query.newproj});
});

// Part 2: Create project
// Implement the POST /new endpoint
router.post("/new", (req, res) => {
  const project = new Project({
    title: req.body.title,
    goal: req.body.goal,
    description: req.body.description,
    start: req.body.start,
    end: req.body.end
  });
  project.save(function (err){
    console.log(err)
    if (err) {
      return res.status(204).json(err);
    } else {
      res.redirect('/')
    }
  });
});

// Part 3: View single project
// Implement the GET /project/:projectid endpoint
//try to use promises
router.get("/project/:projectid", (req, res) => {
  Project.findById(req.params.projectid, function(err, viewProj) {
    console.log("This is params " + req.params.id);
    if (err) {
      return res.status(204).json(err);
    } else {
      console.log(viewProj);
      res.render('project', viewProj);
    }
  });
});

// Part 4: Contribute to a project
// Implement the GET /project/:projectid endpoint
router.post("/project/:projectid", (req, res) => {
  Project.findById(req.params.projectid, function(err, proj) {
    if (err) {
      return res.status(204).json(err);
    } else {
      res.render('project', proj.contributeProject);
      const contObject = {name: req.body.name, amount: req.body.amount};
      proj.contributions.push(contObject);
      proj.save(err => console.log("Error is:" + err));
    }
  });
});

// Part 6: Edit project
// Create the GET /project/:projectid/edit endpoint
router.get('/project/:projectid/edit', (req, res) => {
  Project.findById(req.params.projectid, (err, proj) => {
    res.render('editProject', {proj, id: req.params.projectid});
  });
});

// Create the POST /project/:projectid/edit endpoint
router.post("/project/:projectid/edit", (req, res) => {
  Project.findById(req.params.projectid, (err, proj) => {
    proj.title = req.body.title;
    proj.goal = req.body.goal;
    proj.description = req.body.description;
    proj.start = req.body.start;
    proj.end = req.body.end;
    proj.category = req.body.category;
    return proj;
  }).then((proj) =>
    proj.save()
      .then(() => res.redirect('/project/'+req.params.projectid))
      .catch((err) => res.render('editProject', {proj: req.body, id: req.params.projectid, error: 'Make sure you fill in all of your information!'}))
  );
});


module.exports = router;