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

    function findWidgetById(pageId){
        return Page.findById(pageId);
    }

    function updateWidget(pageId,page){
        delete page._id;
        return Page
            .update({_id:pageId},{
                $set:{
                    name:page.name,
                    title:page.title
                }
            });
    }
    function deleteWidget(pageId){
        return Page.remove({_id:pageId});
    }
};