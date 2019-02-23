
"use strict";

const express = require("express");
const router = express.Router();
const Project = require("./models").Project;
const strftime = require("strftime");
const _ = require('underscore');

router.get("/create-test-project", (req, res) => {
  const project = new Project({
    title: "I am a test project"
  });
});


router.get("/", (req, res) => {

  if (req.query.sort || req.query.status) {
    if (req.query.sort === '') {
      req.query.sort='totalContributions'
    }
    if (req.query.sortDirection === '') {
      req.query.sortDirection='ascending'
    }

    const sortObject = {};
    let multiplier = 1;

    console.log(req.query);
    if (req.query.sortDirection === 'descending') {
      multiplier = -1;
    }
    sortObject[req.query.sort] = 1 * multiplier;
    // sortObject["field"]=req.query.sortDirection;
    if (req.query.status === '') {

      if (req.query.sort === 'totalContributions') {
        Project.find({}, (err, arr) => {
          res.render('index', {
            items: _.sortBy(arr, (o) => {
              console.log(o);
              let sum = 0;
              o.contributions.forEach((item) => {
                sum += item.amount;
              });
              return sum * multiplier;
              // return o.contributions.amount * multiplier;
            }), sort: req.query.sort, sortDirection: req.query.sortDirection
          });
        });

        // console.log()

      } else {
        Project.find().sort(sortObject).exec((err, array) => {
          res.render('index', {items: array, sort: req.query.sort, sortDirection: req.query.sortDirection, status: req.query.status});
          // YOUR CODE HERE
        });
      }








    } else if (req.query.status === 'done') {



      console.log('yeeeet')

      if (req.query.sort === 'totalContributions') {
        Project.find({}, (err, arr2) => {
          let arr = [];
          arr2.forEach((item) => {
            let sum = 0;
            item.contributions.forEach((item) => sum += item.amount);
            if (sum >= item.goal) {
              arr.push(item);
            }
          });
          res.render('index', {
            items: _.sortBy(arr, (o) => {
              console.log(o);
              let sum = 0;
              o.contributions.forEach((item) => {
                sum += item.amount;
              });
              return sum * multiplier;
              // return o.contributions.amount * multiplier;
            }), sort: req.query.sort, sortDirection: req.query.sortDirection, status: req.query.status
          });
        });


      } else {
        Project.find().sort(sortObject).exec((err, arr2) => {
          let arr = [];
          arr2.forEach((item) => {
            let sum = 0;
            item.contributions.forEach((item) => sum += item.amount);
            if (sum >= item.goal) {
              arr.push(item);
            }
          });
          console.log('yuuuuh')
          res.render('index', {items: arr, sort: req.query.sort, sortDirection: req.query.sortDirection, status: req.query.status});
        });
      }



    }else if (req.query.status === 'notdone') {




      if (req.query.sort === 'totalContributions') {
        Project.find({}, (err, arr2) => {
          let arr = [];
          arr2.forEach((item) => {
            let sum = 0;
            item.contributions.forEach((item) => sum += item.amount);
            if (sum < item.goal) {
              arr.push(item);
            }
          });
          res.render('index', {
            items: _.sortBy(arr, (o) => {
              console.log(o);
              let sum = 0;
              o.contributions.forEach((item) => {
                sum += item.amount;
              });
              return sum * multiplier;
              // return o.contributions.amount * multiplier;
            }), sort: req.query.sort, sortDirection: req.query.sortDirection, status: req.query.status
          });
        });

        // console.log()

      } else {
        Project.find().sort(sortObject).exec((err, arr2) => {
          let arr = [];
          arr2.forEach((item) => {
            let sum = 0;
            item.contributions.forEach((item) => sum += item.amount);
            if (sum >= item.goal) {
              arr.push(item);
            }
          });
          res.render('index', {items: arr, sort: req.query.sort, sortDirection: req.query.sortDirection, status: req.query.status});
          // YOUR CODE HERE
        });
      }



    }
  } else {
    Project.find({}, (error, results) => {

      res.render('index', {items: results});
    });
  }
});

