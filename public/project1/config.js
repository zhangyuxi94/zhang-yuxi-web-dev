/**
 * Created by zhangyuxi on 2016/5/26.
 */
(function(){
    angular
        .module("BostonTrip")
        .config(Config);
    function Config($routeProvider){
        $routeProvider
            .when(
                "/",{
                    templateUrl:"views/landingpage/landingpage.view.client.html"
                })
            .when(
                "/bostontrip",{
                    templateUrl:"views/landingpage/landingpage.view.client.html"
                })
            .when(
                "/aboutBoston",{
                    templateUrl:"views/about/boston.view.client.html"
                })
            .when(
                "/myCarousel",{
                    templateUrl:"views/landingpage/landingpage.view.client.html/#myCarousel"
                })
            .otherwise({
                redirectTo:"/"
            });


    }
})();