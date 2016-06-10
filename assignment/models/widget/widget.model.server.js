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
        deleteWidget:deleteWidget
    };
    return api;

    function findAllWidgetsForPage(pageId) {
        return Widget.find({"_page":pageId})
    }
    function createWidget(pageId,widget,widgetType){
        widget._page=pageId;
        widget.widgetType=widgetType;
        return Widget.create(widget);
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
            default:return null;
        }

    }
    function deleteWidget(pageId){
        return Page.remove({_id:pageId});
    }
};