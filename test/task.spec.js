 var chai = require('chai'),
    jsake = require('../index'),
    should = chai.should(),
    expect = chai.expect;


module.exports = function(){
  describe('registers', function(){
    it('a task called "hello"', function(){
      expect(function(){
        jsake.task('hello', function(){ });
      }).to.not.throw("");
    });
  });

  describe('executes the task', function() {
    before(function(){

      jsake.task('hello', function(){
      });

      jsake.task('add', function(a, b){
      });

      jsake.task('step3', 'step1', 'step2', function(){
      });

      jsake.task('step1', function(){
      });

      jsake.task('step2', function(){
      });

    });

    it('default', function() {
      jsake.execute();
    });

    it('"hello"', function() {
      jsake.execute("hello");
    });

    it('"add"', function(){
      jsake.execute('add', 1, 2);
    });
  });
};
