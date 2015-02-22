var cp = require("child_process");

var defaultOptions = {
  // set the timeout to five seconds
  timeout: 5E3
},
// command[, options, callback]
shell = function() {
  var args = Array.prototype.slice.call(arguments),
  command = args[0],
  callback = args[args.length - 1];

  if (typeof(callback) !== "Function"){
    callback = void 0;
  }

  if (args.length > 2){
    for (var i in args[1]) {
      defaultOptions[i] = options[i];
    }
  }

  if (typeof(command) !== "string") {
    throw new Error("A shell command is a string");
  }

  var result = cp.execSync(command, defaultOptions);

  if (callback && result.error !== null)
    callback(result.toString());
  else
    console.log(result.toString());
};

module.exports = shell;
