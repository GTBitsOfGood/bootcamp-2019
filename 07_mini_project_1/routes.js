"use strict";

// Routes, with inline controllers for each route.
const express = require("express");
const router = express.Router();
const Project = require("./models").Project;
const strftime = require("strftime");
const us = require("underscore");

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

// Implement the GET / endpoint.
router.get("/", (req, res) => {
  // YOUR CODE HERE
    if (req.query.sort) {
        if (req.query.sort === "contributions") {
            let list = [];
            Project.find({}, (err, pro) => {
                let sum = 0;
                if (pro.contributions === undefined) {
                    list.push({0: pro});
                } else {
                    for (let i = 0; i < pro.contributions.length; i++) {
                        sum += pro.contributions[i].amount;
                    }
                    list.push({sum: pro});
                }
            })
                .then(_ => {
                    us.sortBy(list, (ele => Object.keys(ele)[0]
                    ));
                    let nlist = [];
                    for (let i = 0; i < list.length; i++) {
                        nlist[i] = Object.values(list[i])[0];
                    }
                    res.json(nlist);
                })
                .catch(console.log)
        } else if (req.query.sort === "filter") {
            let list = [];
            Project.find({}, (err, pro) => {
                let sum;
                if (pro.contributions === undefined) {
                    sum = 0;
                } else {
                    for (let i = 0; i < pro.contributions.length; i++) {
                        sum += pro.contributions[i].amount;
                    }
                }
                if (sum > pro.goal) {
                    console.log("Hi");
                    list.push(pro);
                }

            }).then(_ => {
                res.json(list);
            }).catch(console.log)
        } else {
                const sortObject = {};
                sortObject[req.query.sort] = 1;
                // Project.find().sort(sortObject).exec((err, arr) => {
                //     if (err) res.send(err);
                //     res.json(arr);
                // });
                Project.find()
                    .sort(sortObject)
                    .then(arr => res.json(arr))
                    .catch(err => res.send(err))
            }
    } else {
        Project.find((err, arr) => {
            if (err) res.send(err);
            res.render('index', {items: arr})
        });
    }
});
// Part 1: View all projects


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
        end: strftime(req.body.end),
        category: req.body.category
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
        if (err) res.send(err);
        res.render('project', {pro: pro,
        url: req.url})
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
        res.render('project', {contributions: pro.contributions});
    });
});

// Part 6: Edit project
// Create the GET /project/:projectid/edit endpoint
// Create the POST /project/:projectid/edit endpoint
router.get("/project/:projectid/edit", (req, res) => {
    Project.findById(req.params.projectid, (err, pro) => {
        console.log(typeof req.url);
        if (err) res.render(err);
        res.render('editProject', {title: pro.title,
        goal: pro.goal, description: pro.description,
        start: pro.start, end: pro.end, url: req.url})
    })
});

router.post("/project/:projectid/edit", (req, res) => {
    Project.findByIdAndUpdate(req.params.projectid,{
            title: req.body.title,
            goal: req.body.goal,
            description: req.body.description,
            start: strftime(req.body.start),
            end: strftime(req.body.end),
            category: req.body.category
    }, (err) => {
        res.render(err);
    });
    res.send("Update Succesfully!");
});

module.exports = router;
