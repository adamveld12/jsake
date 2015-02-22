# JSaké

[![wercker status](https://app.wercker.com/status/76c7286dfd86332f9c9e53291f18ae1e/m/master "wercker status")](https://app.wercker.com/project/bykey/76c7286dfd86332f9c9e53291f18ae1e)


[![Circle CI](https://circleci.com/gh/adamveld12/jsake.svg?style=svg)](https://circleci.com/gh/adamveld12/jsake)

Yet another javascript build tool YAJSBT

Because I needed an excuse to write some javascript.

## How to build

### Setup
  1. `npm install`
  2. Run tests with `npm test`

## Hit the ground running

Install it globally 
```sh
npm install -g jsake
```

get some help
```sh
jsake --help # -h
```

Register some tasks like so:
```js
// if no name is defined, the function is registered as 'default'
task(function(){
	this.log("echo hello world");
}).describe("Prints hello world to the console.");

// tasks can take arguments
task("add", function(a, b){
	this.log(a + b);
}).describe("Takes two numbers and adds them");

// register a task with the name 'ls'
task("ls", function(){
	// shell commands are ran synchronously
	this.sh("ls");
}).describe("Prints the files in the current working directory.");
```

execute a task:
```sh
jsake add 1 2
```

## Contributing changes

Please feel free to open issues and pull requests. Everyone's code is welcome with open arms.

## License

  MIT license, feel free to do any horrible or fantastic thing you want with this code
