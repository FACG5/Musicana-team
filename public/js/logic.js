if (typeof module !=="undefined" ){
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
}
function fetch(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var res = JSON.parse(xhr.responseText);
        cb(res);
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  }

  function create (e){
    return document.createElement(e);
  }


  function getID (e){
    return document.getElementById(e);
  }




function getName (res, i) {
  return res.results.trackmatches.track[i].name;
}



function getImage (res,i) {
  return res.results.trackmatches.track[0].image[i]["#text"];
}









if (typeof module !=="undefined") {



  module.exports = {fetch , getName , getImage}

}