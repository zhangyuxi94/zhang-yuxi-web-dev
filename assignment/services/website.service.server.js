/**
 * Created by zhangyuxi on 2016/6/1.
 */
module.exports=function(app,models){
    var websiteModel=models.websiteModel;
    app.post("/api/user/:userId/website",createWebsite);
    app.get("/api/user/:userId/website",findAllWebsitesForUser);
    app.get("/api/website/:websiteId",findWebsiteById);
    app.put("/api/website/:websiteId",updateWebsite);
    app.delete("/api/website/:websiteId",deleteWebsite);

    function createWebsite(req,res){
        var userId=req.params.userId;
        var newWebsite=req.body;
        if(newWebsite.name==undefined||newWebsite.description==undefined){
            res.send(400);
        }
        else{
            websiteModel
                .createWebsite(userId,newWebsite)
                .then(
                    function (website) {
                        res.json(website);
                    }
                );
        }
    }

    function findAllWebsitesForUser(req,res){
        var userId=req.params.userId;
        websiteModel
            .findAllWebsitesForUser(userId)
            .then(
                function (websites){
                    res.json(websites);
                }
            )
    }
    function findWebsiteById(req,res){
        var websiteId=req.params.websiteId;
        websiteModel
            .findWebsiteById(websiteId)
            .then(
                function(website){
                    res.json(website);
                }
            );
    }
    function updateWebsite(req,res){
        var websiteId=req.params.websiteId;
        var website=req.body;
        if(website.name==""||website.description==""){
            res.send(400);
        }
        else{
            websiteModel
                .updateWebsite(websiteId,website)
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
    function deleteWebsite(req,res){
        var websiteId=req.params.websiteId;
        websiteModel
            .deleteWebsite(websiteId)
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

