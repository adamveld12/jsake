
var fs = require("fs");

module.exports.extend = function(){
  this.monitor = function (name, executable, callback){
    this.task(name, function(){
      var result = fs.mkdirSync(name);
      if (result.error !== null)
        callback.call(this);
      else throw result.error
    });
  };
};