/**
 * Created by zhangyuxi on 2016/5/25.
 */
(function(){
    angular.module("WebAppMaker")
        .controller("WidgetListController",WidgetListController)
        .controller("NewWidgetController",NewWidgetController)
        .controller("EditWidgetController",EditWidgetController);


    function WidgetListController($sce,$routeParams,WidgetService){
        var vm=this;
        vm.getSafeHtml=getSafeHtml;
        vm.getSafeUrl=getSafeUrl;

        function init(){
            var pageId=$routeParams.pid;
            var userId=$routeParams.uid;
            var website=$routeParams.wid;
            vm.userId=userId;
            vm.website=website;
            vm.page=pageId;

            WidgetService
                .findWidgetsByPageId(pageId)
                .then(function (response){
                    var widget=response.data;
                    vm.widgets=widget;
                    $(".container").sortable({
                        axis:'y'
                    });
                });
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
                    console.log(widgetName);
                    vm.newWidget=widgetName;
                    vm.widgetName=widgetName;
                });


            vm.createWidget=createWidget;
            function createWidget(text,size,url,width){
                WidgetService
                    .createWidget(pageId,widgetTypeId,text,size,url,width)
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
                });

            vm.updateWidget=updateWidget;
            function updateWidget(text,size,width,widgetIdUrl){
                WidgetService
                    .updateWidget(widgetId,widgetIdUrl,text,size,width)
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