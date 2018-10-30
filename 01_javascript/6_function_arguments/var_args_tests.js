"use strict";

describe("varArgs.numArgs(...args)", function() {
  it("varArgs.numArgs(1, 5, 'a', { 'x': 13}) -> 4", function() {
    expect(varArgs.numArgs(1, 5, 'a', {
      'x': 13
    })).toBe(4);
  });

  it("varArgs.numArgs(1, 8) -> 2", function() {
    expect(varArgs.numArgs(1, 8)).toBe(2);
  });

  it("varArgs.numArgs() -> 0", function() {
    expect(varArgs.numArgs()).toBe(0);
  });
});

describe("varArgs.makeUser(...args)", function() {
  it("varArgs.makeUser('Rex', 34) -> { 'name' : 'Rex', 'age' : 34 }", function() {
    expect(varArgs.makeUser('Rex', 34)).toEqual({ 'name' : 'Rex', 'age' : 34 });
  });

  it("varArgs.makeUser('Bob') -> { 'name': 'Bob', 'age' : 12 }", function() {
    expect(varArgs.makeUser('Bob')).toEqual({ 'name': 'Bob', 'age' : 12 });
  });

  it("varArgs.makeUser() -> { 'name': 'John Doe', 'age' : 24 }", function() {
    expect(varArgs.makeUser()).toEqual({ 'name': 'John Doe', 'age' : 24 });
  });
});

describe("varArgs.sum(...args)", function() {
  it("varArgs.sum() -> 0", function() {
    expect(varArgs.sum()).toBe(0);
  });
  
  it("varArgs.sum(1) -> 1", function() {
    expect(varArgs.sum(1)).toBe(1);
  });

  it("varArgs.sum(1, 2, 4) -> 7", function() {
    expect(varArgs.sum(1, 2, 4)).toBe(7);
  });
  
  it("varArgs.sum(1, -2, 4) -> 3", function() {
    expect(varArgs.sum(1, -2, 4)).toBe(3);
  });

});

describe("varArgs.product(...args)", function() {
  it("varArgs.product() -> 1", function() {
    expect(varArgs.product()).toBe(1);
  });
  
  it("varArgs.product(1) -> 1", function() {
    expect(varArgs.product(1)).toBe(1);
  });
  
  it("varArgs.product(1, 2, 4) -> 8", function() {
    expect(varArgs.product(1, 2, 4)).toBe(8);
  });
  
  it("varArgs.product(1, -2, 4) -> -8", function() {
    expect(varArgs.product(1, -2, 4)).toBe(-8);
  });
});

describe("varArgs.joinWith(...args)", function() {
  it("varArgs.joinWith(',') -> ''", function() {
    expect(varArgs.joinWith(',')).toBe('');
  });
  
  it("varArgs.joinWith(',', 'a', 'b') -> 'a,b'", function() {
    expect(varArgs.joinWith(',', 'a', 'b')).toBe('a,b');
  });

  it("varArgs.joinWith('.', '192', '168', '1', '1') -> '192.168.1.1'", function() {
    expect(varArgs.joinWith('.', '192', '168', '1', '1')).toBe('192.168.1.1');
  });
});
