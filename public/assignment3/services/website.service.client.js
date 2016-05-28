// /**
//  * Created by zhangyuxi on 2016/5/25.
//  */
(function(){
    angular.module("WebAppMaker")
        .factory("WebsiteService",WebsiteService);
function WebsiteService(){
    var websites=[
        { "_id": "123", "name": "Facebook",	"developerId": "456" },
        { "_id": "234", "name": "Tweeter", 	"developerId": "456","description":"This is Tweeter" },
        { "_id": "456", "name": "Gizmodo", 	"developerId": "456" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123" },
        { "_id": "678", "name": "Checkers",	"developerId": "123" },
        { "_id": "789", "name": "Chess",   	"developerId": "234" }
    ];
    var api={
        findWebsitesByUser:findWebsitesByUser,
        createWebsite:createWebsite,
        findWebsiteById:findWebsiteById,
        updateWebsite:updateWebsite

    };
    return api;

    function findWebsitesByUser(userId){
        var resultSet=[];
        for(var i in websites){
            if(websites[i].developerId===userId){
                resultSet.push(websites[i]);
            }
        }
        return resultSet;
    }
    function createWebsite(userId,website,description){ var length=websites.length-1;
        var wid=websites[length]._id;
        wid=parseInt(wid);
        wid+=1;
        wid=wid.toString();
        var newWebsite={
            "_id":wid,
            "name": website,
            "developerId": userId,
            "description":description};
        websites.push(newWebsite);
        return websites;
    }
    function findWebsiteById(websiteId){
        for(i in websites){
            if(websites[i]._id===websiteId){
                return websites[i];
            }
        }
        return null;
    }
    function updateWebsite(websiteId,website){
        for(var i in websites){
            if(websites[i]._id===websiteId){
                websites[i].description=website.description;
                return true;
            }
        }
        return false;
    }
}

})();

//         var api={
//             "deleteWebsite":"deleteWebsite"
//         };
//         return api;
//        
//
//         function deleteWebsite(websiteId){}
