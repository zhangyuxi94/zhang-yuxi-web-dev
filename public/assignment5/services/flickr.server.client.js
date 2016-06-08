/**
 * Created by zhangyuxi on 2016/6/1.
 */
(function(){
    angular
        .module("WebAppMaker")
        .factory("FlickrService",FlickrService);

    var key = "80a79cfaf5af7005aba318c07cb18b37";
    var secret = "4c0ac07b2b2f8068";
    var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";

    function FlickrService($http){
        var api={
            searchPhotos:searchPhotos
        };
        return api;

        function searchPhotos(searchTerm){
            var url = urlBase
                .replace("API_KEY", key)
                .replace("TEXT", searchTerm);
            return $http.get(url);
        }
    }
})();