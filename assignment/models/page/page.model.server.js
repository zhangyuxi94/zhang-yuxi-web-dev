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
    function findPageById(pageId){
        return Page.findById(pageId);
    }

    function updatePage(pageId,page){
        delete page._id;
        return Page
            .update({_id:pageId},{
                $set:{
                    name:page.name,
                    title:page.title
                }
            });
    }
    function deletePage(pageId){
        return Page.remove({_id:pageId});
    }
};