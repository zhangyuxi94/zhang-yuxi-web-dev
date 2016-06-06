/**
 * Created by zhangyuxi on 2016/6/1.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("FlickrImageSearchController",FlickrImageSearchController);

    function FlickrImageSearchController($routeParams,$location,FlickrService,WidgetService){
        var vm=this;
        var userId=$routeParams.uid;
        var widgetId=$routeParams.wgid;
        var pageId=$routeParams.pid;
        var websiteId=$routeParams.wid;
        vm.pageId=pageId;
        vm.websiteId=websiteId;
        vm.userId=userId;
        vm.widgetId=widgetId;
        vm.searchPhotos=searchPhotos;
        vm.selectPhoto=selectPhoto;
        function searchPhotos(searchTerm){
            FlickrService.searchPhotos(searchTerm)
                .then(function(response){
                    data = response.data.replace("jsonFlickrApi(","");
                    data = data.substring(0,data.length-1);
                    data = JSON.parse(data);
                    vm.photos = data.photos;
                });
        }
        function selectPhoto(photo) {
            var widgetIdUrl = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server;
            widgetIdUrl += "/" + photo.id + "_" + photo.secret + "_b.jpg";
            vm.url=widgetIdUrl;
            WidgetService
                .updateWidget(widgetId, widgetIdUrl)
                .then(
                    function(response){
                        console.log(response.data);
                        
                        $location.url("/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget");
                    }
                );
        }
    }
})();