/**
 * Created by zhangyuxi on 2016/5/31.
 */

(function(){
    angular.module("MainpageApp")
        .factory("MainpageService",MainpageService);
    function MainpageService($http){
        var api={
            findPopularHotels:findPopularHotels,
            findHighstarHotels:findHighstarHotels,
            findAttractions:findAttractions,
            findGuide:findGuide,
            findEat:findEat,
            findHotels:findHotels
        };
        return api;

        function findPopularHotels(){
            var url="/BostonTrip/api/popular";
            return $http.get(url);
        }
        function findHighstarHotels(){
            var url="/BostonTrip/api/highstar";
            return $http.get(url);
      }
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

        function findHotels() {
            var url="/BostonTrip/api/hotels";
            return $http.get(url);
        }
    }
})();