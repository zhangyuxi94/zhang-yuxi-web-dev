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
            findAttractionsRow1:findAttractionsRow1,
            findAttractionsRow2:findAttractionsRow2,
            findAttractionsRow3:findAttractionsRow3,
            findGuide:findGuide,
            findEat1:findEat1
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

        function findGuide() {
            var url="/BostonTrip/api/guide";
            return $http.get(url);
        }

        function findEat1() {
            var url="/BostonTrip/api/eat1";
            return $http.get(url);
        }
    }
})();