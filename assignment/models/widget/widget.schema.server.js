/**
 * Created by zhangyuxi on 2016/6/9.
 */

module.exports=function(){
    var mongoose=require("mongoose");

    var WidgetSchema=mongoose.Schema({
            _page:{type:mongoose.Schema.ObjectId,ref:"Page"},
            widgetType:String,
            size:Number,
            text:String,
            width:String,
            url:String,
            dateCreated:{type:Date,default:Date.now}
        },
        {collection:"assignment.widget"}
    );
    return WidgetSchema;
};