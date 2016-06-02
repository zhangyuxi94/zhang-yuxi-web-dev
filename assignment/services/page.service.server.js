/**
 * Created by zhangyuxi on 2016/6/2.
 */
module.exports=function(app){
    var pages=[
        { "_id": "321", "name": "Post 1", "websiteId": "456" ,"title": "This is Post 1" },
        { "_id": "432", "name": "Post 2", "websiteId": "456","title": "This is Post 2" },
        { "_id": "543", "name": "Post 3", "websiteId": "456","title": "This is Post 3" }
    ];

    app.post("/api/website/:websiteId/page",createPage);
    app.get("/api/website/:websiteId/page",findAllPagesForWebsite);
    app.get("/api/page/:pageId",findPageById);
    app.put("/api/page/:pageId",updatePage);
    app.delete("/api/page/:pageId",deletePage);

    function createPage(req,res){}
    function findAllPagesForWebsite(req,res){
        var websiteId=req.params.websiteId;
        var result=[];
        for(var p in pages){
            if(pages[p].websiteId===websiteId){
                result.push(pages[p])
            }
        }
        res.json(result);
    }
    function findPageById(req,res){
        var pageId=req.params.pageId;
        for(var p in pages){
            if(pages[p]._id===pageId){
                res.send(pages[p]);
                return;
            }
        }
        res.send({});
    }
    function updatePage(req,res){}
    function deletePage(req,res){}
};