if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var intervalId;
      var self = this;

      var startCounter = function() {
        console.log(start);
        intervalId = setInterval(increment, 100);
      };

      var increment = function() {
        start++;
        console.log(start);

        if (start === end) {
          self.cancel();
        }
      };

      this.cancel = function() {
        clearInterval(intervalId);
      };

      startCounter();
    }
  };
});

