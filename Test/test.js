var test = require('tape');
var logic = require('../public/js/logic');

test('testing', function(s){
    s.equal(typeof 'hello', 'string', 'one should equal itself');
    s.end();
});