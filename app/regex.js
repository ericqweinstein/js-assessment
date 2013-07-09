if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return !!str.match(/\d+/);
    },

    containsRepeatingLetter : function(str) {
      return !!str.match(/([a-zA-Z])(\1+)/);
    },

    endsWithVowel : function(str) {
      return !!str[str.length - 1].match(/[aeiou]/i);
    },

    captureThreeNumbers : function(str) {
      var matches = str.match(/(\d{3})/);
      return matches === null ? false : matches[0];
    },

    matchesPattern : function(str) {
      // Pattern: XXX-XXX-XXXX, where X is a digit
      return !!str.match(/\b\d{3}-\d{3}-\d{4}\b/);
    },

    isUSD : function(str) {
      // JavaScript doesn't support look-behind assertions?
      // Are you fucking kidding me?
      //
      // For the record: /^\$\d+(?:(?<=\d),\d{3}|\d{,2})+(?:\.\d{2})?$/
      // 
      // For some reason, JavaScript *does* support look-
      // ahead assertions. So fuck it, we'll reverse it
      var reversed = str.split('').reverse().join('');
      return !!reversed.match(/^(?:\d{2}\.)?(?:\d{3},|\d{0,2})+\d+\$$/);
    }
  };
});

