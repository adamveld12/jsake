var Task = require('./lib/task'),
    taskMap = {};

function executeTask(name){
  var args = Array.prototype.slice.apply(arguments, 1),
  task = taskMap[name];

  if (!task){
    throw new Error("No task for '" + name + "' defined.");
  }

  task.execute(args);
};

function registerTask(name, callback){
  if (taskMap[name]){
    throw new Error("A task named '" + name + "' already exists.");
  }

  if (!callback){
    throw new Error("A callback must be defined for a Task.");
  }

  var task = taskMap[name] = new Task(name, callback);

  // returns a public api for adding metadata onto a task
  return task.api();
};

function listTasks() {
  var vals = [];
  for (var task in taskMap){
    vals.push(task.description());
  }
  return vals;
};

module.exports = {
  execute: executeTask,
  task: registerTask,
  list: listTasks,
  //concurrent: concurrentTask,
  //directory: directoryTask,
};
