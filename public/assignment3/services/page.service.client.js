/**
 * Created by zhangyuxi on 2016/5/25.
 */
(function(){
    angular.module("WebAppMaker")
        .factory("PageService",PageService);
    function PageService(){
        var pages=[
            { "_id": "321", "name": "Post 1", "websiteId": "456" ,"title": "This is Post 1" },
            { "_id": "432", "name": "Post 2", "websiteId": "456","title": "This is Post 2" },
            { "_id": "543", "name": "Post 3", "websiteId": "456","title": "This is Post 2" }
        ];
        var api={
            findPageByWebsiteId:findPageByWebsiteId,
            createPage:createPage,
            findPageById:findPageById,
            updatePage:updatePage

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
        function findPageById(pageId){
            for(var i in pages){
                if(pages[i]._id===pageId){
                    return pages[i];
                }
            }
            return null;
        }
        function updatePage(pageId,page){
            for(var i in pages){
                if(pages[i]._id===pageId){
                    pages[i].name=page.name;
                    pages[i].title=page.title;
                    return true;
                }
            }
            return false;
        }
        // function deletePage(pageId){}
    }
})();