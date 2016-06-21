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
            findAttractionsById:findAttractionsById
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
    }
})();