/**
 * Created by zhangyuxi on 2016/5/31.
 */

(function(){
    angular.module("MainpageApp")
        .factory("MainpageService",MainpageService);
    function MainpageService($http){
        var api={
            findAttractions:findAttractions,
            findGuide:findGuide,
            findEat:findEat,
            findHotels:findHotels,
            findAttractionsById:findAttractionsById,
            likeAttraction:likeAttraction,
            findLikeAttractions:findLikeAttractions,
            dislikeAttraction:dislikeAttraction
        };
        return api;
        
        function findAttractions(){
            var url="/BostonTrip/api/attraction";
            return $http.get(url);
        }
        function findGuide() {
            var url="/BostonTrip/api/guide";
            return $http.get(url);
        }

        function findEat() {
            var url="/BostonTrip/api/eat";
            return $http.get(url);
        }

        function findAttractionsById(attractionId){
            var url="/BostonTrip/api/attraction/"+attractionId;
            return $http.get(url);
        }

        function findHotels() {
            var url="/BostonTrip/api/hotels";
            return $http.get(url);
        }

        function likeAttraction(attractionId,name,userId){
            var attraction={
                favoriteId:attractionId,
                favoriteName:name,
                userId:userId
            };
            return $http.post("/BostonTrip/api/likeAttraction",attraction);
        }

        function findLikeAttractions(userId){
            var url="/BostonTrip/api/"+userId+"/like/attractions";
            return $http.get(url);
        }

        function dislikeAttraction(attractionId,userId){
            var url="/BostonTrip/api/"+userId+"/dislike/attractions/"+attractionId;
            return $http.delete(url);
        }
    }
})();