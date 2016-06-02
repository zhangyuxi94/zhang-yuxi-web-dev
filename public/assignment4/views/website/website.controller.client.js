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
                WebsiteService
                    .createWebsite(userId,website,description)
                    .then(function(response){
                        var newWebsite=response.data;
                        if(newWebsite){
                            $location.url("/user/"+userId+"/website");
                        }
                    });
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
            WebsiteService
                .findWebsiteById(websiteId)
                .then(function (response){
                    var website=response.data;
                    vm.website=website;
                });
            
            vm.websiteId=websiteId;
            vm.userId=userId;

            vm.updateWebsite=updateWebsite;
            function updateWebsite(name,description){
                WebsiteService.updateWebsite(websiteId,website);
                $location.url("/user/"+userId+"/website");
            }

            // function updateUser(newUser){
            //     UserService
            //         .updateUser(userId,newUser)
            //         .then(
            //             function(response){
            //                 vm.save="Success! Your profile was saved."
            //             },
            //             function (error) {
            //                 vm.error="Unable to update"
            //             });
            // }

            vm.deleteWebsite=deleteWebsite;
            function deleteWebsite(){
                var deleteWebsite=WebsiteService.deleteWebsite(websiteId);
                $location.url("/user/"+userId+"/website");
            }


        }
        init();



    }
})();