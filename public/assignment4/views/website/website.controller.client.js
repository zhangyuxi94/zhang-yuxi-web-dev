/**
 * Created by zhangyuxi on 2016/5/25.
 */

(function(){
    angular.module("WebAppMaker")
        .controller("WebsiteListController",WebsiteListController)
        .controller("NewWebsiteController",NewWebsiteController)
        .controller("EditWebsiteController",EditWebsiteController);

    function WebsiteListController($routeParams,WebsiteService){
        var vm=this;
        function init(){
            var userId=$routeParams.uid;
            WebsiteService
                .findWebsitesByUser(userId)
                .then(function (response){
                    var website=response.data;
                    console.log(response);
                        vm.websites=website;
                        vm.userId=userId;
                });
        }
        init();
    }

    function NewWebsiteController($location,$routeParams,WebsiteService){
        var vm=this;
        function init(){
            vm.createWebsite=createWebsite;
            var userId=$routeParams.uid;
            function createWebsite(website,description){
                var newWebsite=WebsiteService.createWebsite(userId,website,description);
                $location.url("/user/"+userId+"/website");
            }
            vm.userId=userId;
        }
        init();
    }

    function EditWebsiteController($location,$routeParams,WebsiteService){
        var vm=this;
        function init(){
            var websiteId=$routeParams.wid;
            var userId=$routeParams.uid;
            var website=WebsiteService.findWebsiteById(websiteId);
            vm.website=website;
            vm.websiteId=websiteId;
            vm.userId=userId;

            vm.updateWebsite=updateWebsite;
            function updateWebsite(name,description){
                var updateWebsite=WebsiteService.updateWebsite(websiteId,website);
                $location.url("/user/"+userId+"/website");
            }

            vm.deleteWebsite=deleteWebsite;
            function deleteWebsite(){
                var deleteWebsite=WebsiteService.deleteWebsite(websiteId);
                $location.url("/user/"+userId+"/website");
            }


        }
        init();



    }
})();