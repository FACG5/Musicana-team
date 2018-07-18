(function () {
    var search = document.getElementById("submit");
    var result = document.getElementById("search");
    var view = document.getElementById("result");
    var number = document.getElementById("number");
    var mykey = config.MY_KEY;
    search.addEventListener('click', function() {
        view.innerHTML = "";
        var limit = number.value;
        var inpSearch = result.value;
        var url = "http://ws.audioscrobbler.com/2.0/?method=track.search&track=%20&artist="+inpSearch+"&format=json&api_key="+mykey+"&limit="+limit+"";
        fetch(url, function(obj){
            var leng = obj.results.trackmatches.track.length;
            var image1 = obj.results.trackmatches.track[0].image[3]["#text"];
            var image = document.createElement("img");
            image.src = image1;
            view.appendChild(image);
            var hr = document.createElement('hr');
            view.appendChild(hr);
            for (var i = 0 ; i < leng ; i++){
                var name = obj.results.trackmatches.track[i].name;
                var li = document.createElement("LI");
                var newLink = document.createElement("a");
                newLink.setAttribute('href', '#');
                newLink.innerHTML = name;
                view.appendChild(li);
                li.appendChild(newLink);

            }
        })
    })

})();