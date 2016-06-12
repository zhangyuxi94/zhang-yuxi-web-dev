/**
 * Created by zhangyuxi on 2016/6/9.
 */

module.exports=function(){
    var mongoose=require("mongoose");

    var WidgetSchema=mongoose.Schema({
            _page:{type:mongoose.Schema.ObjectId,ref:"Page"},
            _user:{type:mongoose.Schema.ObjectId,ref:"User"},
            _website:{type:mongoose.Schema.ObjectId,ref:"Website"},
            widgetType:String,
            size:Number,
            text:String,
            width:String,
            url:String,
            priority:Number,
            dateCreated:{type:Date,default:Date.now}
        },
        {collection:"assignment.widget"}
    );
    return WidgetSchema;
};