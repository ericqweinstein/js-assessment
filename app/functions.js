if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return function(str2) { return str + ', ' + str2; }
    },

    makeClosures : function(arr, fn) {
      // This is supposed to return an
      // array of functions, apparently
      var fns = [];

      var closure = function(value) {
        return function() { return fn(value); };
      };

      for (var i = 0, l = arr.length; i < l; i++) {
        fns.push(closure(arr[i]));
      }

      return fns;
    },

    partial : function(fn, str1, str2) {
      return function(punctuation) {
        return fn(str1, str2, punctuation);
      };
    },

    useArguments : function() {
      var args = arguments
        , sum  = 0;
      for (var i in args) {
        sum += args[i];
      }

      return sum;
    },

    callIt : function(fn) {
      // args = [].slice.call(arguments) makes args
      // into a real JS array; the final "1" removes
      // the first element, which is the fn to be
      // applied to all arguments that follow.
      var args = [].slice.call(arguments, 1);
      return fn.apply(this, args);
    },

    partialUsingArguments : function(fn) {
      var args = [].slice.call(arguments, 1);

      return function() {
        return fn.apply(this, args.concat([].slice.call(arguments)));
      };
    },

    curryIt : function(fn) {
      var curry = function(receivedArgs, argCount) {
        return function(thisArg) {
          receivedArgs.push(thisArg);

          var done = receivedArgs.length === argCount;

          if (done) {
            return fn.apply(null, receivedArgs);
          } else {
            return curry(receivedArgs, argCount);
          }
        };
      }

      return curry([], fn.length);
    }
  };
});

