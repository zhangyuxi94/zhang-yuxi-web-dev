/**
 * Created by zhangyuxi on 2016/5/25.
 */
(function(){
    angular.module("WebAppMaker")
        .factory("WidgetService",WidgetService);
    function WidgetService($http){
        var api={
            findWidgetsByPageId:findWidgetsByPageId,
            widgetChooser:widgetChooser,
            findWidgetById:findWidgetById,
            updateWidget:updateWidget,
            deleteWidget:deleteWidget,
            findWidgetByType:findWidgetByType,
            createWidget:createWidget,
            findAllTodos:findAllTodos,
            newFlickr:newFlickr
        };
        return api;

        function findWidgetsByPageId(pageId,userId,website){
            var url="/api/user/"+userId+"/web/"+website+"/page/"+pageId+"/widget";
            return $http.get(url);
        }

        function widgetChooser(pageId){
            var url="/api/page/"+pageId+"/widget/new";
            return $http.get(url);
        }

        function findWidgetById(widgetId){
            var url="/api/widget/"+widgetId;
            return $http.get(url);
        }

        function updateWidget(widgetId,widgetIdUrl,widgetType,text,size,width,rows,placeholder,formatted){
            var url="/api/widget/"+widgetId;
            var updatedWidget={
                widgetType:widgetType,
                text:text,
                size:size,
                width:width,
                url:widgetIdUrl,
                rows:rows,
                placeholder:placeholder,
                formatted:formatted
            };
            return $http.put(url,updatedWidget);
        }

        function newFlickr(widgetId, widgetIdUrl){
            var url="/api/widget/newFlickr/"+widgetId;
            var newFlickr={
                url:widgetIdUrl
            }
            return $http.post(url,newFlickr);
        }

        function deleteWidget(widgetId){
            var url="/api/widget/"+widgetId;
            return $http.delete(url);
        }

        function createWidget(pageId,userId,website,widgetTypeId,text,size,url,width,rows,placeholder,formatted){
            var newWidget={};
            var widgetType=widgetTypeId;
          
            switch (widgetTypeId){
                case "1":
                    newWidget={
                        pageId: pageId,
                        text:text,
                        size:size
                    };
                    break;
                case "2":
                    newWidget={
                        pageId: pageId,
                        url: url,
                        width:width
                    };
                    break;
                case "3":
                    newWidget={
                        pageId: pageId,
                        text:text
                    };
                    break;
                case "4":
                    newWidget={
                        pageId: pageId,
                        url: url,
                        width:width
                    };
                    break;
                case "5":
                    newWidget={
                        pageId: pageId,
                        text:text,
                        rows:rows,
                        placeholder:placeholder,
                        formatted:formatted
                    };
                    break;
                default:return null;
            }
            return $http.post("/api/user/"+userId+"/web/"+website+"/page/"+pageId+"/widget/new/"+widgetTypeId,newWidget);
        }

        function findWidgetByType(pageId,widgetTypeId){
            var url="/api/page/"+pageId+"/widget/new/"+widgetTypeId;
            return $http.get(url);
        }


        function findAllTodos(){
            var url="/api/todos";
            return $http.get(url);
        }
    }
})();
