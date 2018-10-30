describe("Exercise 1.1: count()", function() {
  var count = toolbox.count;
  it('count(0) -> []', function() {
    expect(count(0)).toEqual([]);
  });
  it('count(1) -> [0]', function() {
    expect(count(1)).toEqual([0]);
  });
  it('count(10) -> [0,1,2,3,4,5,6,7,8,9]', function() {
    expect(count(10)).toEqual([0,1,2,3,4,5,6,7,8,9]);
  });
});

describe("Exercise 1.2: first()", function() {
  var first = toolbox.first;
  it("first([0]) -> 0", function() {
    expect(first([0])).toBe(0);
  });
  it("first([1, 2, 3]) -> 1", function() {
    expect(first([1, 2, 3])).toBe(1);
  });
  it("first(['a', 'b', 'c']) -> 'a'", function() {
    expect(first(['a', 'b', 'c'])).toBe('a');
  })
});

describe("Exercise 1.3: last()", function() {
  var last = toolbox.last;
  it("last([0]) -> 0", function() {
    expect(last([0])).toBe(0);
  });
  it("last([1, 2, 3]) -> 3", function() {
    expect(last([1, 2, 3])).toBe(3);
  });
  it("last(['a', 'b', 'c']) -> 'c'", function() {
    expect(last(['a', 'b', 'c'])).toBe('c');
  })
});

describe("Exercise 1.4: repeat()", function() {
  var repeat = toolbox.repeat;
  it("repeat(0, [1]) -> []", function() {
    expect(repeat(0, [1])).toEqual([]);
  });
  it("repeat(10, []) -> []", function() {
    expect(repeat(10, [])).toEqual([]);
  });
  it("repeat(1, [1, 2, 3]) -> [1, 2, 3]", function() {
    expect(repeat(1, [1, 2, 3])).toEqual([1, 2, 3]);
  });
  it("repeat(3, [1, 2, 3]) -> [1, 2, 3, 1, 2, 3, 1, 2, 3]", function() {
    expect(repeat(3, [1, 2, 3])).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
  });
});

describe("Exercise 1.5: reverse()", function() {
  var reverse = toolbox.reverse;
  it("reverse([]) -> []", function() {
    expect(reverse([])).toEqual([]);
  });
  it("reverse([1]) -> [1]", function() {
    expect(reverse([1])).toEqual([1]);
  });
  it("reverse([1, 2, 3]) -> [3, 2, 1]", function() {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });
});

describe("Exercise 1.6: firstN()", function() {
  it('firstN("hello", 0) -> ""', function() {
    expect(toolbox.firstN("hello", 0)).toBe("");
  });
  it('firstN("hello", 2) -> "he"', function() {
    expect(toolbox.firstN("hello", 2)).toBe("he");
  });
});

describe("Exercise 1.7: lastN()", function() {
  it('lastN("hello", 0) -> ""', function() {
    expect(toolbox.lastN("hello", 0)).toBe("");
  });
  it('lastN("hello", 2) -> "lo"', function() {
    expect(toolbox.lastN("hello", 2)).toBe("lo");
  });
});

describe("Exercise 1.8: startsWith()", function() {
  it('startsWith("hello", "") -> true', function() {
    expect(toolbox.startsWith("hello", "")).toBe(true);
  });
  it('startsWith("hello", "h") -> true', function() {
    expect(toolbox.startsWith("hello", "h")).toBe(true);
  });
  it('startsWith("hello", "hello") -> true', function() {
    expect(toolbox.startsWith("hello", "hello")).toBe(true);
  });
  it('startsWith("hello", "hellos") -> false', function() {
    expect(toolbox.startsWith("hello", "hellos")).toBe(false);
  });
  it('startsWith("hello", "e") -> false', function() {
    expect(toolbox.startsWith("hello", "e")).toBe(false);
  });
  it('startsWith("hello", "x") -> false', function() {
    expect(toolbox.startsWith("hello", "x")).toBe(false);
  });
});

describe("Exercise 1.9: replaceAll()", function() {
  it('replaceAll("hello world", "hello", "goodbye") -> "goodbye world"', function() {
    expect(toolbox.replaceAll("hello world", "hello", "goodbye")).toBe("goodbye world");
  });
  it('replaceAll("hello", "l", "x") -> "hexxo"', function() {
    expect(toolbox.replaceAll("hello", "l", "x")).toBe("hexxo");
  });
});
