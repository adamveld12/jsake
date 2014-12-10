var shell = require('./shell'),
    log = require('./log');

function Task(name, deps, workerCallback){
  var self = this;

  function fireFinished() {
    self.$$listeners.forEach(
        function forEachFinishedTaskListener(item){
          item();
        });
  };

  this.execute = function(trace) {
    if(trace) log.trace(self.name, "starting");

    // start timer here
    workerCallback.apply(this.executorContext(), arguments);

    // do a setImmediate call here
    // this *should* be the last thing fired for a given task
    setImmediate(function() {
      // finish timer
      if(trace) log.trace(self.name, "finished");

      fireFinished();
    });
  };

  this.name = name;
  this.dependencies = deps;
  this.$$listeners = [];
};

Task.prototype.onFinished = function(callback){
  this.$$listeners.push(callback);
};

Task.prototype.executorContext = function() {
  return {
    sh: shell,
    log: log,
    name: name,
    dependencies: dependencies
  };
}

module.exports = Task;
