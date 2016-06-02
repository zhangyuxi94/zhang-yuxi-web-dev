// /**
//  * Created by zhangyuxi on 2016/5/25.
//  */
(function(){
    angular.module("WebAppMaker")
        .factory("WebsiteService",WebsiteService);
function WebsiteService($http){
    var websites=[
        { "_id": "123", "name": "Facebook",	"developerId": "456","description":"This is Facebook" },
        { "_id": "234", "name": "Tweeter", 	"developerId": "456","description":"This is Tweeter" },
        { "_id": "456", "name": "Gizmodo", 	"developerId": "456","description":"This is Gizmodo"  },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123","description":"This is Tic Tac Toe"  },
        { "_id": "678", "name": "Checkers",	"developerId": "123" ,"description":"This is Checkers" },
        { "_id": "789", "name": "Chess",   	"developerId": "234" ,"description":"This is Chess" }
    ];
    var api={
        findWebsitesByUser:findWebsitesByUser,
        createWebsite:createWebsite,
        findWebsiteById:findWebsiteById,
        updateWebsite:updateWebsite,
        deleteWebsite:deleteWebsite
    };
    return api;

    function findWebsitesByUser(userId){
        var url="/api/user/"+userId+"/website";
        return $http.get(url);
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
        for(var i in websites){
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
                websites[i].name=website.name;
                return true;
            }
        }
        return false;
    }
    function deleteWebsite(websiteId){
        for(var i in websites){
            if(websites[i]._id===websiteId){
                websites.splice(i,1);
                return true;
            }
        }
        return false;
    }
}

})();

