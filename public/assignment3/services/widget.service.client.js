/**
 * Created by zhangyuxi on 2016/5/25.
 */
(function(){
    angular.module("WebAppMaker")
        .factory("WidgetService",WidgetService);
    function WidgetService(){
        var widgets=[
            { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p><a href='https://www.youtube.com/watch?time_continue=550&v=KPe-WY2eghY'>A rally in Fresno, California</a> today, newfound irrigation expert Donald Trump finally revealed the solution to the drought that’s been crippling California for the past five years: Turn the water back on, idiots.</p>"},
            { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "California's Drought: Start Opening Up the Water"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Fortunately for California, when Donald Trump becomes president, he plans to “start opening up the water so that you can have your farmers survive so that your job market will get better”—a position that is genuinely hard to argue with, though not for the usual reasons.</p>"},
        ];

        var widgetFilter=[
            { "_id": "123", "widgetType": "HEADER"},
            { "_id": "345", "widgetType": "IMAGE"},
            { "_id": "789", "widgetType": "HTML"},
            { "_id": "678", "widgetType": "YOUTUBE"}
        ];
        var api={
            findWidgetsByPageId:findWidgetsByPageId,
            widgetChooser:widgetChooser,
            // createWidget:createWidget
            findWidgetById:findWidgetById
            // "updateWidget":"updateWidget",
            // "deleteWidget":"deleteWidget"
        };
        return api;

        function findWidgetsByPageId(pageId){
            var resultSet=[];
            for(var i in widgets){
                if(widgets[i].pageId===pageId){
                    resultSet.push(widgets[i]);
                }
            }
            return resultSet;
        }

        function widgetChooser(){
            return widgetFilter;
        }

        function findWidgetById(widgetId){
            for(var i in widgets){
                if(widgets[i]._id===widgetId){
                    return widgets[i];
                }
            }
            return null;
        }


        // function createWidget(pageId, widget){
        //     var resultSet=[];
        //     var resultSet2=[];
        //     for(var i in widgets){
        //         if(widgets[i].pageId===pageId){
        //             resultSet.push(widgets[i]);
        //         }
        //     }
        //     return resultSet;
        // }
        // function updateWidget(widgetId, widget){}
        // function deleteWidget(widgetId){}
    }
})();
