/**
 * Created by zhangyuxi on 2016/6/2.
 */
module.exports=function(app,models){
    var pageModel=models.pageModel;
    app.post("/api/website/:websiteId/page",createPage);
    app.get("/api/website/:websiteId/page",findAllPagesForWebsite);
    app.get("/api/page/:pageId",findPageById);
    app.put("/api/page/:pageId",updatePage);
    app.delete("/api/page/:pageId",deletePage);

    function createPage(req,res){
        var websiteId=req.params.websiteId;
        var newPage=req.body;
        if(newPage.name==undefined||newPage.title==undefined){
            res.send(400);
        }else{
            pageModel
                .createPage(websiteId,newPage)
                .then(
                    function(page){
                        res.json(page);
                    }
                );
        }

    }

    function findAllPagesForWebsite(req,res){
        var websiteId=req.params.websiteId;
        pageModel
            .findAllPagesForWebsite(websiteId)
            .then(
                function(pages){
                    res.json(pages);
                }
            );
    }
    function findPageById(req,res){
        var pageId=req.params.pageId;
        pageModel
            .findPageById(pageId)
            .then(
                function(page){
                    res.json(page);
                }
            );
    }
    function updatePage(req,res){
        var pageId=req.params.pageId;
        var page=req.body;
        if(page.name==""||page.title==""){
            res.send(400);
        }else{
            pageModel
                .updatePage(pageId,page)
                .then(
                    function(stats){
                        res.send(200);
                    },
                    function(error){
                        res.statusCode(404).send(error);
                    }
                );
        }
    }
    function deletePage(req,res){
        var pageId=req.params.pageId;
        pageModel
            .deletePage(pageId)
            .then(
                function(stats){
                    res.send(200);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }
};