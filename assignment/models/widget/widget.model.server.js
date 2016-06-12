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
        reorderWidgets:reorderWidgets
    };
    return api;

    function findAllWidgetsForPage(pageId,websiteId,userId) {
        return Widget.find({"_page":pageId})
    }
    function createWidget(pageId,websiteId,userId,widget,widgetType,priority){
        widget._page=pageId;
        widget._user=userId;
        widget._website=websiteId;
        widget.priority=priority;
        widget.widgetType=widgetType;
        Widget.create(widget);
        return Widget.find({"_page":pageId});
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
                            if(widget.priority>start&&widget.order <= end){
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
                    return Widget.find({_page:pageId});
                },
                function(error){
                    return null;
                }
            );
    }
};