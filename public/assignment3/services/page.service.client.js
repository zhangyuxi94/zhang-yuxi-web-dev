/**
 * Created by zhangyuxi on 2016/5/25.
 */
(function(){
    angular.module("WebAppMaker")
        .factory("PageService",PageService);
    function PageService(){
        var pages=[
            { "_id": "321", "name": "Post 1", "websiteId": "456" },
            { "_id": "432", "name": "Post 2", "websiteId": "456" },
            { "_id": "543", "name": "Post 3", "websiteId": "456" }
        ];
        var api={
            findPageByWebsiteId:findPageByWebsiteId
            // "findPageById":"findPageById",
            // "updatePage":"updatePage",
            // "deletePage":"deletePage"
            // "createPage":"createPage",

        };
        return api;
        // function createPage(websiteId,page){}
        function findPageByWebsiteId(websiteId){
            var resultSet=[];
            for(var i in pages){
                if(pages[i].websiteId===websiteId){
                    resultSet.push(pages[i]);
                }
            }
            return resultSet;
        }
        // function findPageById(pageId){}
        // function updatePage(pageId,page){}
        // function deletePage(pageId){}
    }
})();