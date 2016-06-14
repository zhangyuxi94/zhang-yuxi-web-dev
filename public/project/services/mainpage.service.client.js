/**
 * Created by zhangyuxi on 2016/5/31.
 */

(function(){
    angular.module("MainpageApp")
        .factory("HotelListService",HotelListService);
    function HotelListService($http){
        var api={
            findPopularHotels:findPopularHotels,
            findHighstarHotels:findHighstarHotels
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
    }
})();