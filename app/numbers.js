if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      // So apparently there's no native binary support
      // (e.g. 0b1010), so we'll use, uh... #toString()
      //
      // Also we're counting right -> left, so let's reverse
      var numberInBinary = num.toString(2).split('').reverse().join('');
      return +numberInBinary[+bit - 1];
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      var binaryNumber = num.toString(2);
      // Pad our number with zeroes
      // if it's fewer than 8 bits
      while (binaryNumber.length < 8) {
        binaryNumber = '0'.concat(binaryNumber);
      }

      return binaryNumber;
    },

    multiply: function(a, b) {
      a = a * 1000
    , b = b * 1000;
      var product = a * b;
      return product / 1000000;
    }
  };
});

