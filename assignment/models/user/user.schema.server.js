/**
 * Created by zhangyuxi on 2016/6/7.
 */

module.exports=function(){
  var mongoose=require("mongoose");

    var UserSchema=mongoose.Schema({
        username:{type:String,required:true},
        password:String,
        firstName:String,
        lastName:String,
        facebook:{
            token:String,
            id:String,
            displayName:String
        },
        email:String,
        dateCreated:{type:Date,default:Date.now}
    },
        {collection:"assignment.user"}
    );
    return UserSchema;
};