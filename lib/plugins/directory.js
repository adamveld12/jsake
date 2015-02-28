var fs = require("fs");

module.exports.extend = function(){
  this.directory = function (name, callback){
    this.task(name, function(){
      var result = fs.mkdirSync(name);
      if (result.error !== null)
        callback.call(this);
      else throw result.error
    });
  };

  this.file = function(file, callback){
    this.task(file, function(){
      var result = fs.fileSync(file);
      if (result.error !== null)
        callback.call(this);
      else throw result.error
    });
  };
};
