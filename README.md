# to-groups

Take an array of items, and produce an object with groups of its elements based on a hashing function.

## Usage

```javascript
var toGroups = require('../');

var grouped = toGroups([1,2,3,576,78,45,32,2,3], function(item){
        return String(Math.floor(item / 10) * 10) + '-' + String(Math.ceil(item / 10) * 10 - 1);
    });

grouped -> {
    '0-9':[ 1, 2, 3, 2, 3 ],
    '30-39':[ 32 ],
    '40-49':[ 45 ],
    '70-79': [ 78 ],
    '570-579':[ 576 ]
}

```