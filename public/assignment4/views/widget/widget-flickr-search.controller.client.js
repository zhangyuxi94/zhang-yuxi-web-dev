/**
 * Created by zhangyuxi on 2016/6/1.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("FlickrImageSearchController",FlickrImageSearchController);

    function FlickrImageSearchController(FlickrService){
        var vm=this;
        vm.searchPhotos=searchPhotos;
        function searchPhotos(searchTerm){
            FlickrService.searchPhotos(searchTerm)
                .then(function(response){
                    data = response.data.replace("jsonFlickrApi(","");
                    data = data.substring(0,data.length-1);
                    data = JSON.parse(data);
                    vm.photos = data.photos;
                });

        }
    }
})();