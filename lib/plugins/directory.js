var fs = require("fs");

module.exports.extend = function(){
  this.directory = function (directoryName, callback){
    this.task(directoryName, function(){
      var result = fs.mkdirSync(directoryName);
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
