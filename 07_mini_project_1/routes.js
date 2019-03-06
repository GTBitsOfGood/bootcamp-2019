"use strict";

// Routes, with inline controllers for each route.
const express = require("express");
const router = express.Router();
const Project = require("./models").Project;
const strftime = require("strftime");
const moment = require('moment');
moment().format();

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
    if (req.query.sort) {
        const sortObject = {};
        if (req.query.sortDirection) {
            if (req.query.sortDirection === "descending") {
                sortObject[req.query.sort] = -1;
            } else if (req.query.sortDirection === "ascending") {
                sortObject[req.query.sort] = 1;
            }
        } else {
            sortObject[req.query.sort] = 1;
        }
        Project.find().sort(sortObject).exec((err, array) => {
            res.render('index', {items: array});
        });
    } else {
        Project.find((err, array) => {
            res.render('index', {items: array});
        });
    }
});

const gaps = [701, 301, 132, 57, 23, 10, 4, 1];

router.get("/sortByTotalContribution", (req, res) => {
    Project.find(function (error, results) {
        if (results) {
            let arr = [];
            let map = [];
            for(let x = 0; x < results.length; x++) {
                let count = 0;
                if (results[x].contributions) {
                    results[x].contributions.forEach((item) => {
                        count += item.amount;
                    });
                } else {
                    count = 0;
                }
                map.push(results[x]);
                arr.push(count);
            }
            for (let g = 0; g < gaps.length; g++) {
                let gap = gaps[g];
                for (let i = gap; i < arr.length; i++) {
                    let temp = arr[i];
                    let tempp = map[i];
                    let j;
                    for (j = i; j >= gap && arr[j - gap] < temp; j -= gap) {
                        arr[j] = arr[j - gap];
                        map[j] = map[j - gap];
                    }
                    arr[j] = temp;
                    map[j] = tempp
                }
            }
            arr.forEach((item) => console.log(item));
            res.render('index', {items: map});
        } else {
            res.send("no project in the database!");
        }
    });
});

router.get("/checkFounded", (req, res) => {
    Project.find((error, results) => {
        if (results) {
            let array = [];
            for (let x = 0; x < results.length; x++) {
                let count = 0;
                if (results[x].contributions) {
                    results[x].contributions.forEach((item) => {
                        count += item.amount;
                    });
                } else {
                    count = 0;
                }
                if (100 * count / results[x].goal >= 100 && req.query.stat === "full") {
                    array.push(results[x]);
                } else if (100 * count / results[x].goal < 100 && req.query.stat === "not") {
                    array.push(results[x]);
                }
            }
            res.render('index', {items: array});
        } else {
            res.send("did not find the specified project!");
        }
    });
});

// Part 2: Create project
// Implement the GET /new endpoint
router.get("/new", (req, res) => {
    res.render('new');
});

// Part 2: Create project
// Implement the POST /new endpoint
router.post("/new", (req, res) => {
    if (req.body.title == "" || req.body.goal == "" || req.body.start == "" || req.body.end == "") {
        res.status(400).send("Error: One of the required fields in the new post is empty.");
    } else if (!parseInt(req.body.goal)) {
        res.status(400).send("Goal has to be number!");
    } else {
        let newPro = new Project({
            title: req.body.title,
            goal: parseInt(req.body.goal),
            description: req.body.description,
            start: req.body.start,
            end: req.body.end,
            category: req.body.category
        });
        newPro.save()
            .then(() => res.redirect('/'))
            .catch(err => {
                if (err) {
                    return res.status(500).json(err);
                }
            })
    }
});

// Part 3: View single project
// Implement the GET /project/:projectid endpoint
router.get("/project/:projectid", (req, res) => {
    Project.findOne({_id: req.params.projectid}, function (error, results) {
        if (results) {
            let count = 0;
            let array = [];
            if (results.contributions) {
                results.contributions.forEach((item) => {
                    count += item.amount;
                    array.push({name: item.name, amounts: item.amount});
                });
            } else {
                count = 0;
            }
            res.render('project', {
                project: results,
                amountC: count,
                percent: Math.min(100 * count / results.goal, 100),
                list: array
            });
        } else {
            res.send("did not find the specified project!");
        }
    });
});

// Part 4: Contribute to a project
// Implement the GET /project/:projectid endpoint
router.post("/project/:projectid", (req, res) => {
    Project.findById(req.params.projectid, function (error, results) {
        if (results) {
            if (results.contributions) {
                results.contributions.push({name: req.body.name, amount: parseInt(req.body.amount)});
            } else {
                results.contributions = [{name: req.body.name, amount: parseInt(req.body.amount)}];
            }
            results.save()
                .then(() => res.redirect('/'))
                .catch(err => {
                    if (err) {
                        return res.status(500).json(err);
                    }
                })
        } else {
            res.send("did not find the specified project!");
        }
    });
});

// Part 6: Edit project
router.get("/project/:projectid/edit", (req, res) => {
    Project.findOne({_id: req.params.projectid}, function (error, results) {
        if (results) {
            let count = 0;
            let array = [];
            let newStart = moment(results.start).utc().format("YYYY-MM-DD");
            let newEnd = moment(results.end).utc().format("YYYY-MM-DD");
            if (results.contributions) {
                results.contributions.forEach((item) => {
                    count += item.amount;
                    array.push({name: item.name, amounts: item.amount});
                });
            } else {
                count = 0;
            }
            res.render('editProject', {
                project: results,
                amountC: count,
                percent: Math.min(100 * count / results.goal, 100),
                list: array,
                start: newStart,
                end: newEnd
            });
        } else {
            res.send("did not find the specified project!");
        }
    });
});

router.post("/project/:projectid/edit", (req, res) => {
    Project.findById(req.params.projectid, function (error, results) {
        if (results) {
            /*if(results.contributions) {
                results.contributions.push({name: req.body.name, amount: parseInt(req.body.amount)});
            } else {
                results.contributions = [{name: req.body.name, amount: parseInt(req.body.amount)}];
            }
            results.save()
                .then(() => res.redirect('/'))
                .catch(err => {
                    if (err) {
                        return res.status(500).json(err);
                    }
                })*/
            if (!parseInt(req.body.goal)) {
                res.status(400).send("Goal has to be number!");
            } else {
                results.title = req.body.title,
                    results.goal = parseInt(req.body.goal),
                    results.description = req.body.description,
                    results.start = req.body.start,
                    results.end = req.body.end,
                    results.category = req.body.category
                results.save()
                    .then(() => res.redirect('/'))
                    .catch(err => {
                        if (err) {
                            return res.status(500).json(err);
                        }
                    })
            }
        } else {
            res.send("did not find the specified project!");
        }
    });
});
// Create the GET /project/:projectid/edit endpoint
// Create the POST /project/:projectid/edit endpoint

module.exports = router;
