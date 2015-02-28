var Task = require('./lib/task'),
    taskMap = {};

function executeTask(name){
  // default to the 'default' task
  name = name || "default";

  var args = Array.prototype.slice.call(arguments, 1),
  task = taskMap[name];

  if (!task){
    throw new Error("No task for '" + name + "' defined.");
  }

  task.execute.apply(task, args);

  // return a status code for every task execution so we can signal errors
  return 0;
};

function registerTask(name, callback){

  if (typeof(name) === "function") {
    callback = name;
    name = "default";
  }

  if (!name)
    throw new Error("A name must be defined for this task.");

  if (taskMap[name])
    throw new Error("A task named '" + name + "' has already been added.");

  if (!callback)
    throw new Error("A callback must be defined for a Task.");

  if (typeof(callback) !== "function")
    throw new Error("The callback must be a function.");

  var task = taskMap[name] = new Task(name, callback);

  // returns a public api for adding metadata onto a task
  return task.api();
};


function listTasks() {
  var vals = [];
  for (var taskName in taskMap){
    vals.push(taskMap[taskName].description());
  }
  return vals;
};

function helpPrint(){
  return listTasks().join("\n");
};

var api = {
  execute: executeTask,
  task: registerTask,
  list: listTasks,
  help: helpPrint,
};

require("./lib/plugins").extend(api);

module.exports = api;
