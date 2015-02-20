# JSaké

[![wercker status](https://app.wercker.com/status/76c7286dfd86332f9c9e53291f18ae1e/m/master "wercker status")](https://app.wercker.com/project/bykey/76c7286dfd86332f9c9e53291f18ae1e)
[![Circle CI](https://circleci.com/gh/adamveld12/jsake.svg?style=svg)](https://circleci.com/gh/adamveld12/jsake)

Yet another javascript build tool YAJSBT

This is just a guinea pig project and I don't expect this to take off. 
I just want an imperative and simple task runner in JS that doesn't need
plugins or other nonsense to use. Something that fits this bill probably
already exists, but it doesn't mean I can't give my own shot at it.

## How to build

### Setup
  1. `npm install`
  2. Run tests with `npm test`

## Hit the ground running

install jsake globally
```sh
  npm install -g jsake
```

Create a jakefile in your root:
```sh
  touch jakefile
```

Register some tasks like so:
```js
  var make = require("jsake");

  make.task(function(){
    this.sh("ls");
  }).describe("Prints the files in the current working directory.");
```

You can now run the file from the command line:
```sh
  jake
```

You can also run this programmatically:
```js
  make.execute("default");
``` 

There is a built in help task that will print all of the task's descriptions for you.
```sh
  jake --help
```

Or print them programmatically:
```js 
  make.help();
```

## Contributing changes

Please feel free to open issues and pull requests. Everyone's code is welcome with open arms.

The workflow I would like to use is defined as follows:

master is _always_ stable. This means that active development happens on the development branch,
and pull requests will go there first. 

## License
  MIT license, feel free to do any horrible or fantastic thing you want with this code
