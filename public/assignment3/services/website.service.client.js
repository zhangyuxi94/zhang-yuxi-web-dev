// /**
//  * Created by zhangyuxi on 2016/5/25.
//  */
(function(){
    angular.module("WebAppMaker")
        .factory("WebsiteService",WebsiteService);
function WebsiteService(){
    var websites=[
        { _id: "1", name: "Facebook", developerId: "4" },
        { _id: "2", name: "Tweeter", developerId: "4" },
        { _id: "3", name: "Gizmodo", developerId: "4" },
        { _id: "4", name: "Tic Tac Toe", developerId: "1" },
        { _id: "5", name: "Checkers", developerId: "1" },
        { _id: "6", name: "Chess", developerId: "2" }
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