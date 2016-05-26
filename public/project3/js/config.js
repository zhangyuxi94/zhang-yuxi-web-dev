/**
 * Created by zhangyuxi on 2016/5/26.
 */
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
                "/",{
                    templateUrl:"views/user/login.view.client.html"
            })
            .otherwise({
                redirectTo:'/'
            });

    }
})();
