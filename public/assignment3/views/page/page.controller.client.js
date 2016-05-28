/**
 * Created by zhangyuxi on 2016/5/25.
 */

(function(){
    angular.module("WebAppMaker")
        .controller("PageListController",PageListController)
        .controller("NewPageController",NewPageController);
        // .controller("EditPageController",EditPageController);
    function PageListController($routeParams,PageService){
        var vm=this;
        function init(){
            var userId=$routeParams.uid;
            var websiteId=$routeParams.wid;
            var page=PageService.findPageByWebsiteId(websiteId);
            vm.pages=page;
            vm.userId=userId;
            vm.websiteId=websiteId;
        }
        init();
    }

    function NewPageController($location,$routeParams,PageService){
        var vm=this;
        vm.createPage=createPage;
        var userId=$routeParams.uid;
        var websiteId=$routeParams.wid;

        function createPage(page,pageTitle){
            var newPage=PageService.createPage(websiteId,page,pageTitle);
            $location.url("/user/"+userId+"/website/"+websiteId+"/page");
        }
        vm.userId=userId;
        vm.websiteId=websiteId;
    }

//     function EditPageController($routeParams,PageService){
//         var vm=this;
//         vm.pageId=$routeParams["pageId"];
//         function init(){
//             vm.page=PageService.findPageById(vm.pageId);
//         }
//         init();
//
//     }
})();