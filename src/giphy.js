document.addEventListener('DOMContentLoaded', function () {
  //let q = "finger guns"; // search query

  let request = new XMLHttpRequest;


  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200){
      let data = JSON.parse(request.responseText).data.image_url;
      console.log("here is data: " + data);
      document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
    } else {
      console.log('reached giphy, but API returned an error');
    }
  };

  request.onerror = function() {
    console.log('connection error');
  };

  request.open('GET', 'https://api.giphy.com/v1/stickers/random?api_key=qmmVAJKAWCLcMoOlVbsSDvBnkJEPuxDE&tag=salamander', true);
  request.send();
});
