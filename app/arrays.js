if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      for (var i = 0, l = arr.length; i < l; i++) {
        if (arr[i] === item) {
          return i;
        }
      }
      return -1;
    },

    sum : function(arr) {
      var total = 0;

      for (var i = 0, l = arr.length; i < l; i++) {
        total += arr[i];
      }
      return total;
    },

    remove : function(arr, item) {
      for (var i = 0, l = arr.length; i < l; i++) {
        if (arr[i] === item) {
          arr.splice(this.indexOf(arr, item), 1);
        }
      }
      return arr;
    },

    removeWithoutCopy : function(arr, item) {
      // Gotta fix this one--it shouldn't
      // require two calls to #remove
      for (var i = 0, l = arr.length; i < l; i++) {
        if (arr[i] === item) {
          this.remove(arr, item);
          this.remove(arr, item);
        }
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      return arr.slice(0, arr.length - 1);
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      return arr.slice(1, arr.length);
    },

    concat : function(arr1, arr2) {
      // Is this a trick question?
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var occurrences = 0;
      for (var i = 0, l = arr.length; i < l; i++) {
        if (arr[i] === item) {
          occurrences++;
        }
      }
      return occurrences;
    },

    duplicates : function(arr) {
      var dups = [];
      arr.sort();
      for (var i = 0, l = arr.length; i < l; i++) {
        if (arr[i] === arr[i - 1] && this.indexOf(dups, arr[i]) === -1) {
          dups.push(arr[i]);
        }
      }
      return dups;
    },

    square : function(arr) {
      var squared = [];
      arr.forEach(function(value, index, arr) {
        squared.push(value * value);
      });

      return squared;
    },

    findAllOccurrences : function(arr, target) {
      var indices = [];
      for (var i = 0, l = arr.length; i < l; i++) {
        if (arr[i] === target) {
          indices.push(i);
        }
      }
      return indices;

    }
  };
});

