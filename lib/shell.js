var cp = require("child_process");


function shell(shellCommand, callback, options){
  options = options || {};
  var defaultOptions = {
      // set the timeout to five seconds
      timeout: options.timeout || 5E3
  };

  var result = cp.execSync(shellCommand, defaultOptions);

  if (callback != null){
    if (result.error !== null) {
      callback(result.toString());
    } else console.error("shit exploded");
  } else {
    console.log(result.toString());
  }

};

module.exports = shell;
