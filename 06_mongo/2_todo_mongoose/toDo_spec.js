"use strict";
var child_process = require('child_process');

describe("Test toDo.js", function() {
  it("Show with no tasks on model", function() {
    var cmd = 'node toDo.js show -t qwertyuiop';
    var stdout = child_process.execSync(cmd, {encoding:'utf-8'});
    expect(stdout).toBe('')
  });

  it("Creating new task from blank", function() {
    child_process.execSync('node toDo.js add Do the dishes');
    var stdout = runAndCleanStdout('node toDo.js show')
    expect(stdout).toContain("Task: Do the dishes, Priority: 1, Completed: false")
  });

  it("creating many tasks, with priority flags", function() {
    generateTasks();
    var stdout = runAndCleanStdout('node toDo.js show')
    expect(stdout).toContain("Task: Do the dishes, Priority: 1, Completed: false")
    expect(stdout).toContain("Task: Fix tv, Priority: 2, Completed: false")
    expect(stdout).toContain("Task: Call the internet guy, Priority: 3, Completed: false")
  });

  it("Show task with name", function() {
    generateTasks();
    var stdout = runAndCleanStdout('node toDo.js show -t "Fix tv"')
    expect(stdout).toContain("Task: Fix tv, Priority: 2, Completed: false")
  });

  it("Delete task with name", function() {
    generateTasks();
    child_process.execSync('node toDo.js add "asdfghjkl qwertyuiop"');
    child_process.execSync('node toDo.js delete -t "asdfghjkl qwertyuiop"')
    var stdout = runAndCleanStdout('node toDo.js show');
    expect(stdout).not.toContain("asdfghjkl qwertyuiop");
  });
});

function runAndCleanStdout(cmd){
  var stdout = child_process.execSync(cmd, {encoding:'utf-8'});
  stdout = stdout.split(/\r\n|\r|\n/);
  stdout.splice(-1, 1);
  return stdout;
}

function generateTasks(){
  child_process.execSync('node toDo.js add Do the dishes');
  child_process.execSync('node toDo.js add Fix tv --priority 2');
  child_process.execSync('node toDo.js add Call the internet guy -p 3');
}
