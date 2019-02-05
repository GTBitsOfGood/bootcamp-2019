"use strict";

describe("Rocketship", function() {

  beforeEach(function() {
    Rocketship.coords = {x:0, y:0};
  });

  it("up function", function() {
    Rocketship.up();
    expect(Rocketship.coords).toEqual({x: 0, y: 1});
  });
  it("right function", function() {
    Rocketship.right();
    expect(Rocketship.coords).toEqual({x: 1, y: 0});
  });
  it("down function", function() {
    Rocketship.down();
    expect(Rocketship.coords).toEqual({x: 0, y: -1});
  });
  it("left function", function() {
    Rocketship.left();
    expect(Rocketship.coords).toEqual({x: -1, y: 0});
  });
  it("object method chaining - up and right", function() {
    Rocketship.up()
      .up()
      .up()
      .right()
      .right();
    expect(Rocketship.coords).toEqual({x: 2, y: 3});
  });
  it("object method chaining - left and down", function() {
    Rocketship.down()
      .down()
      .down()
      .down()
      .down()
      .left()
      .left()
      .left();
    expect(Rocketship.coords).toEqual({x: -3, y: -5});
  });
  it("object method chaining - up, right, down and left", function() {
    Rocketship.up()
      .right()
      .down()
      .left()
    expect(Rocketship.coords).toEqual({x: 0, y: 0});
  });
});
