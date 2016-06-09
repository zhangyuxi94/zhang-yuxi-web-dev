/**
 * Created by zhangyuxi on 2016/6/1.
 */
module.exports=function(app,models){
    var websiteModel=models.websiteModel;

    var websites=[
            { "_id": "123", "name": "Facebook",    "developerId": "456" ,"description":"This is Facebook"},
            { "_id": "234", "name": "Tweeter",     "developerId": "456" ,"description":"This is Tweeter"},
            { "_id": "456", "name": "Gizmodo",     "developerId": "456","description":"This is Gizmodo" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123" ,"description":"This is Tic Tac Toe"},
            { "_id": "678", "name": "Checkers",    "developerId": "123" ,"description":"This is Checkers"},
            { "_id": "789", "name": "Chess",       "developerId": "234" ,"description":"This is Chess"}
        ];

    app.post("/api/user/:userId/website",createWebsite);
    app.get("/api/user/:userId/website",findAllWebsitesForUser);
    app.get("/api/website/:websiteId",findWebsiteById);
    app.put("/api/website/:websiteId",updateWebsite);
    app.delete("/api/website/:websiteId",deleteWebsite);

    function createWebsite(req,res){
        var userId=req.params.userId;
        var newWebsite=req.body;
        websiteModel
            .createWebsite(userId,newWebsite)
            .then(
                function (website) {
                    res.json(website);
                }
            );
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
        websiteModel
            .updateWebsite(websiteId,website)
            .then(
                function(stats){
                    console.log(stats);
                    res.send(200);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );

        // for(var w in websites){
        //     if(websites[w]._id===websiteId){
        //         websites[w].name=website.name;
        //         websites[w].description=website.description;
        //         res.send(200);
        //         return;
        //     }
        // }
        // res.send(400);
    }
    function deleteWebsite(req,res){
        var websiteId=req.params.websiteId;
        for(var w in websites){
            if(websites[w]._id===websiteId){
                websites.splice(w,1);
                res.send(200);
                return;
            }
        }
        res.send(400);
    }
};

