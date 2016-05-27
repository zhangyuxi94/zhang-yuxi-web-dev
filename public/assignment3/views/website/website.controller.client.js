/**
 * Created by zhangyuxi on 2016/5/25.
 */

(function(){
    angular.module("WebAppMaker")
        .controller("WebsiteListController",WebsiteListController);

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
        // .controller("NewWebsiteController",NewWebsiteController);
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