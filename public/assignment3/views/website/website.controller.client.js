/**
 * Created by zhangyuxi on 2016/5/25.
 */

(function(){
    angular.module("WebAppMaker")
        .controller("WebsiteListController",WebsiteListController)
        .controller("NewWebsiteController",NewWebsiteController);

    function WebsiteListController($routeParams,WebsiteService){
        var vm=this;
        function init(){
            var userId=$routeParams.uid;
            var website=WebsiteService.findWebsitesByUser(userId);
            vm.websites=website;
            vm.userId=userId;
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
        // .controller("EditWebsiteController",EditWebsiteController);
    // function WebsiteListController($routeParams,WebsiteService){
    //     var vm=this;
    //     // vm.userId=$routeParams["userId"];
    //     function init(){
    //         vm.websites=WebsiteService.findWebsitesByUser($routeParams["userId"]);
    //     }
    //     init();
    //
    // }
    // function NewWebsiteController(){
    //     var vm=this;
    // }
    // function EditWebsiteController($routeParams,WebsiteService){
    //     var vm=this;
    //     vm.websiteId=$routeParams["websiteId"];
    //     function init(){
    //         vm.website=WebsiteService.findWebsiteById(vm.websiteId);
    //     }
    //     init();
    // }
})();