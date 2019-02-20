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
  // YOUR CODE HERE
    Project.find((err, arr) => {
      res.render('index', {items: arr})
    });
});

// Part 2: Create project
// Implement the GET /new endpoint
router.get("/new", (req, res) => {
  // YOUR CODE HERE
    res.render('new')
});

// Part 2: Create project
// Implement the POST /new endpoint
router.post("/new", (req, res) => {
  // YOUR CODE HERE
    const newProject = new Project({
        title: req.body.title,
        goal: req.body.goal,
        description: req.body.description,
        start: strftime(req.body.start),
        end: strftime(req.body.end)
    });
    newProject.save({}, (err) => {
      if (err) res.send(err);
      else res.redirect("/");
    })
});

// Part 3: View single project
// Implement the GET /project/:projectid endpoint
router.get("/project/:projectid", (req, res) => {
  // YOUR CODE HERE
    Project.findById(req.params.projectid, (err, pro) => {
        res.render('project', {pro: pro})
    })
});

// Part 4: Contribute to a project
// Implement the GET /project/:projectid endpoint
router.post("/project/:projectid", (req, res) => {
  // YOUR CODE HERE
    Project.findById(req.params.projectid,(err,pro) => {
        if (err) res.render(err);
        pro.contributions.push({name: req.body.name,
        amount: req.body.amount});
        pro.save({}, (err) => {
            res.send(err);
        });
        res.render('project', {pro:pro});
    });

});

// Part 6: Edit project
// Create the GET /project/:projectid/edit endpoint
// Create the POST /project/:projectid/edit endpoint

module.exports = router;
