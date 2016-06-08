/**
 * Created by zhangyuxi on 2016/6/7.
 */

module.exports=function(){
    var mongoose=require("mongoose");
    // mongoose.connect('mongodb://localhost/cs5610summer1');


    var models={
        userModel:require("./user/user.model.server")()
    };
    return models;
};