var fs = require("fs");

module.exports.extend = function(){
  this.directory = function (name, callback){
    this.task(name, function(){
      var result = fs.mkdirSync(name);
      callback.call(this);
    });
  };
};
