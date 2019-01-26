//information for the flickr's account
var API_KEY = '7eb3dcd0c7c0543e9d8760a881c9e550';
var USER_ID = '167744162@N02'
var API_URL = 'https://api.flickr.com/services/rest/?format=json&nojsoncallback=1';
var PAGE_SIZE = 9;
var PARAMS = `&api_key=${API_KEY}&user_id=${USER_ID}&per_page=${PAGE_SIZE}`;
var REQUEST_URL = API_URL + PARAMS;

var api = {
  getPhotos(currentPage){
  	var method = 'flickr.people.getPhotos';
    var totalsize = currentPage*PAGE_SIZE;
    var url = `${REQUEST_URL}&per_page=${totalsize}&method=${method}`;
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;
