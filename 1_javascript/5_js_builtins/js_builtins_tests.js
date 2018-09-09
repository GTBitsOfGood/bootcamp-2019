describe("builtins.trim(str)", function() {
  it("builtins.trim('  Horizons  ') -> 'Horizons'", function() {
    expect(builtins.trim('  Horizons  ')).toEqual('Horizons');
  });
  it("builtins.trim('Hello World!    ') -> 'Hello World!'", function() {
    expect(builtins.trim('Hello World!    ')).toEqual('Hello World!');
  });
});

describe("builtins.search(sourceString, searchString)", function() {
  it("builtins.search('Horizons', 'o') -> true", function() {
    expect(builtins.search('Horizons', 'o')).toEqual(true);
  });
  it("builtins.search('Horizons', 'oz') -> false", function() {
    expect(builtins.search('Horizons', 'oz')).toEqual(false);
  });
  it("builtins.search('rizo', 'Horizons') -> false", function() {
    expect(builtins.search('rizo', 'Horizons')).toEqual(false);
  });
  it("builtins.search('', 'Horizons') -> false", function() {
    expect(builtins.search('', 'Horizons')).toEqual(false);
  });
  it("builtins.search('Horizons', '') -> true", function() {
    expect(builtins.search('Horizons', '')).toEqual(true);
  });
  it("builtins.search('Horizons', 'h') -> false", function() {
    expect(builtins.search('Horizons', 'h')).toEqual(false);
  });
});

describe("builtins.parseQuantity(str)", function() {
  it("builtins.parseQuantity('1 tool') -> 1", function() {
    expect(builtins.parseQuantity('1 tool')).toEqual(1);
  });
  it("builtins.parseQuantity('8 buckets') -> 8", function() {
    expect(builtins.parseQuantity('8 buckets')).toEqual(8);
  });
  it("builtins.parseQuantity('0 computers') -> 0", function() {
    expect(builtins.parseQuantity('0 computers')).toEqual(0);
  });
});

describe("builtins.reverse(arr)", function() {
  it("builtins.reverse([1, 2, 3]) -> [3, 2, 1]", function() {
    expect(builtins.reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });
  it("builtins.reverse(['dogs', 'cats', 'moose']) -> ['moose', 'cats', 'dogs']", function() {
    expect(builtins.reverse(['dogs', 'cats', 'moose'])).toEqual(['moose', 'cats', 'dogs']);
  });
  it("builtins.reverse([]) -> []", function() {
    expect(builtins.reverse([])).toEqual([]);
  });
  it("builtins.reverse([123]) -> [123]", function() {
    expect(builtins.reverse([123])).toEqual([123]);
  });
});

describe("builtins.isEqual(a, b)", function() {
  it("builtins.isEqual([1, 2, 3], [1, 2, 3]) -> true", function() {
    expect(builtins.isEqual([1, 2, 3], [1, 2, 3])).toEqual(true);
  });
  it("builtins.isEqual(['1', '2', '3'], [1, 2, 3]) -> false", function() {
    expect(builtins.isEqual(['1', '2', '3'], [1, 2, 3])).toEqual(false);
  });
  it("builtins.isEqual([3, 2, 1], [1, 2, 3]) -> false", function() {
    expect(builtins.isEqual([3, 2, 1], [1, 2, 3])).toEqual(false);
  });
  it("builtins.isEqual([], [1, 2, 3]) -> false", function() {
    expect(builtins.isEqual([], [1, 2, 3])).toEqual(false);
  });
  it("builtins.isEqual([1, 2, 3], []) -> false", function() {
    expect(builtins.isEqual([1, 2, 3], [])).toEqual(false);
  });
  it("builtins.isEqual([], []) -> true", function() {
    expect(builtins.isEqual([], [])).toEqual(true);
  });
});

describe("builtins.isPalindrome(arr)", function() {
  it("builtins.isPalindrome([1, 2, 3, 2, 1]) -> true", function() {
    expect(builtins.isPalindrome([1, 2, 3, 2, 1])).toEqual(true);
  });
  it("builtins.isPalindrome([1, 2, 3, 4, 5]) -> false", function() {
    expect(builtins.isPalindrome([1, 2, 3, 4, 5])).toEqual(false);
  });
  it("builtins.isPalindrome(['1', '2', '3', 2, 1]) -> false", function() {
    expect(builtins.isPalindrome(['1', '2', '3', 2, 1])).toEqual(false);
  });
});

describe("builtins.sortByValue(arr)", function() {
  it("builtins.sortByValue([10, 1, 5, 4]) -> [1, 4, 5, 10]", function() {
    expect(builtins.sortByValue([10, 1, 5, 4])).toEqual([1, 4, 5, 10]);
  });
  it("builtins.sortByValue([1, 2, 3]) -> [1, 2, 3]", function() {
    expect(builtins.sortByValue([1, 2, 3])).toEqual([1, 2, 3]);
  });
  it("builtins.sortByValue([0, -6, -6]) -> [-6, -6, 0]", function() {
    expect(builtins.sortByValue([0, -6, -6])).toEqual([-6, -6, 0]);
  });
});

describe("builtins.sortByLength(arr)", function() {
  it("builtins.sortByLength([[1, 2, 3], [4, 5], [6]]) -> [[6], [4, 5], [1, 2, 3]]", function() {
    expect(builtins.sortByLength([[1, 2, 3], [4, 5], [6]])).toEqual([[6], [4, 5], [1, 2, 3]]);
  });
  it("builtins.sortByLength([[], [''], []]) -> [[], [], ['']]", function() {
    expect(builtins.sortByLength([[], [''], []])).toEqual([[], [], ['']]);
  });
});

describe("builtins.flatten(arr)", function() {
  it("builtins.flatten([[1, 2, 3], [4, 5], [6]]) -> [1, 2, 3, 4, 5, 6]", function() {
    expect(builtins.flatten([[1, 2, 3], [4, 5], [6]])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it("builtins.flatten([[], [''], []]) -> ['']", function() {
    expect(builtins.flatten([[], [''], []])).toEqual(['']);
  });
  it("builtins.flatten([]) -> []", function() {
    expect(builtins.flatten([])).toEqual([]);
  });
});