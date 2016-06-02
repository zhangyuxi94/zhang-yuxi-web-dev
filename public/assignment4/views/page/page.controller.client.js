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
            vm.userId=userId;
            vm.websiteId=websiteId;

            PageService
                .findPageByWebsiteId(websiteId)
                .then(function (response){
                    var page=response.data;
                    vm.pages=page;
                });
        }
        init();
    }

    function NewPageController($location,$routeParams,PageService){
        var vm=this;

        function init(){
            vm.createPage=createPage;
            var userId=$routeParams.uid;
            var websiteId=$routeParams.wid;
            function createPage(page,pageTitle){
                PageService
                    .createPage(websiteId,page,pageTitle)
                    .then(function(response){
                        var newPage=response.data;
                        if(newPage){
                            $location.url("/user/"+userId+"/website/"+websiteId+"/page");
                        }
                    });
            }
            vm.userId=userId;
            vm.websiteId=websiteId;
        }
        init();
    }

    function EditPageController($location,$routeParams,PageService){
        var vm=this;
        function init(){
            var websiteId=$routeParams.wid;
            var userId=$routeParams.uid;
            var pageId=$routeParams.pid;
            vm.websiteId=websiteId;
            vm.userId=userId;
            vm.pageId=pageId;

            PageService
                .findPageById(pageId)
                .then(function (response){
                    var page=response.data;
                    vm.page=page;
                });

            vm.updatePage=updatePage;

            function updatePage(name,title){
                PageService
                    .updatePage(pageId,name,title)
                    .then(function(response){
                        $location.url("/user/"+userId+"/website/"+websiteId+"/page");
                    });
            }

            vm.deletePage=deletePage;
            function deletePage(){
                PageService
                    .deletePage(pageId)
                    .then(
                        function(response){
                            $location.url("/user/"+userId+"/website/"+websiteId+"/page");
                        });
            }
        }
        init();
    }
})();