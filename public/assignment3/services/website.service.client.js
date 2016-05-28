// /**
//  * Created by zhangyuxi on 2016/5/25.
//  */
(function(){
    angular.module("WebAppMaker")
        .factory("WebsiteService",WebsiteService);
function WebsiteService(){
    var websites=[
        { "_id": "123", "name": "Facebook",	"developerId": "456" },
        { "_id": "234", "name": "Tweeter", 	"developerId": "456" },
        { "_id": "456", "name": "Gizmodo", 	"developerId": "456" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123" },
        { "_id": "678", "name": "Checkers",	"developerId": "123" },
        { "_id": "789", "name": "Chess",   	"developerId": "234" }
    ];
    var api={
        findWebsitesByUser:findWebsitesByUser
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
}

})();
// (function(){
//     function WebsiteService (){
//
//         var api={
//             "createWebsite":"createWebsite",
//             "findWebsitesByUser":"findWebsitesByUser",
//             "findWebsiteById":"findWe  eById",
//             "updateWebsite":"updateWebsite",
//             "deleteWebsite":"deleteWebsite"
//         };
//         return api;
//         function createWebsite(userId,website){}
//         function findWebsitesByUser(userId){
//             var resultSet=[];
//             for(var i in websites){
//                 if(websites[i].developerId===userId){
//                     resultSet.push(websites[i]);
//                 }
//             }
//             return resultSet;
//
//         }
//         function findWebsiteById(websiteId){}
//         function updateWebsite(websiteId,website){}
//         function deleteWebsite(websiteId){}
//     }
// })();