"use strict";

(function() {
  var suites = [];
  var currentSuite;
  var done = false;
  var callbacks = [];

  var reporter = {
    specDone: function(result) {
      if (result.status === 'passed') {
        currentSuite.passed++;
      } else if (result.status === 'failed') {
        currentSuite.failed++;
      }
      //currentSuite.specs.push(result);
    },
    suiteStarted: function(result) {
      //result.specs = [];
      result.passed = 0;
      result.failed = 0;
      currentSuite = result;
      suites.push(result);
    },
    jasmineDone: function() {
      suites = formatData(suites);
      callbacks.forEach(function(cb) {
        cb(suites);
      });
    }
  };

  function formatData(suites) {
    var ret = {};
    ret.timestamp = Date.now();
    suites.forEach(function(suite) {
      ret[suite.fullName] = {
        name: suite.fullName,
        failed: suite.failed,
        passed: suite.passed
      };
    });
    return ret;
  }

  jasmine.getEnv().addReporter(reporter);

  window.horizons = window.horizons || {};
  window.horizons.getTestResult = function(cb) {
    if (done) {
      cb(suites);
    } else {
      callbacks.push(cb);
    }
  }
})()
