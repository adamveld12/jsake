var make = require("../index.js");

make.debug();

make.task("default", function(){
  this.sh("ls");
}).describe("Prints the files in the current working directory.");

make.execute("default");
make.help();
