var context = {
  shell: function(){},
  log: function(){}
};

function Task(name, callback){
  this.name = name;
  this.callback = callback;
  this.description = "";
};

Task.prototype.execute = function(){
  this.callback.apply(context, arguments);
};

Task.prototype.description = function(descriptionText){
  if (descriptionText) this.description = descriptionText;
   else return this.name + ": " + this.description;
};

Task.prototype.api = function(){
  return {
    describe: this.description
  };
};

module.exports = Task;