router.get("/new", (req, res) => {
  res.render('new');
});


router.post("/new", (req, res) => {

  const newProj = new Project(req.body);
  newProj.save().then(() => {
    res.redirect('/');
  }).catch((error) => {
    res.render('new', {proj: req.body, error: 'Make sure you fill in all of your information!'});
  });

});


router.get("/project/:projectid", (req, res) => {
  let error;
  Project.findById(req.params.projectid, (err, proj) => {
    console.log(proj);
    let arrSum = 0;
    proj.contributions.forEach((item) => {
      console.log(item.amount);
      arrSum += parseInt(item.amount);
    });
    if (req.query.error) {"use strict";

      const express = require("express");
      const router = express.Router();
      const Project = require("./models").Project;
      const strftime = require("strftime");

      router.get("/create-test-project", (req, res) => {
        const project = new Project({
          title: "I am a test project"
        });
      });


      router.get("/", (req, res) => {
        Project.find({}, (error, results) => {
          res.render('index', {items: results});
        });
      });

      router.get("/new", (req, res) => {
        res.render('new');
      });


      router.post("/new", (req, res) => {

        const newProj = new Project(req.body);
        newProj.save().then(() => {
          res.redirect('/');
        }).catch((error) => {
          res.render('new', {proj: req.body, error: 'Make sure you fill in all of your information!'});
        });

      });


      router.get("/project/:projectid", (req, res) => {
        let error;
        Project.findById(req.params.projectid, (err, proj) => {
          console.log(proj);
          let arrSum = 0;
          proj.contributions.forEach((item) => {
            console.log(item.amount);
            arrSum += parseInt(item.amount);
          });
          if (req.query.error) {
            error = "Make sure to fill both fields out";
          }
          let percent;
          if(proj.goal <= arrSum) {
            percent = 100;
          } else {
            percent = Math.floor(arrSum/proj.goal * 100);
          }
          res.render('project', {proj, id: req.params.projectid, total: arrSum, error, percent});
        });
      });


      router.post("/project/:projectid", (req, res) => {
        console.log("here", req.params.projectid);
        Project.findById(req.params.projectid, (err, proj) => {
          proj.contributions.push({name: req.body.name, amount: req.body.amount});
          proj.save().then((proj) => {
            res.redirect('/project/' + proj._id);
          }).catch((error) => {
            res.redirect('/project/' + proj._id + '?error=true');
          });
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
        // res.redirect('/project/'+req.params.projectid);
        // res.redirect('')
        // res.render('project', {proj: req.body, error: 'Make sure you fill in all of your information!'});
        // const newProj = new Project(req.body);
        // newProj.save().then(() => {
        //   res.redirect('/');
        // }).catch((error) => {
        //   res.render('new', {proj: req.body, error: 'Make sure you fill in all of your information!'});
        // });

      });



      module.exports = router;

      error = "Make sure to fill both fields out";
    }
    let percent;
    if(proj.goal <= arrSum) {
      percent = 100;
    } else {
      percent = Math.floor(arrSum/proj.goal * 100);
    }
    res.render('project', {proj, id: req.params.projectid, total: arrSum, error, percent});
  });
});


router.post("/project/:projectid", (req, res) => {
  console.log("here", req.params.projectid);
  Project.findById(req.params.projectid, (err, proj) => {
    proj.contributions.push({name: req.body.name, amount: req.body.amount});
    proj.save().then((proj) => {
      res.redirect('/project/' + proj._id);
    }).catch((error) => {
      res.redirect('/project/' + proj._id + '?error=true');
    });
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
    console.log(proj);
    proj.save().then(() => res.redirect('/project/' + req.params.projectid))
      .catch((err) => res.render('editProject', {
        proj,
        id: req.params.projectid,
        error: 'Make sure you fill in all of your information!'
      }));
  });
});




module.exports = router;
