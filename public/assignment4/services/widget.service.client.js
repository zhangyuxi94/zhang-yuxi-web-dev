/**
 * Created by zhangyuxi on 2016/5/25.
 */
(function(){
    angular.module("WebAppMaker")
        .factory("WidgetService",WidgetService);
    function WidgetService($http){
        // var widgets=[
        //     { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
        //     { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        //     { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
        //         "url": "http://lorempixel.com/400/200/"},
        //     { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p><a href='https://www.youtube.com/watch?time_continue=550&v=KPe-WY2eghY'>A rally in Fresno, California</a> today, newfound irrigation expert Donald Trump finally revealed the solution to the drought that’s been crippling California for the past five years: Turn the water back on, idiots.</p>"},
        //     { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "California's Drought: Start Opening Up the Water"},
        //     { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
        //         "url": "https://youtu.be/AM2Ivdi9c4E" },
        //     { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Fortunately for California, when Donald Trump becomes president, he plans to “start opening up the water so that you can have your farmers survive so that your job market will get better”—a position that is genuinely hard to argue with, though not for the usual reasons.</p>"},
        // ];

        // var widgetFilter=[
        //     {"widgetType": "HEADER","typeId": "1"},
        //     {"widgetType": "IMAGE","typeId": "2"},
        //     {"widgetType": "HTML","typeId": "3"},
        //     {"widgetType": "YOUTUBE","typeId": "4"}
        // ];
        var api={
            findWidgetsByPageId:findWidgetsByPageId,
            widgetChooser:widgetChooser,
            findWidgetById:findWidgetById,
            updateWidget:updateWidget,
            deleteWidget:deleteWidget,
            findWidgetByType:findWidgetByType,
            createWidget:createWidget
        };
        return api;

        function findWidgetsByPageId(pageId){
            var url="/api/page/"+pageId+"/widget";
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

        function updateWidget(widgetId, widget){
            for(var i in widgets){
                if(widgets[i]._id===widgetId){
                    widgets[i].text=widget.text;
                    widgets[i].size=widget.size;
                    widgets[i].url=widget.url;
                    return true;
                }
            }
            return false;
        }

        function deleteWidget(widgetId){
            for(var i in widgets){
                if(widgets[i]._id===widgetId){
                    widgets.splice(i,1);
                    return true;
                }
            }
            return false;
        }

        function createWidget(pageId,widgetTypeId,text,size,url,width){
            var newWidget={};
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
                default:return null;
            }
            return $http.post("/api/page/"+pageId+"/widget/new/"+widgetTypeId,newWidget);
        }

        function findWidgetByType(pageId,widgetTypeId){
            var url="/api/page/"+pageId+"/widget/new/"+widgetTypeId;
            return $http.get(url);
        }
    }
})();
