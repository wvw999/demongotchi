export function getGiphy (search) {
  //let q = "finger guns"; // search query

  let request = new XMLHttpRequest;


  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200){
      let data = JSON.parse(request.responseText).data.images.original.url;
      document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
    } else {
      console.log('reached giphy, but API returned an error');
    }
  };

  request.onerror = function() {
    console.log('connection error');
  };
  let demonIds = {monster1: "9dcBtj9w8aYla", monster2: "t6Kf2qs5fgWiAlOig5", monster3: "2ftY2AUZRv9fjk7wQi", monster4: "oOBYZTDmkELbugtZ3C", monster5: "LueqAd0PKggpO"}

  request.open('GET', 'https://api.giphy.com/v1/gifs/' + demonIds[search] + '?api_key=ovlXEUnE9SOkC5TcPRXlB1ax65xFEXBa', true);
  request.send();
}
