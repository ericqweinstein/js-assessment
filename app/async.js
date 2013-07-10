if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      // I'm pretty sure we have to use jQuery
      // here, but it doesn't really specify
      //
      // So! We'll just create a jQuery Deferred
      // object and resolve it immediately
      var dfd = $.Deferred();
      dfd.resolve(value);
      return dfd.promise();
    },

    manipulateRemoteData : function(url) {
      var dfd = $.Deferred();

      $.getJSON(url).then(function(data) {
        var names = $.map(data.people, function(person) {
          return person.name;
        });

        dfd.resolve(names.sort());
      });

      return dfd.promise();
    }
  };
});

