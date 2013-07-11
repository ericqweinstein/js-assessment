if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      // +1 to Dan Na (https://github.com/danielna) for this solution
      var getFiles = function(previous, data, foundDir) {
        if (data.files) {
          for (var item in data.files) {
            var file = data.files[item]
              , dirMatch = (data.dir === dirName || foundDir);

            if (file.files) {
              dirMatch ? getFiles(previous, file, true) : getFiles(previous, file);
            } else {
              if (!dirName || (data.dir === dirName || dirMatch)) {
                previous.push(file);
              }
            }
          }
        }

        return previous;
      }

      return getFiles([], data);
    },

    permute: function(arr) {
      var tmp    = []
        , result = [];

      var anagram = function(list) {
        for (var i = 0, l = arr.length; i < l; i++) {
          var elem = arr.splice(i, 1)[0];

          tmp.push(elem);

          if (arr.length > 0) {
            anagram(arr);
          } else {
            result.push(tmp.slice());
          }

          arr.splice(i, 0, elem);
          tmp.pop();
        }

        return result;
      }

      return anagram(arr);
    }
  };
});

