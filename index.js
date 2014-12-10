/**
 *  Task types
 *    Task: runs all dependent tasks in order before executing body
 *    ConcurrentTask: runs all dependent tasks in parallel before executing body
 *    DirectoryTask: creates a directory relative to root that matches the name of this task
 */
/**
 * Helpers
 *    Sh: execute a command in the shell
 *    Log: log a message to the shell
 *      Error: log an error - returns a non-zero status code if invoked
 *      Trace: log for debugging
 *
 **/
var Task = require('./lib/task'),
    taskMap = {};

module.exports = {
  execute: executeTask,
  task: registerTask,
  //concurrent: concurrentTask,
  //directory: directoryTask,
};

function executeTask(name){
  var taskParameters = Array.prototype.slice.apply(arguments, 1);

  var taskToExecute = taskMap[name];
  if(taskToExecute) {
    return taskToExecute.execute(taskParameters);
  }
  else 
    throw "A task named " + name + " has not been defined.";
};

function registerTask(){
  var params = validateTaskParameters.apply(arguments);
  var newTask = new Task(params.name, params.dependencies, params.callback);

  if(!taskMap[newTask.name])
    throw new "A task named " + newTask.name + " has already been defined.";
  else
    taskMap[newTask.name] = newTask;
};

/**
 * Validates a task's input parameters
 */
function validateTaskParameters(){
  var argumentsArray = Array.prototype.slice.apply(arguments);

  // maybe allow named functions as a valid input
  if(argumentsArray.length <= 1)
    throw "must be: task(name, [deps, ], callback). name and callback must be defined";

  var name = argumentsArray = argumentsArray[0];
  var deps = argumentsArray.splice(1, argumentsArray.length - 1);
  var callback = argumentsArray = argumentsArray[argumentsArray.length - 1];

  if (!name || name == "") {
    throw "A task's name must not be undefined or an empty string";
  }

  if (typeof callback != "function")
    throw "the last argument must be a function";

  return {
    name: name,
    deps: dependencies,
    callback: callback
  };
};


