# to-dot

  Convert object to dot notation.
  
  ```js
  var toDot = require('to-dot');
  
  var user = { 
    name: { 
      first: 'Joe', 
      last: 'M' 
    } 
  };

  console.log(toDot(user));
  /* 
  {
    'name.first': 'Joe',
    'name.last': 'M'
  }
  */
  ```

## Installation

    $ npm install to-dot

## API

### toDot(obj)

  return converted dot-notation object from `obj`.

## License

  MIT
