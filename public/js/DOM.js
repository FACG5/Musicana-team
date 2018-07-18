(function () {
    var search = getID("submit");
    var result = getID("search");
    var view = getID("result");
    var number = getID("number");
    var mykey = config.MY_KEY;
    search.addEventListener('click', function() { 
        view.innerHTML = ""; 
        var limit = number.value;
        var inpSearch = result.value;
    var url = "http://ws.audioscrobbler.com/2.0/?method=track.search&track=%20&artist="+inpSearch+"&format=json&api_key="+mykey+"&limit="+limit+"";
        fetch(url, function(obj){
            var leng = obj.results.trackmatches.track.length;
            var image1 = obj.results.trackmatches.track[0].image[3]["#text"];
            console.log(image1);
            var image = create("img");
            image.src = image1;
            view.appendChild(image);
            var hr = create('hr');
            view.appendChild(hr);
            for (var i = 0 ; i < leng ; i++){
                var name = obj.results.trackmatches.track[i].name;
                var li = create("LI");
                var newLink = create("a");
                newLink.setAttribute('href', '#');
                newLink.innerHTML = name;
                view.appendChild(li);
                li.appendChild(newLink);

            }
        })
    })
    
})();