"use strict";

// Routes, with inline controllers for each route.
var express = require('express');
var router = express.Router();
var Project = require('./models').Project
var strftime = require('strftime');




// Example endpoint
router.get('/create-test-project', function(req, res) {
  var project = new Project({
    title: 'I am a test project'
  });
  project.save(function(err) {
    if (err) {
      console.log(err)
      res.status(500).json(err);
    } else {
      res.send('Success: created a Project object in MongoDb');
    }
  });
});

// Part 1: View all projects
// Implement the GET / endpoint.
router.get('/', function(req, res) {
  // YOUR CODE HERE
  //sort with direction
  let sortDir;
  let item;
  if (!req.query.sortDirection) {
    sortDir = 1;
  } else {
    sortDir = req.query.sortDirection;
  }
  let sort = req.query.sort;


  if (sort && sort!='totContributions' ) {
    const sortObject = {};
    sortObject[req.query.sort] = sortDir;
    Project.find().sort(sortObject).exec((err, results)=> {
      res.render('index', {item: results});
    });
  } else if (sort && sort == 'totContributions') {
      Project.find()
      .then(results=> {
        results.sort((a,b)=> {
          let aTotal = 0;
          let bTotal = 0;
          for(let i = 0; i < a.contributions.length; i++) {
            aTotal += parseInt(a.contributions[i].amount);
          }
          for(let i = 0; i < b.contributions.length; i++) {
            bTotal  += parseInt(b.contributions[i].amount);
          }
          return aTotal - bTotal;
      });
        return results;
      })
      .then(results=> {res.render('index', {item: results});})
      .catch(console.log);
    }

    let filterBy = req.query.view;
    if (filterBy && filterBy == 'fullyFunded') {
        let project;
         Project.find().then(results=> {
            project = results.filter(item=> {
              let totCont = 0;
              for (let i = 0; i < item.contributions.length; i++) {
                totCont += parseInt(item.contributions[i].amount);
              }
              console.log(totCont);
              return item.goal <= totCont;
            });
            return project;
          }).then(results=> {res.render('index', {item: results});})
          .catch(console.log);
        } else if (filterBy && filterBy == 'notFullyFunded') {
           Project.find().then(results=> {
                project = results.filter(item=> {
                let totCont = 0;
                for (let i = 0; i < item.contributions.length; i++) {
                totCont += parseInt(item.contributions[i].amount);
              }
            return item.goal >= totCont;
          });
            return project;
        }).then (results=> {res.render('index', {item: results});})
         .catch(console.log);
      }

    if (!sort && !filterBy) {
      Project.find((err, arr)=>{
        res.render('index', {item: arr});
      });
  }


  });



// Part 2: Create project
// Implement the GET /new endpoint
router.get('/new', function(req, res) {
  // YOUR CODE HERE
  res.render('new');
});

// Part 2: Create project
// Implement the POST /new endpoint
router.post('/new', function(req, res) {
  // YOUR CODE HERE
 let newProj = new Project({
    title: req.body.newTitle,
    goal: req.body.goal,
    description: req.body.description,
    start: req.body.startDate,
    end: req.body.endDate,
    category: req.body.select

  });
    newProj.save()
    .then(_=> res.redirect('http://localhost:3000/'))
    .catch((err)=> res.render('new', {err, newProj}));
  });

// Part 3: View single project
// Implement the GET /project/:projectid endpoint
router.get('/project/:projectid', function(req, res) {
  // YOUR CODE HERE
  Project.findById(`${req.params.projectid}`)
  .then((results)=> res.render('project', {results}));
});

// Part 4: Contribute to a project
// Implement the GET /project/:projectid endpoint
router.post('/project/:projectid', function(req, res) {
  // YOUR CODE HERE
  Project.findById(`${req.params.projectid}`)
  .then((results)=> {
    let obj = {name: req.body.contributer, amount: req.body.amount};
    results.contributions.push(obj);
    return results.save();
  })
  .then((results)=> {
    let total = 0;
    for (let i = 0; i < results.contributions.length; i++) {
      total += results.contributions[i].amount;
    }
    res.render('project', {results, percent: 100*(total/results.goal), total});
  })
  .catch(err => res.render('project', {err}));
});

// Part 6: Edit project
// Create the GET /project/:projectid/edit endpoint

router.get('/project/:projectid/edit', (req, res)=> {
  Project.findById(`${req.params.projectid}`)
  .then(results=> res.render('editProject', {results}))
  .catch(err=> res.render('editProject', {err}));
});
// Create the POST /project/:projectid/edit endpoint
router.post('/project/:projectid/edit', (req, res)=>{
  Project.findByIdAndUpdate(`${req.params.projectid}`, {
    title: req.body.newTitle,
    goal: req.body.goal,
    description: req.body.description,
    start: req.body.startDate,
    end: req.body.endDate,
    category: req.body.select
  })
  .then(_=> res.redirect('http://localhost:3000/'))
  .catch(err=> res.render('editProject', {err}));
});

module.exports = router;
