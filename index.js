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



var obj = {
  name: {
    first: 'Nathan',
    last: 'Tran'
  },
  price: {
    min: 10,
    max: 11,
    night: {
      min: 1,
      max: 10
    }
  }
};

console.log(module.exports(obj));