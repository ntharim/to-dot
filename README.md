# to-dot

  Convert object to to dot notation
  
    var toDot = require('to-dot');
    
    var user = { 
      name: { 
        first: 'Joe', 
        last: 'M' 
      } 
    };

    console.log(toDot(user));
    // {
    //  'name.first': 'Joe',
    //  'name.last': 'M'
    // } 

## Installation

    $ component install Ntran013/to-dot
    $ npm install Ntran013/to-dot

## API

### toDot(obj)

  return converted dot-notation object from `object`.

## License

  MIT
