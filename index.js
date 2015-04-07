module.exports = function (obj) {
  var ret = {};

  (function traverse(obj, prop) {
    var keys = Object.keys(obj);

    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      var val = obj[key];
      key = prop ? prop + '.' + key : key;

      if (val && typeof val == 'object') {
        traverse(val, key);
      } else {
        ret[key] = val;
      }
    }
  })(obj);

  return ret;
};