describe("Exercise 2.1: getMultiplier()", function() {
  var getMultiplier = toolbox.getMultiplier;
  it("getMultiplier(0) returns a function", function() {
    expect(typeof getMultiplier(0)).toBe("function");
  });
  it("getMultiplier(2)(3) -> 6", function() {
    expect(getMultiplier(2)(3)).toBe(6);
  });
  it("getMultiplier(0)(100) -> 0", function() {
    expect(getMultiplier(0)(100)).toBe(0);
  });
});

describe("Exercise 2.2: only()", function() {
  var only = toolbox.only;
  var count = 0;
  function inc() {
    count++;
  }

  beforeEach(function() {
    count = 0;
  });

  it("only(1, f) runs f only once", function() {
    var f = only(1, inc);
    for (var i = 0; i < 10; i++) {
      f();
    }
    expect(count).toBe(1);
  });
  it("calling only(2, f) less than 1 time should call f() once", function() {
    var f = only(2, inc);
    f();
    expect(count).toBe(1);
  });
  it("calling only(3, f) more than 3 times should call f() 3 times", function() {
    var f = only(3, inc);
    for (var i = 0; i < 10; i++) {
      f();
    }
    expect(count).toBe(3);
  });
});
