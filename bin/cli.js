#! /usr/bin/env node

var make = require("../index.js"),
    fs = require("fs"),
    args = process.argv.slice(2),
    utils = require("util"),
    jsakefileUrl = process.env.PWD + "/jsakefile";


// apply jsake api to global
for (var i in make){
  global[i] = make[i];
}

if (args[0] === "--help" || args[0] === "-h"){
  printUsage();
  printHelp();
} 
else if (args[0] === "--init" || args[0] === "-i"){
  initJsakefile();
}
// run tasks
else {
  loadTasksFromPwd(function(){
      make.execute.apply(make, args);
  });
}

function printUsage(){
  console.info("usage:\n\tjsake <task> [taskArgs...]");
  console.info("options:\n\t--help, -h: Print the available tasks and their descriptions.");
  console.info("\t--init, -i: Creates a jsakefile in the current directory, if one does not exist.");
  console.info("\n");
}

function initJsakefile(){
  var jsakefileContents = [ 
        "task(function(){",
        "\tthis.sh('echo hello world');",
        "}).describe('Prints \"hello world\" to the terminal.');\n"
       ].join("\n");
  fs.readFile(jsakefileUrl, function(err, data){
    if (err)
      fs.writeFile(jsakefileUrl, jsakefileContents, function(err){
        if (err) console.error("Could not generate the jsakefile.");
      });
  });
}

function printHelp(){
  loadTasksFromPwd(function(){
    console.info("\n\tAvailable Tasks\n");
    console.info(make.help());
    console.info("\n");
  });
}

function loadTasksFromPwd(callback){
  fs.readFile(jsakefileUrl, function(err, data){
    if (err) {
      console.error('A valid "jsakefile" could not be found in the current directory.');
      console.error('Generate one with --init, -i.');
      process.exit(-1);
    } else {
      // init the make var with the tasks
      require(jsakefileUrl);
      callback();
    }
  });
}
