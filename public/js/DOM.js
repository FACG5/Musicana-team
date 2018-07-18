(function () {
    var search = document.getElementById("submit");
    var result = document.getElementById("search");
    var view = document.getElementById("result");
    var image = document.getElementById("image");
    var number = document.getElementById("number");
    var audioTool = document.querySelector('.audiotool');
    
    var lyrics = document.querySelector('.lyrics');
    var mykey = config.MY_KEY;
    search.addEventListener('click', function() {  
        var limit = number.value;
        var inpSearch = result.value;
    var url = "http://ws.audioscrobbler.com/2.0/?method=track.search&track=%20&artist="+inpSearch+"&format=json&api_key="+mykey+"&limit="+limit+"";
        fetch(url, function(obj){
            image.src = "";
            view.innerHTML = "";
            var leng = obj.results.trackmatches.track.length;
            var image1 = obj.results.trackmatches.track[0].image[3]["#text"];
            image.src = image1;
            for (var i = 0 ; i < leng ; i++){
                var name = obj.results.trackmatches.track[i].name;
                var li = document.createElement("LI");
                var newLink = document.createElement("a");

                
                newLink.innerHTML = name;
                view.appendChild(li);
                li.appendChild(newLink);

            }

            


        })
    })

    view.addEventListener('click',function(e){

        var keywords = e.target.textContent.split(' ').join('+');
        var mp4link;
        var alyrics;

        fetch('https://itunes.apple.com/search?term='+keywords+'&limit=1', function(obj2){
            mp4link=obj2.results[0].previewUrl;
            console.log('music link: ' + mp4link);
            audioTool.src=mp4link;
            audioTool.play();
            var artistName = obj2.results[0].artistName.split(' ').join('+');
            var trackName = obj2.results[0].trackName.split(' ').join('+');
            fetch('https://api.lyrics.ovh/v1/'+ artistName + '/'+ trackName,function(obj3){
        
                lyrics.innerHTML = obj3.lyrics;  
            });
        });



        
    });


    
})();