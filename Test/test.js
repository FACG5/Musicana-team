var test = require('tape');
var logic = require('./Public/js/logic');

test('testing', function(s){
    s.equal(typeof 'hello', 'string', 'one should equal itself');
    s.end();
});