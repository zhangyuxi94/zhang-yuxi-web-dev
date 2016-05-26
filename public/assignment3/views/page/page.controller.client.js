/**
 * Created by zhangyuxi on 2016/5/25.
 */

(function(){
    angular.module("WebAppMaker")
        .controller("PageListController",PageListController)
        .controller("NewPageController",NewPageController)
        .controller("EditPageController",EditPageController);
    function PageListController(){
        var vm=this;

    }
    function NewPageController(){
        var vm=this;

    }
    function EditPageController($routeParams,PageService){
        var vm=this;
        vm.pageId=$routeParams["pageId"];
        function init(){
            vm.page=PageService.findPageById(vm.pageId);
        }
        init();

    }
})();