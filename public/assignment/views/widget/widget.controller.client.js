/**
 * Created by zhangyuxi on 2016/5/25.
 */
(function(){
    angular.module("WebAppMaker")
        .controller("WidgetListController",WidgetListController)
        .controller("NewWidgetController",NewWidgetController)
        .controller("EditWidgetController",EditWidgetController);


    function WidgetListController($sce,$routeParams,WidgetService,$http){
        var vm=this;
        vm.getSafeHtml=getSafeHtml;
        vm.getSafeUrl=getSafeUrl;
        var pageId=$routeParams.pid;

        function init(){
            var startIndex=-1;
            var endIndex=-1;
            var pageId=$routeParams.pid;
            var userId=$routeParams.uid;
            var website=$routeParams.wid;
            vm.userId=userId;
            vm.website=website;
            vm.page=pageId;

            WidgetService
                .findWidgetsByPageId(pageId,userId,website)
                .then(function (response){
                    var widget=response.data;
                    vm.widgets=widget;
                });

            WidgetService
                .findAllTodos()
                .then(function (response){
                    vm.data=response.data;
                });
        }
        init();
        vm.reorderWidgets=reorderWidgets;
        function reorderWidgets(start, end) {
            $http.put("/page/"+pageId+"/widget?start="+start+"&end" +
                "="+end)
                .then(init);
        }
        vm.reorderTodos=reorderTodos;
        function reorderTodos(start,end){
            $http.put("/api/todos?start="+start+"&end" +
                "="+end)
                .then(init);
        }

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

    function NewWidgetController($location,$routeParams,WidgetService){
        var vm=this;
        function init(){
            var userId=$routeParams.uid;
            var websiteId=$routeParams.wid;
            var pageId=$routeParams.pid;
            var widgetTypeId=$routeParams.tpid;
            vm.userId=userId;
            vm.websiteId=websiteId;
            vm.pageId=pageId;
            vm.widgetTypeId=widgetTypeId;

            WidgetService
                .widgetChooser(pageId)
                .then(function (response){
                    var widget=response.data;
                    vm.widget=widget;
                });

            WidgetService
                .findWidgetByType(pageId,widgetTypeId)
                .then(function (response){
                    var widgetName=response.data;
                    // vm.newWidget=widgetName;
                    vm.widgetName=widgetName;
                });

            vm.createWidget=createWidget;
            function createWidget(text,size,url,width,rows,placeholder,formatted){
                WidgetService
                    .createWidget(pageId,userId,websiteId,widgetTypeId,text,size,url,width,rows,placeholder,formatted)
                    .then(function(response){
                        var newWidget=response.data;
                        if(newWidget){
                            $location.url("/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget");
                        }
                    });
            }

            vm.deleteWidget=deleteNewWidget;
            function deleteNewWidget(){
                $location.url("/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget");
            }
        }
        init();
    }

    function EditWidgetController($location,$routeParams,WidgetService) {
        var vm=this;
        function init(){
            var widgetId=$routeParams.wgid;
            var pageId=$routeParams.pid;
            var websiteId=$routeParams.wid;
            var userId=$routeParams.uid;
            vm.pageId=pageId;
            vm.websiteId=websiteId;
            vm.userId=userId;
            vm.widgetId=widgetId;

            WidgetService
                .findWidgetById(widgetId)
                .then(function (response){
                    var widget=response.data;
                    vm.widget=widget;
                    vm.newWidget=widget;
                });

            vm.updateWidget=updateWidget;
            function updateWidget(text,size,width,widgetIdUrl,widgetType,rows,placeholder,formatted){
                WidgetService
                    .updateWidget(widgetId,widgetIdUrl,widgetType,text,size,width,rows,placeholder,formatted)
                    .then(
                        function(response){
                            $location.url("/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget");
                        });
            }

            vm.deleteWidget=deleteWidget;
            function deleteWidget(){
                WidgetService
                    .deleteWidget(widgetId)
                    .then(
                        function(response){
                            $location.url("/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget");
                        }
                    );
            }
        }
        init();
    }
})();