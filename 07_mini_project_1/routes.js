"use strict";

// Routes, with inline controllers for each route.
const express = require("express");
const router = express.Router();
const Project = require("./models").Project;
const strftime = require("strftime");
const bodyParser = require("body-parser");
const moment = require('moment-timezone');

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
  res.render('new');
  // YOUR CODE HERE
});

// Part 2: Create project
// Implement the POST /new endpoint
router.post("/new", (req, res) => {
  const project = new Project({
    title: req.body.title,
    goal: req.body.goal,
    description: req.body.description,
    start: moment.tz(req.body.start, "America/New_York"),
    end: moment.tz(req.body.end, "America/New_York"),
    category: req.body.category,
    total_contributions: 0
  });
  project.save(err => {
    if (err) {
      res.locals.errors = err.errors;
      res.locals.project = project;
      res.locals.startDate = moment(project.start).utc().format("YYYY-MM-DD");
      res.locals.endDate = moment(project.end).utc().format("YYYY-MM-DD");
      return res.render('new.hbs');
    }
    return res.redirect('/');
  });

});

// Part 3: View single project
// Implement the GET /project/:projectid endpoint
router.get("/project/:projectid", (req, res) => {
  Project.findById(req.params.projectid, (err, project) => {
    const formatStart = moment(project.start).format('MMMM Do, YYYY');
    const formatEnd = moment(project.end).format('MMMM Do, YYYY');
    res.render('project.hbs', {project: project, startDate: formatStart, endDate: formatEnd});
  });
});

// Part 4: Contribute to a project
// Implement the GET /project/:projectid endpoint
router.post("/project/:projectid", (req, res) => {
  Project.findById(req.params.projectid, (err, project) => {
    const contribution = {
      name: req.body.name,
      amount: req.body.amount
    }
    project.total_contributions += Number(req.body.amount);
    project.percent = Math.round(project.total_contributions / project.goal * 100);
    project.contributions.push(contribution);
    project.save(err => {
      if (err) {
        res.locals.errors = err.errors;
        res.locals.project = project;
      }
    });
    const formatStart = moment(project.start).format('MMMM Do, YYYY');
    const formatEnd = moment(project.end).format('MMMM Do, YYYY');
    res.render('project.hbs', {project: project, startDate: formatStart, endDate: formatEnd});
  });

});

// Part 6: Edit project
router.get("/project/:projectid/edit", (req, res) => {
  Project.findById(req.params.projectid, (err, project) => {
    const startDate = moment(project.start).utc().format("YYYY-MM-DD");
    const endDate = moment(project.end).utc().format("YYYY-MM-DD");
    console.log(project.category);
    res.render('editProject.hbs', {project: project, projectid: req.params.projectid, startDate: startDate, endDate: endDate});
  });
});
// Create the GET /project/:projectid/edit endpoint
// Create the POST /project/:projectid/edit endpoint

router.post("/project/:projectid/edit", (req, res) => {
  Project.findByIdAndUpdate(req.params.projectid, {
    title: req.body.title,
    goal: req.body.goal,
    description: req.body.description,
    start: moment.tz(req.body.start, "America/New_York"),
    end: moment.tz(req.body.end, "America/New_York"),
    category: req.body.category,
    total_contributions: req.body.total_contributions
  }, (err) => {
    return res.render('edit.hbs');
  });
    return res.redirect('/');
});



module.exports = router;
