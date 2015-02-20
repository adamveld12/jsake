# JSaké

[![wercker status](https://app.wercker.com/status/76c7286dfd86332f9c9e53291f18ae1e/m/master "wercker status")](https://app.wercker.com/project/bykey/76c7286dfd86332f9c9e53291f18ae1e)


[![Circle CI](https://circleci.com/gh/adamveld12/jsake.svg?style=svg)](https://circleci.com/gh/adamveld12/jsake)

Yet another javascript build tool YAJSBT

This is me letting out my frustrations with grunt/gulp, their plugin wrappers (that are slow to be updates in some cases) for all of my favorite js libs, and the need to remove a lot of the boilerplate I sometimes write when I opt for  [NPM as a build tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/). I wanted something that felt like [Rake](https://github.com/ruby/rake) but with a bit more simplicity. Something that fits this role probably already exists, but I am too lazy to look and my JS Skillz are a bit rusty and I need an excuse to write code.

## How to build

### Setup
  1. `npm install`
  2. Run tests with `npm test`

## Hit the ground running

Register some tasks like so:
```js
  var make = require("jsake");

	// if no name is defined, the function is registered as 'default'
  make.task(function(){
    this.log("echo hello world");
  }).describe("Prints hello world to the console.");

	// tasks can take arguments
  make.task(function(a, b){
    this.log(a + b);
  }).describe("Takes two numbers and adds them");

	// register a task with the name 'ls'
  make.task("ls", function(){
		// shell commands are ran synchronously, so you don't have to enter callback hell.
    this.sh("ls");
  }).describe("Prints the files in the current working directory.");
```

You can run tasks programmatically:
```js
	// execute the default task
  make.execute();

	// execute our ls task
  make.execute("ls");

	// pass some arguments
  make.execute("add", 1, 2);

  // Print the task descriptions to std out
  make.help();
```

## Contributing changes

Please feel free to open issues and pull requests. Everyone's code is welcome with open arms.

## License
  MIT license, feel free to do any horrible or fantastic thing you want with this code
