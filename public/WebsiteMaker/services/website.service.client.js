// /**
//  * Created by zhangyuxi on 2016/5/25.
//  */
(function(){
    angular.module("WebAppMaker")
        .factory("WebsiteService",WebsiteService);
function WebsiteService($http){
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
    function createWebsite(userId,website,description){
        var newWebsite={
            name:website,
            description:description
        };
        return $http.post("/api/user/"+userId+"/website",newWebsite);
    }
    function findWebsiteById(websiteId){
        var url="/api/website/"+websiteId;
        return $http.get(url);
    }
    function updateWebsite(websiteId,name,description){
        var url="/api/website/"+websiteId;
        var updatedWebsite={
            name:name,
            description:description
        };
        return $http.put(url,updatedWebsite);
    }
    function deleteWebsite(websiteId){
        var url="/api/website/"+websiteId;
        return $http.delete(url);
    }
}

})();

