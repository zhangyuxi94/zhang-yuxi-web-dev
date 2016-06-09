/**
 * Created by zhangyuxi on 2016/6/9.
 */
module.exports=function(){
    var mongoose=require("mongoose");
    var PageSchema=require("./page.schema.server")();
    var Page=mongoose.model("Page",PageSchema);

    var api={
        findAllPagesForWebsite:findAllPagesForWebsite,
        createPage:createPage,
        findPageById:findPageById,
        updatePage:updatePage,
        deletePage:deletePage
    };
    return api;

    function findAllPagesForWebsite(websiteId) {
        return Page.find({"_website":websiteId})
    }
    function createPage(websiteId,page){
        page._website=websiteId;
        return Page.create(page);
    }
    function findPageById(websiteId){
        // return Website.findById(websiteId);
    }

    function updatePage(websiteId,website){
        // delete website._id;
        // return Website
        //     .update({_id:websiteId},{
        //         $set:{
        //             name:website.name,
        //             description:website.description
        //         }
        //     });
    }
    function deletePage(websiteId){
        // return Website.remove({_id:websiteId});
    }
};