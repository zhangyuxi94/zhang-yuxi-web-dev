/**
 * Created by zhangyuxi on 2016/5/25.
 */
(function(){
    angular.module("WebAppMaker")
        .controller("WidgetListController",WidgetListController)
        .controller("NewWidgetController",NewWidgetController);


    function WidgetListController($sce,$routeParams,WidgetService){
        var vm=this;
        vm.getSafeHtml=getSafeHtml;
        vm.getSafeUrl=getSafeUrl;

        function init(){
            var pageId=$routeParams.pid;
            var userId=$routeParams.uid;
            var website=$routeParams.wid;
            var widget=WidgetService.findWidgetsByPageId(pageId);
            vm.widgets=widget;
            vm.userId=userId;
            vm.website=website;
            vm.page=pageId;
        }
        init();

        function getSafeHtml(widget){
            return $sce.trustAsHtml(widget.text);
        }
        function getSafeUrl(widget){
            var urlParts=widget.url.split("/");
            var id=urlParts[urlParts.length-1];
            var url="https://www.youtube.com/embed/"+id;
            return $sce.trustAsResourceUrl(url);
        }
    }

    function NewWidgetController($routeParams,WidgetService){
        var vm=this;
        function init(){
            var userId=$routeParams.uid;
            var websiteId=$routeParams.wid;
            var pageId=$routeParams.pid;

            var widgets=WidgetService.widgetChooser();
            vm.userId=userId;
            vm.websiteId=websiteId;
            vm.pageId=pageId;
            vm.widgets=widgets;
        }
        init();

    }
})();