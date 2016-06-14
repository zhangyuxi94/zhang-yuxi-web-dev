/**
 * Created by zhangyuxi on 2016/5/31.
 */

(function(){
    angular.module("MainpageApp")
        .factory("HotelListService",HotelListService);
    function HotelListService($http){
        var api={
            findPopularHotels:findPopularHotels,
            findHighstarHotels:findHighstarHotels,
            findAttractionsRow1:findAttractionsRow1,
            findAttractionsRow2:findAttractionsRow2,
            findAttractionsRow3:findAttractionsRow3
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
        function findAttractionsRow1(){
            var url="/BostonTrip/api/attraction1";
            return $http.get(url);
        }
        function findAttractionsRow2(){
            var url="/BostonTrip/api/attraction2";
            return $http.get(url);
        }
        function findAttractionsRow3(){
            var url="/BostonTrip/api/attraction3";
            return $http.get(url);
        }
    }
})();