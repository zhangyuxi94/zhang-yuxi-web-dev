/**
 * Created by zhangyuxi on 2016/6/8.
 */
module.exports=function(){

    var mongoose=require("mongoose");
    var WebsiteSchema=require("./website.schema.server")();
    var Website=mongoose.model("Website",WebsiteSchema);

    var api={
        findAllWebsitesForUser:findAllWebsitesForUser

    };
    return api;

    function findAllWebsitesForUser(userId) {
        return Website.find({"_user":userId})
    }
};