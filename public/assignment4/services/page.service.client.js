/**
 * Created by zhangyuxi on 2016/5/25.
 */
(function(){
    angular.module("WebAppMaker")
        .factory("PageService",PageService);
    function PageService($http){
        // var pages=[
        //     { "_id": "321", "name": "Post 1", "websiteId": "456" ,"title": "This is Post 1" },
        //     { "_id": "432", "name": "Post 2", "websiteId": "456","title": "This is Post 2" },
        //     { "_id": "543", "name": "Post 3", "websiteId": "456","title": "This is Post 2" }
        // ];
        var api={
            findPageByWebsiteId:findPageByWebsiteId,
            createPage:createPage,
            findPageById:findPageById,
            updatePage:updatePage,
            deletePage:deletePage
        };
        return api;

        function findPageByWebsiteId(websiteId){
            var url="/api/website/"+websiteId+"/page";
            return $http.get(url);
        }

        function createPage(websiteId,page,pageTitle){
            var newPage={
                name:page,
                title:pageTitle
            };
            return $http.post("/api/website/"+websiteId+"/page",newPage);
        }

        function findPageById(pageId){
            var url="/api/page/"+pageId;
            return $http.get(url);
        }
        function updatePage(pageId,name,title){
            var url="/api/page/"+pageId;
            var updatedPage={
                name:name,
                title:title
            };
            return $http.put(url,updatedPage);
        }

        function deletePage(pageId){
            var url="/api/page/"+pageId;
            return $http.delete(url);
        }
    }
})();