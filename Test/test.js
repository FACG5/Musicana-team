var test = require('tape');
var logic = require('../public/js/logic.js');

test('testing', function(s){
    var url = "http://ws.audioscrobbler.com/2.0/?method=track.search&track=%20&artist=Adele&format=json&api_key=a4e7f14385fcf0448c9693394bd04c0e&limit=5";
    logic.fetch(url, function(res){
        var actual = res.results.trackmatches.track[0].name;
        var expected = "Rolling in the Deep";
        s.equal(actual, expected, 'one should equal itself');
    s.end();
    });
});





test('testing', function(s){
    var url = "http://ws.audioscrobbler.com/2.0/?method=track.search&track=%20&artist=Adele&format=json&api_key=a4e7f14385fcf0448c9693394bd04c0e&limit=5";
    logic.fetch(url, function(res){
        var actual = logic.getName(res, 0);
        var expected = "Rolling in the Deep";
        s.equal(actual, expected, 'one should equal itself');
    s.end();
    });    
});


test('testing', function(s){
    var url = "http://ws.audioscrobbler.com/2.0/?method=track.search&track=%20&artist=Adele&format=json&api_key=a4e7f14385fcf0448c9693394bd04c0e&limit=5";
    logic.fetch(url, function(res){
        var actual = logic.getImage(res, 3);
        var expected = "https://lastfm-img2.akamaized.net/i/u/300x300/766686bf1c5b14171fbe2169751c17cc.png";
        s.equal(actual, expected, 'one should equal itself');
    s.end();
    });    
});



