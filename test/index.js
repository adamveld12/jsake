 var chai = require('chai'),
    jsake = require('../index'),
    should = chai.should();


describe('jsake', function(){

    it('has task defined', function(){
       should.exist(jsake.task);
       jsake.execute.should.be.a('function');
    });

    it('task property should be a function', function(){
      should.exist(jsake.task);
      jsake.task.should.be.a('function');
    });

    it('has execute defined', function(){
      should.exist(jsake.execute);
    });

    it('execute property should be a function', function(){
      should.exist(jsake.execute);
      jsake.execute.should.be.a('function');
    });

    describe('task function', function(){});

    require('./task.spec')();
});
