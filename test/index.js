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

    it('has list defined', function(){
      should.exist(jsake.list);
    });

    it('list property should be a function', function(){
      should.exist(jsake.list);
      jsake.execute.should.be.a('function');
    });


    describe('register task should', function(){
      it('throw with undefined name', function(){ });
      it('throw with undefined callback', function(){ should.exist(jsake.list);
        jsake.execute.should.be.a('function');
      });
      it('throw with a duplicate name', function(){ });
      it('succeed with defined name and callback', function(){
        should.exist(jsake.list);
        jsake.execute.should.be.a('function');
      });
    });

    require('./task.spec')();
});
