describe("Example 3.1: sum()", function() {
  var sum = toolbox.sum;
  it('sum([]) -> 0', function() {
    expect(sum([])).toBe(0);
  });
  it('sum([1]) -> 1', function() {
    expect(sum([1])).toBe(1);
  });
  it('sum([1, 2, -3]) -> 0', function() {
    expect(sum([1, 2, -3])).toBe(0);
  });
});

describe("Exercise 3.2: product()", function() {
  var product = toolbox.product;
  it('product([]) -> 1', function() {
    expect(product([])).toBe(1);
  });
  it('product([2]) -> 2', function() {
    expect(product([2])).toBe(2);
  });
  it('product([2, 0]) -> 0', function() {
    expect(product([2, 0])).toBe(0);
  });
  it('product([4, -3]) -> -12', function() {
    expect(product([4, -3])).toBe(-12);
  });
});

describe("Example 3.3: transform()", function() {
  var transform = toolbox.transform;
  function double(n) {
    return n * 2;
  }
  function upperCase(s) {
    return s.toUpperCase();
  }
  it('transform([1, 2, 3], double) -> [2, 4, 6]', function() {
    expect(transform([1, 2, 3], double)).toEqual([2, 4, 6]);
  });
  it('transform(["a", "abc", "d e"], upperCase) -> ["A", "ABC", "D E"]', function() {
    expect(transform(["a", "abc", "d e"], upperCase)).toEqual(["A", "ABC", "D E"]);
  });
});

describe("Exercise 3.4: filter()", function() {
  var filter = toolbox.filter;
  function isEven(n) {
    return (n % 2) == 0;
  }
  it('filter([1, 3, 5], isEven) -> []', function() {
    expect(filter([1, 3, 5], isEven)).toEqual([]);
  })
  it('filter([1, 2, 3, 4, 5, 6], isEven) -> [2, 4, 6]', function() {
    expect(filter([1, 2, 3, 4, 5, 6], isEven)).toEqual([2, 4, 6]);
  });

  function isLongerThan5Letters(string) {
    return string.length > 5;
  }

  it("filter(['a', 'abc'], isLongerThan5Letters) -> []", function() {
    expect(filter(['a', 'abc'], isLongerThan5Letters)).toEqual([]);
  });
  it("filter(['a', 'abc', 'abcdefghi'], isLongerThan5Letters) -> ['abcdefghi']", function() {
    expect(filter(['a', 'abc', 'abcdefghi'], isLongerThan5Letters)).toEqual(['abcdefghi']);
  });
});

describe("Exercise 3.5: every()", function() {
  var every = toolbox.every;
  function isEven(n) {
    return (n % 2) == 0;
  }

  it('every([], isEven) -> true', function() {
    expect(every([], isEven)).toBe(true);
  });
  it('every([2, 4], isEven) -> true', function() {
    expect(every([2, 4], isEven)).toBe(true);
  });
  it('every([1, 2, 3, 4, 5, 6], isEven) -> false', function() {
    expect(every([1, 2, 3, 4, 5, 6], isEven)).toBe(false);
  });

  function isLongerThan5Letters(string) {
    return string.length > 5;
  }
  it('every([], isLongerThan5Letters) -> true', function() {
    expect(every([], isLongerThan5Letters)).toBe(true);
  });
  it("every(['abcdefghijk'], isLongerThan5Letters) -> true", function() {
    expect(every(['abcdefghijk'], isLongerThan5Letters)).toBe(true);
  });
  it("every(['a', 'abc', 'abcdefghijk'], isLongerThan5Letters) -> false", function() {
    expect(every(['a', 'abc', 'abcdefghijk'], isLongerThan5Letters)).toBe(false);
  });
});

describe("Exercise 3.6: find()", function() {
  var find = toolbox.find;
  function isEven(n) {
    return (n % 2) == 0;
  }

  it('find([], isEven) -> -1', function() {
    expect(find([], isEven)).toBe(-1);
  });
  it('find([2, 4], isEven) -> 0', function() {
    expect(find([2, 4], isEven)).toBe(0);
  });
  it('find([1, 3, 5], isEven) -> -1', function() {
    expect(find([1, 3, 5], isEven)).toBe(-1);
  });
  it('find([1, 2, 3, 4, 5, 6], isEven) -> 1', function() {
    expect(find([1, 2, 3, 4, 5, 6], isEven)).toBe(1);
  });
});

describe("Bonus Exercise 3.7: zip()", function() {
  var zip = toolbox.zip;
  it('zip(["moe", "larry", "curly"], [30, 40, 50]) -> [["moe", 30], ["larry", 40], ["curly", 50]]', function() {
    expect(zip(["moe", "larry", "curly"], [30, 40, 50])).toEqual([["moe", 30], ["larry", 40], ["curly", 50]]);
  });
});
