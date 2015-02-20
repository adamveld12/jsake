

function log(){
  console.log.apply(this, arguments);
}

function trace(){
  console.trace.apply(this, arguments);
}

function info(){
  console.info.apply(this, arguments);
}


module.exports = {
  log: log,
  trace: trace,
  info: info
};
