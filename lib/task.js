var events = require("events"),
    shell = require("./shell.js"),
    log = require("./log.js");


function Task(name, callback){
  this.events = new events.EventEmitter();
  this.name = name;
  this.callback = callback;
  this.descriptionText = "";
};

Task.prototype.execute = function(){
  var self = this;
  var completed = false,
  context = {
    complete: function() {
      if (!completed) {
        complete = true;
        self.events.emit("complete");
      }
    },
    sh: shell,
    log: log.log,
    info: log.info,
    trace: log.trace,
    error: function() {
      console.error.apply(console, arguments);
      self.events.emit("error");
    }
  };

  this.callback.apply(context, arguments);
};

Task.prototype.description = function(descriptionText){
  if (descriptionText) {
    if (typeof(descriptionText) !== "string") throw new Error("description text must be a string");
    this.descriptionText = descriptionText;
  } else
    return this.name + ": " + this.descriptionText;
};

Task.prototype.api = function(){
  var self = this,
  obj = {
    describe: function(){ 
      self.description.apply(self, arguments); 
      return obj; 
    },
    description: function(){ return self.description(); }
  };
  return obj;
};

module.exports = Task;
