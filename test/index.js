var test = require('tape');
    toGroups = require('../');

test('binning', function(t){
    t.plan(1);

    var grouped = toGroups([1,2,3,576,78,45,32,2,3], function(item){
            return String(Math.floor(item / 10) * 10) + '-' + String(Math.ceil(item / 10) * 10 - 1);
        });

    t.deepEqual(grouped,  {
        '0-9':[ 1, 2, 3, 2, 3 ],
        '30-39':[ 32 ],
        '40-49':[ 45 ],
        '70-79': [ 78 ],
        '570-579':[ 576 ]
    });
});