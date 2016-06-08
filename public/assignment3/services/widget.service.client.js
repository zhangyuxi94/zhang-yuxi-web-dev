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
            {"widgetType": "HEADER","typeId": "1"},
            {"widgetType": "IMAGE","typeId": "2"},
            {"widgetType": "HTML","typeId": "3"},
            {"widgetType": "YOUTUBE","typeId": "4"}
        ];
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

        function createWidget(pageId,widgetType,widgetTypeId,text,size,url,width){
            var newWidget={};
            var length=widgets.length-1;
            var wgid=widgets[length]._id;
            wgid=parseInt(wgid);
            wgid+=1;
            wgid=wgid.toString();
            // for(var i in widgets){
                // if(widgets[i].pageId===pageId){

                    switch(widgetTypeId){
                        case "1": newWidget= { "_id": wgid, "widgetType": widgetType, "pageId": pageId, "size": size, "text": text};
                            widgets.push(newWidget);
                            break;
                        case "2":  newWidget= { "_id":wgid, "widgetType": widgetType, "pageId": pageId, "url": url,"width":width};
                            widgets.push(newWidget);
                            break;
                        case "3": newWidget= { "_id": wgid, "widgetType": widgetType, "pageId": pageId, "text": text};
                            widgets.push(newWidget);
                            break;
                        case "4":  newWidget= { "_id": wgid, "widgetType": widgetType, "pageId": pageId, "url": url,"width":width};
                            widgets.push(newWidget);
                            break;
                        default:return null;
                    // }

                // }
            }
            return widgets;
        }

        function findWidgetByType(widgetTypeId){
            for(var i in widgetFilter){
                if(widgetFilter[i].typeId===widgetTypeId){
                    return widgetFilter[i];
                }
            }
            return null;

        }
        
    }
})();