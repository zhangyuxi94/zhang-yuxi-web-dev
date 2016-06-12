/**
 * Created by zhangyuxi on 2016/6/9.
 */

module.exports=function(){
    var mongoose=require("mongoose");

    var TodoSchema=mongoose.Schema({
        priority:Number,
        title:String,
        todo:String
        },
        {collection:"assignment.todo"}
    );
    return TodoSchema;
};