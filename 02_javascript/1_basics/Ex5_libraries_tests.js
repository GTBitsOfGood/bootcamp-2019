describe("Example 5.1: toolbox.countEven()", function() {
  it('toolbox.countEven(0) -> []', function() {
    expect(toolbox.countEven(0)).toEqual([]);
  });
  it('toolbox.countEven(1) -> [0]', function() {
    expect(toolbox.countEven(1)).toEqual([0]);
  });
  it('toolbox.countEven(10) -> [0, 2, 4, 6, 8]', function() {
    expect(toolbox.countEven(10)).toEqual([0, 2, 4, 6, 8]);
  });
});

describe("Exercise 5.2: toolbox.indexOf()", function() {
  it('toolbox.indexOf([], 1) -> -1', function() {
    expect(toolbox.indexOf([], 1)).toEqual(-1);
  });
  it('toolbox.indexOf([1], 1) -> 0', function() {
    expect(toolbox.indexOf([1], 1)).toEqual(0);
  });
  it('toolbox.indexOf([2, 2, 1, 1], 1) -> 2', function() {
    expect(toolbox.indexOf([2, 2, 1, 1], 1)).toEqual(2);
  });
});

describe("Exercise 5.3: toolbox.lastIndexOf()", function() {
  it('toolbox.lastIndexOf([], 1) -> -1', function() {
    expect(toolbox.lastIndexOf([], 1)).toEqual(-1);
  });
  it('toolbox.lastIndexOf([1, 1], 1) -> 1', function() {
    expect(toolbox.lastIndexOf([1, 1], 1)).toEqual(1);
  });
  it('toolbox.lastIndexOf([2, 2, 1, 1], 1) -> 3', function() {
    expect(toolbox.lastIndexOf([2, 2, 1, 1], 1)).toEqual(3);
  });
});

describe("Exercise 5.4 toolbox.negate(fun)", function() {
  it('toolbox.negate isEven()', function() {
    var isEven = function(n) {
      return n % 2 == 0;
    };
    var isOdd = toolbox.negate(isEven);
    expect(isEven(2)).toBe(true);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(5)).toBe(true);
    expect(isOdd(0)).toBe(false);
  });
});

describe("Exercise 5.5 toolbox.reject(array, fun)", function() {
  function isEven(n) {
    return (n % 2) == 0;
  }
  it('toolbox.reject([2], isEven) -> []', function() {
    expect(toolbox.reject([2], isEven)).toEqual([]);
  });
  it('toolbox.reject([1, 2, 3, 4, 5, 6], isEven) -> [1, 3, 5]', function() {
    expect(toolbox.reject([1, 2, 3, 4, 5, 6], isEven)).toEqual([1, 3, 5]);
  });

  function isLong(string) {
    return string.length > 8;
  }
  it("toolbox.reject(['a', 'abc', 'abcdefghijk'], isLong) -> ['a', 'abc']", function() {
    expect(toolbox.reject(['a', 'abc', 'abcdefghijk'], isLong)).toEqual(['a', 'abc']);
  });
});

describe("Bonus Exercise 5.6: toolbox.differance(array1, array2)", function() {
  it('toolbox.difference([], []) -> []', function() {
    expect(toolbox.difference([], [])).toEqual([]);
  });
  it('toolbox.difference([1, 2, 3], [4]) -> [1, 2, 3]', function() {
    expect(toolbox.difference([1, 2, 3], [4])).toEqual([1, 2, 3]);
  });
  it('toolbox.difference([1, 2, 3, 1], [3, 2, 1]) -> []', function() {
    expect(toolbox.difference([1, 2, 3, 1], [3, 2, 1])).toEqual([]);
  });
  it('toolbox.difference([1, 2, 3, 4, 5], [5, 2, 10]) -> [1, 3, 4]', function() {
    expect(toolbox.difference([1, 2, 3, 4, 5], [5, 2, 10])).toEqual([1, 3, 4]);
  });
});
