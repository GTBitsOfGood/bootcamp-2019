"use strict";
// Routes, with inline controllers for each route.
var express = require("express");
var router = express.Router();
var Project = require("./models").Project;
var strftime = require("strftime");
var bodyParser = require('body-parser');
var moment = require('moment');
router.use(bodyParser.urlencoded({ extended: false }));
;
router.use(bodyParser.json());
// Example endpoint
router.get("/create-test-project", function (req, res) {
    var project = new Project({
        title: "I am a test project"
    });
    project.save(function (err) {
        if (err) {
            return res.status(500).json(err);
        }
        return res.send("Success: created a Project object in MongoDb");
    });
});
// Part 1: View all projects
// Implement the GET / endpoint.
router.get("/", function (req, res) {
    var sortObject = {};
    sortObject[req.query.sort] = req.query.sortDirection || 'ascending';
    if (req.query.sort === 'totalContributions') {
        Project.find(function (err, projects) {
            for (var _i = 0, projects_1 = projects; _i < projects_1.length; _i++) {
                var project = projects_1[_i];
                var totalContribs = 0;
                for (var _a = 0, _b = project.contributions; _a < _b.length; _a++) {
                    var contribution = _b[_a];
                    totalContribs += contribution.amount;
                }
                projects.push({ 'totalContributions': totalContribs });
            }
        }).sort(sortObject).exec(function (err, projects) {
            res.render('index', { projects: projects });
        });
    }
    else if (req.query.sort) {
        Project.find({}).sort(sortObject).exec(function (err, projects) {
            res.render('index', { projects: projects });
        });
    }
    else if (req.query.filter) {
        Project.find(function (err, projects) {
            for (var _i = 0, projects_2 = projects; _i < projects_2.length; _i++) {
                var project = projects_2[_i];
                var totalContribs = 0;
                for (var _a = 0, _b = project.contributions; _a < _b.length; _a++) {
                    var contribution = _b[_a];
                    totalContribs += contribution.amount;
                }
                var funded = totalContribs >= project.goal;
                project['funded'] = funded;
            }
            projects = projects.filter(function (project) { return project.funded === req.query.filter; });
        }).then(function (projects) {
            res.render('index', { projects: projects });
        });
    }
    else {
        Project.find(function (err, projects) {
            res.render('index', { projects: projects });
        });
    }
});
// Part 2: Create project
// Implement the GET /new endpoint
router.get("/new", function (req, res) {
    res.render('new.hbs', { errorMessage: '' });
});
// Part 2: Create project
// Implement the POST /new endpoint
router.post("/new", function (req, res) {
    var newProject = new Project({
        title: req.body.title,
        goal: req.body.goal,
        description: req.body.description,
        start: req.body.start,
        end: req.body.end,
        category: req.body.category
    });
    newProject.save()
        .then(function () { return res.redirect('/'); })["catch"](function (err) {
        res.render('new', { project: newProject, errorMessage: "Some of the entries you've provided are invalid" });
    });
});
// Part 3: View single project
// Implement the GET /project/:projectid endpoint
router.get("/project/:projectid", function (req, res) {
    var projectid = req.params.projectid;
    Project.findById(projectid).then(function (project) {
        var totalRaised = 0;
        for (var _i = 0, _a = project.contributions; _i < _a.length; _i++) {
            var contribution = _a[_i];
            var amount = contribution.amount;
            totalRaised += amount;
        }
        var percentOfGoal = totalRaised / project.goal;
        res.render('project.hbs', { project: project, totalRaised: totalRaised, percentOfGoal: percentOfGoal, projectid: projectid });
    })["catch"](function (err) { return console.log(err); });
});
// Part 4: Contribute to a project
// Implement the GET /project/:projectid endpoint
router.post("/project/:projectid", function (req, res) {
    var projectid = req.params.projectid;
    Project.findById(projectid).then(function (project) {
        project.contributions.push({
            'name': req.body.name,
            'amount': req.body.amount
        });
        project.save().then(function () { return res.redirect('/project/:' + projectid); });
    })["catch"](function (err) { return console.log(err); });
});
// Part 6: Edit project
// Create the GET /project/:projectid/edit endpoint
router.get('/project/:projectid/edit', function (req, res) {
    var projectid = req.params.projectid;
    Project.findById(projectid).then(function (project) {
        var start = moment(project.start).utc().format("YYYY-MM-DD");
        var end = moment(project.end).utc().format("YYYY-MM-DD");
        res.render('editProject.hbs', { project: project, start: start, end: end });
    });
});
// Create the POST /project/:projectid/edit endpoint
router.post('project/:projectid/edit', function (req, res) {
    var projectid = req.params.projectid;
    Project.findByIdAndUpdate(projectid, {
        title: req.body.title,
        goal: req.body.goal,
        description: req.body.description,
        start: req.body.start,
        end: req.body.end,
        category: req.body.category
    }, function (err) { return console.log(err); }).then(function () { return res.redirect('/project/' + projectid + '/edit'); });
});
module.exports = router;
