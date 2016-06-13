/**
 * Created by zhangyuxi on 2016/6/9.
 */
module.exports=function(){
    var mongoose=require("mongoose");
    var WidgetSchema=require("./widget.schema.server")();
    var Widget=mongoose.model("Widget",WidgetSchema);

    var api={
        findAllWidgetsForPage:findAllWidgetsForPage,
        createWidget:createWidget,
        findWidgetByType:findWidgetByType,
        findWidgetById:findWidgetById,
        updateWidget:updateWidget,
        deleteWidget:deleteWidget,
        reorderWidgets:reorderWidgets,
        newFlickr:newFlickr
    };
    return api;

    function findAllWidgetsForPage(pageId,websiteId,userId) {
        return Widget.find({"_page":pageId})
    }
    function createWidget(pageId,websiteId,userId,widget,widgetType,priority){
        widget._page=pageId;
        widget._user=userId;
        widget._website=websiteId;
        // widget.priority=priority;
        widget.widgetType=widgetType;
        // Widget.create(widget);
        return Widget.find({"_page":pageId})
            .then(
                function (widgets) {
                    widget.priority = widgets.length;
                    return Widget.create(widget);
                },
                function (error) {
                    return null;
                }
            );
        // return Widget.find({"_page":pageId});
    }

    function findWidgetByType(){}

    function findWidgetById(widgetId){
        return Widget.findById(widgetId);
    }

    function updateWidget(widgetId,widget){
        delete widget._id;
        var widgetType=widget.widgetType;

        switch (widgetType){
            case "HEADER":
                return Widget
                    .update({_id:widgetId},{
                        $set:{
                            size:widget.size,
                            text:widget.text
                            // width:widget.width
                            // url:widget.url
                        }
                    });
                break;
            case "IMAGE":
                return Widget
                    .update({_id:widgetId},{
                        $set:{
                            width:widget.width,
                            url:widget.url
                        }
                    });
                break;
            case "Flickr":
                return Widget
                    .update({_id:widgetId},{
                        $set:{
                            url:widget.url
                        }
                    });
                break;
            case "HTML":
                return Widget
                    .update({_id:widgetId},{
                        $set:{
                            text:widget.text
                        }
                    });
                break;
            case "YOUTUBE":
                return Widget
                    .update({_id:widgetId},{
                        $set:{
                            width:widget.width,
                            url:widget.url
                        }
                    });
                break;
            case "TEXT":
                return Widget
                    .update({_id:widgetId},{
                        $set:{
                            text:widget.text,
                            rows:widget.rows,
                            placeholder:widget.placeholder,
                            formatted:widget.formatted
                        }
                    });
                break;
            default:return null;
        }

    }
    function newFlickr(widgetId,widget){
        Widget._id=widgetId;
        return Widget.create(widget);
        // return Widget
        //     .update({_id:widgetId},{
        //         $set:{
        //             url:widget.url
        //         }
        //     });
    }

    function deleteWidget(pageId){
        return Widget.remove({_id:pageId});
    }

    function reorderWidgets(start,end,pageId){
        return Widget
            .find({"_page":pageId})
            .then(
                function (widgets){
                    for(var i in widgets){
                        var widget = widgets[i];
                        if(start<end){
                            if(widget.priority>start&&widget.priority <= end){
                                widget.priority--;
                                widget.save(function(){});
                            }else if(widget.priority===start){
                                widget.priority = end;
                                widget.save(function(){});
                            }
                        }else if(start>end){
                            if(widget.priority >= end && widget.priority < start){
                                widget.priority ++;
                                widget.save(function(){});
                            }else if(widget.priority === start){
                                widget.priority = end;
                                widget.save(function(){});
                            }
                        }
                    }
                    return Widget.find({"_page":pageId});
                },
                function(error){
                    return null;
                }
            );
    }
};