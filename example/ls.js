var make = require("../index.js");

make.task("default", function(){
  this.sh("ls -la");
}).describe("Prints the files in the current working directory.");

make.execute("default");