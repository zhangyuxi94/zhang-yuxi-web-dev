/**
 * Created by zhangyuxi on 2016/6/13.
 */
module.exports=function(){
    var mongoose=require("mongoose");

    var BUserSchema=mongoose.Schema({
            username:String,
            password:String,
            email:String,
            dateCreated:{type:Date,default:Date.now}
        },
        {collection:"assignment.buser"}
    );
    return BUserSchema;
};