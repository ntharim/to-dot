module.exports = function (obj) {
  var ret = {};

  (function traverse(obj, prop) {
    for (var key in obj) {
      var val = obj[key];
      key = prop
            ? prop + '.' + key
            : key;

      if (val && typeof val == 'object') {
        traverse(val, key);
      } else {
        ret[key] = val;
      }
    }
  })(obj);

  return ret;
};