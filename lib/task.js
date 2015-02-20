var shell = require("./shell.js"),
    log = require("./log.js");

var context = {
  sh: shell,
  log: log.log,
  info: log.info,
  trace: log.trace,
  error: function() { 
    log.error.apply(log, arguments);
  }
};

function Task(name, callback){
  this.name = name;
  this.callback = callback;
  this.descriptionText = "";
};

Task.prototype.execute = function(){
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
