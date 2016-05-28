/**
 * Created by zhangyuxi on 2016/5/25.
 */

(function(){
    angular.module("WebAppMaker")
        .controller("PageListController",PageListController)
        .controller("NewPageController",NewPageController)
        .controller("EditPageController",EditPageController);
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

    function EditPageController($location,$routeParams,PageService){
        var vm=this;
        function init(){
            var websiteId=$routeParams.wid;
            var userId=$routeParams.uid;
            var pageId=$routeParams.pid;
            var page=PageService.findPageById(pageId);
            vm.page=page;
            vm.websiteId=websiteId;
            vm.userId=userId;
            vm.pageId=pageId;

            vm.updatePage=updatePage;
            function updatePage(name,title){
                var updatePage=PageService.updatePage(pageId,page);
                $location.url("/user/"+userId+"/website/"+websiteId+"/page");
            }
        }
        init();
    }
})();