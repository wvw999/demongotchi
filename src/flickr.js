// export function getFlickr () {
//
// var Flickr = require("flickrapi"),
//     flickrOptions = {
//       api_key: "5f4593f5728f78fc662d9634bd85b594",
//       secret: "5e8e2737a12d0633bbe9b51119fcec8d",
//       requestOptions: {
//         timeout: 20000, tags: "frog", format: "rest",
//         /* other default options accepted by request.defaults */
//       }
//     };
//
// Flickr.tokenOnly(flickrOptions, function(error, flickr) {
//   // we can now use "flickr" as our API object,
//   // but we can only call public methods and access public data
// });
// }

export function getFlickr () {
  //let q = "finger guns"; // search query

  let request = new XMLHttpRequest;


  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200){
      let data = JSON.parse(request.response).photos.photo.id
      console.log(data);
      console.log("here is data: " + data);
      document.getElementById("flickrme").innerHTML = '<center><img src = "'+data+'"  title="Photo via Flickr"></center>';
    } else {
      console.log('reached flickr, but API returned an error');
    }
  };

  request.onerror = function() {
    console.log('connection error');
  };

  request.open('GET', 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=199467a60cb665bc233bf8570c74377b&tags=frogs&format=json&nojsoncallback=1', true);
  request.send();
}
