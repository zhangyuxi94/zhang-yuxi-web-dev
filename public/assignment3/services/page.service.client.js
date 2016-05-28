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
            findPageByWebsiteId:findPageByWebsiteId,
            createPage:createPage
            // updatePage:updatePage
            // "findPageById":"findPageById",
            // "deletePage":"deletePage"

        };
        return api;

        function findPageByWebsiteId(websiteId){
            var resultSet=[];
            for(var i in pages){
                if(pages[i].websiteId===websiteId){
                    resultSet.push(pages[i]);
                }
            }
            return resultSet;
        }

        function createPage(websiteId,page,pageTitle){
            var length=pages.length-1;
            var pid=pages[length]._id;
            pid=parseInt(pid);
            pid+=1;
            pid=pid.toString();
            var newPage={
                "_id": pid,
                "name": page,
                "title":pageTitle,
                "websiteId":websiteId

            };
            pages.push(newPage);
            return newPage;

        }
        // function findPageById(pageId){}
        // function updatePage(pageId,page){}
        // function deletePage(pageId){}
    }
})();