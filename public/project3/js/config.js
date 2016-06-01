/**
 * Created by zhangyuxi on 2016/5/26.
 */
// BostonTripApp Controller
(function(){
    angular
        .module("BostonTripApp")
        .config(Config);
    function Config($routeProvider){
        $routeProvider
            .when(
                "/login",{
                    templateUrl:"views/user/login.view.client.html"
        })
            .when(
                "/register",{
                    templateUrl:"views/user/register.view.client.html"
                })
            .when(
                "/",{
                    templateUrl:"views/user/login.view.client.html"
            })
            .otherwise({
                redirectTo:'/'
            });
    }


// MainPageApp Controller
    angular
        .module("MainpageApp")
        .config(ConfigMainpage);

    function ConfigMainpage($routeProvider){
        $routeProvider
            .when(
            "/landingPage",{
                templateUrl:"views/mainpage/landing.view.client.html",
                    controller:"HotelListController",
                    controllerAs:"model"
            })
            .when(
                "/photos",{
                    templateUrl:"views/mainpage/landing.view.client.html",
                    controller:"HotelListController",
                    controllerAs:"model"
                })
            .when(
                "/",{
                    templateUrl:"views/mainpage/landing.view.client.html",
                    controller:"HotelListController",
                    controllerAs:"model"
                })
            .otherwise({
                redirectTo:'/'
            });
    }
})();
