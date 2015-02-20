var cp = require("child_process");


function shell(shellCommand, callback){
  var result = cp.execSync(shellCommand, {
      // set the timeout to five seconds for now..
      timeout: 5E3,
    });

  if (callback != null){
    if (result.error !== null) {
      callback(result.toString());
    } else console.error("shit exploded");
  } else {
    console.log(result.toString());
  }

};

module.exports = shell;
