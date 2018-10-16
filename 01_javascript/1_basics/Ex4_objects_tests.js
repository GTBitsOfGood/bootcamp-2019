describe("Exercise 4.1: values()", function() {
  it("toolbox.values({}) -> []", function() {
    expect(toolbox.values({})).toEqual([]);
  });
  it("toolbox.values({a: 1}) -> [1]", function() {
    expect(toolbox.values({ a: 1 })).toEqual([1]);
  });
  it("toolbox.values({a: 1, b: 1}) -> [1, 1]", function() {
    var values = toolbox.values({ a: 1, b: 1 });
    expect(values).toEqual(jasmine.arrayContaining([1, 1]));
    expect([1, 1]).toEqual(jasmine.arrayContaining(values));
  });
  it("toolbox.values({a: 1, b: 1, c: 2}) -> [1, 1, 2]", function() {
    var values = toolbox.values({ a: 1, b: 1, c: 2 });
    expect(values).toEqual(jasmine.arrayContaining([1, 1, 2]));
    expect([1, 1, 2]).toEqual(jasmine.arrayContaining(values));
  });
});

describe("Exercise 4.2: pairs()", function() {
  it("toolbox.pairs({}) -> []", function() {
    expect(toolbox.pairs({})).toEqual([]);
  });
  it("toolbox.pairs({a: 1}) -> [['a', 1]]", function() {
    expect(toolbox.pairs({ a: 1 })).toEqual([["a", 1]]);
  });
  it("toolbox.pairs({a: 1, b: 1}) -> [['a', 1], ['b', 1]]", function() {
    var pairs = toolbox.pairs({ a: 1, b: 1 });
    var expected = [["a", 1], ["b", 1]];
    expect(pairs).toEqual(jasmine.arrayContaining(expected));
    expect(expected).toEqual(jasmine.arrayContaining(pairs));
  });
  it("toolbox.pairs({a: 1, b: 1, c: 2}) -> [['a', 1], ['b', 1], ['c', 2]]", function() {
    var pairs = toolbox.pairs({ a: 1, b: 1, c: 2 });
    var expected = [["a", 1], ["b", 1], ["c", 2]];
    expect(pairs).toEqual(jasmine.arrayContaining(expected));
    expect(expected).toEqual(jasmine.arrayContaining(pairs));
  });
});

describe("Example 4.3: filterKey()", function() {
  it("filterKey({}, function() {}) -> {}", function() {
    expect(toolbox.filterKey({}, function() {})).toEqual({});
  });
  it("filterKey({aa: 1, ab: 2, ba: 3}, function(key) { return key.indexOf('a') === 0; }) -> {aa: 1, ab: 2}", function() {
    function startsWithA(string) {
      return string.indexOf("a") === 0;
    }
    expect(toolbox.filterKey({ aa: 1, ab: 2, ba: 3 }, startsWithA)).toEqual({
      aa: 1,
      ab: 2
    });
  });
});

describe("Exercise 4.4: pick()", function() {
  it("pick({}, []) -> {}", function() {
    expect(toolbox.pick({}, [])).toEqual({});
  });
  it("pick({a: 1}, []) -> {}", function() {
    expect(toolbox.pick({ a: 1 }, [])).toEqual({});
  });
  it("pick({a: 1}, ['b']) -> {}", function() {
    expect(toolbox.pick({ a: 1 }, ["b"])).toEqual({});
  });
  it("pick({a: 1}, ['a', 'b']) -> {a: 1}", function() {
    expect(toolbox.pick({ a: 1 }, ["a", "b"])).toEqual({ a: 1 });
  });
  it("pick({a: 1, b: 2}, ['a', 'b']) -> {a: 1, b: 2}", function() {
    expect(toolbox.pick({ a: 1, b: 2 }, ["a", "b"])).toEqual({ a: 1, b: 2 });
  });
});

describe("Bonus Exercise 4.5: propertyOf()", function() {
  it("toolbox.propertyOf({a: 1, b: 2})('a') -> 1", function() {
    expect(toolbox.propertyOf({ a: 1, b: 2 })("a")).toBe(1);
  });
});
