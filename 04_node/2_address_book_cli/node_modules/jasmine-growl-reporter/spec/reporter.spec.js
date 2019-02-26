
var _ = require('underscore'),
    path = require('path'),
    RunnerMock = require('./runnerMock'),
    growlReporterInjector = require('../lib/reporter').inject;

require('./matchers');

describe("GrowlReporter", function() {

  var expectedTitle = 'Jasmine',
      passedRegexp = /^PASSED in [\d\.]+s$/,
      failedRegexp = /^FAILED in [\d\.]+s$/,
      passedImage = path.resolve(__dirname, '../res/passed.png'),
      failedImage = path.resolve(__dirname, '../res/failed.png');

  var growl, reporter, runner;

  beforeEach(function() {
    growl = jasmine.createSpy();
    reporter = new (growlReporterInjector({ growl: growl }))();
    runner = new RunnerMock(reporter);
  });

  it("should report 0 results", function() {

    runner.suite(function() {});

    expect(growl).toHaveNotified('0 tests', {
      name: expectedTitle,
      title: passedRegexp,
      image: passedImage
    });
  });

  it("should report 2 successful results", function() {

    runner.suite(function() {
      _.times(2, this.passTest, this);
    });

    expect(growl).toHaveNotified('2 tests, 0 failed', {
      name: expectedTitle,
      title: passedRegexp,
      image: passedImage
    });
  });

  it("should report 3 failed results", function() {

    runner.suite(function() {
      _.times(3, this.failTest, this);
    });

    expect(growl).toHaveNotified('3 tests, 3 failed', {
      name: expectedTitle,
      title: failedRegexp,
      image: failedImage
    });
  });

  it("should report 2 passed and 4 failed results", function() {

    runner.suite(function() {
      _.times(2, this.passTest, this);
      _.times(4, this.failTest, this);
    });

    expect(growl).toHaveNotified('6 tests, 4 failed', {
      name: expectedTitle,
      title: failedRegexp,
      image: failedImage
    });
  });

  it("should report 3 pending results", function() {

    runner.suite(function() {
      _.times(3, this.skipTest, this);
    });

    expect(growl).toHaveNotified('3 tests, 0 failed, 3 pending', {
      name: expectedTitle,
      title: passedRegexp,
      image: passedImage
    });
  });

  it("should report 1 passed and 2 pending results", function() {

    runner.suite(function() {
      _.times(1, this.passTest, this);
      _.times(2, this.skipTest, this);
    });

    expect(growl).toHaveNotified('3 tests, 0 failed, 2 pending', {
      name: expectedTitle,
      title: passedRegexp,
      image: passedImage
    });
  });

  it("should report 4 pending and 5 failed results", function() {

    runner.suite(function() {
      _.times(4, this.skipTest, this);
      _.times(5, this.failTest, this);
    });

    expect(growl).toHaveNotified('9 tests, 5 failed, 4 pending', {
      name: expectedTitle,
      title: failedRegexp,
      image: failedImage
    });
  });

  it("should report 2 passed, 3 pending and 4 failed results", function() {

    runner.suite(function() {
      _.times(2, this.passTest, this);
      _.times(3, this.skipTest, this);
      _.times(4, this.failTest, this);
    });

    expect(growl).toHaveNotified('9 tests, 4 failed, 3 pending', {
      name: expectedTitle,
      title: failedRegexp,
      image: failedImage
    });
  });
});
