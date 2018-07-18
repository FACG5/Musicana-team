var test = require('tape');
var logic = require('../public/js/logic');

test('testing', function(s){
    var url = "http://ws.audioscrobbler.com/2.0/?method=track.search&track=%20&artist=Adele&format=json&api_key=a4e7f14385fcf0448c9693394bd04c0e&limit=5";
    logic(url, function(res){
        var actual = res.results.trackmatches.track[0].name;
        var expected = "Rolling in the Deep";
        s.equal(actual, expected, 'one should equal itself');
    s.end();
    });
});