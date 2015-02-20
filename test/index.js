 var chai = require('chai'),
    jsake = require('../index'),
    should = chai.should(),
    expect = chai.expect,
    assert = chai.assert;


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

      it('throw with undefined name', function(){ 
        expect(function(){
          jsake.task(void 0, function(){})
        }).to.throw(Error);
      });

      it('throw with undefined name', function(){ 
        expect(function(){
          jsake.task(void 0, function(){})
        }).to.throw(Error);
      });

      it('throw with undefined callback', function(){ 
        expect(function(){
          jsake.task('default', void 0)
        }).to.throw(Error);
      });

      it('succeed with defined name and callback', function(){
        expect(function(){
          jsake.task('test1', function(){})
        }).to.not.throw(Error);
      });

      it('throw with a duplicate name', function(){ 
        expect(function(){
          jsake.task('default', function(){})
          jsake.task('default', function(){})
        }).to.throw(Error);
      });

    });



  describe('executes the task', function() {
    before(function(){

      jsake.task('hello', function(){ });

      jsake.task('step1', function(){ });

      jsake.task('step2', function(){ });

    });

    it('default', function() {
      expect(function(){
        jsake.execute();
      }).to.not.throw(Error)
    });

    it('"hello"', function() {
      expect(function(){
        jsake.execute('hello');
      }).to.not.throw(Error);
    });


  });

  describe('and passes arguments', function(){
    before(function(){
      jsake.task('add', function(a, b){
        a.should.be.a('Number');
        b.should.be.a('Number');

        a.should.equal(1);
        b.should.equal(2);

        (a + b).should.equal(3);
      });
    });

    it('1, 2 to the task "add"', function(){
      jsake.execute('add', 1, 2);
    });

  })


});
