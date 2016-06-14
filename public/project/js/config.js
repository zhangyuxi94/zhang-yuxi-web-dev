/**
 * Created by zhangyuxi on 2016/5/26.
 */
// BostonTripApp Controller
(function(){
    // angular
    //     .module("BostonTripApp")
    //     .config(Config);
    // function Config($routeProvider){
    //     $routeProvider
    //         .when(
    //             "/login",{
    //                 templateUrl:"views/user/login.view.client.html",
    //                 controller:"LoginController",
    //                 controllerAs:"model"
    //     })
    //         .when(
    //             "/register",{
    //                 templateUrl:"views/user/register.view.client.html"
    //             })
    //         .when(
    //             "/",{
    //                 templateUrl:"views/user/login.view.client.html",
    //                 controller:"LoginController",
    //                 controllerAs:"model"
    //         })
    //         .otherwise({
    //             redirectTo:'/'
    //         });
    // }


// MainPageApp Controller
    angular
        .module("MainpageApp")
        .config(ConfigMainpage);

    function ConfigMainpage($routeProvider){
        $routeProvider
            .when(
                "/landingPage",{
                    templateUrl:"views/mainpage/landing.view.client.html",
                    controller:"userMainpageController",
                    controllerAs:"model"
            })
            .when(
                "/landingPage/:uid",{
                    templateUrl:"views/mainpage/userLanding.view.client.html",
                    controller:"userMainpageController",
                    controllerAs:"model"
                })
            .when(
                "/login",{
                    templateUrl:"views/user/login.view.client.html",
                    controller:"LoginController",
                    controllerAs:"model"
                })
            .when(
                "/register",{
                    templateUrl:"views/user/register.view.client.html",
                    controller:"RegisterController",
                    controllerAs:"model"
                })
            .when(
                "/profile/:uid",{
                    templateUrl:"views/user/profile.view.client.html",
                    controller:"ProfileController",
                    controllerAs:"model"
                })
            .when(
                "/about",{
                    templateUrl:"views/about/about.view.visitor.html",
                    controller:"userMainpageController",
                    controllerAs:"model"
                })
            .when(
                "/:uid/about",{
                    templateUrl:"views/about/about.view.user.html",
                    controller:"userMainpageController",
                    controllerAs:"model"
                })
            .when(
                "/attractions",{
                    templateUrl:"views/attraction/attraction.view.visitor.html",
                    controller:"userMainpageController",
                    controllerAs:"model"
                })
            .when(
                "/:uid/attractions",{
                    templateUrl:"views/attraction/attraction.view.user.html",
                    controller:"userMainpageController",
                    controllerAs:"model"
                })
            .when(
                "/guide",{
                    templateUrl:"views/guide/guide.view.visitor.html",
                    controller:"userMainpageController",
                    controllerAs:"model"
                })
            .when(
                "/:uid/guide",{
                    templateUrl:"views/guide/guide.view.user.html",
                    controller:"userMainpageController",
                    controllerAs:"model"
                })
            .when(
                "/live",{
                    templateUrl:"views/live/live.view.visitor.html",
                    controller:"userMainpageController",
                    controllerAs:"model"
                })
            .when(
                "/:uid/live",{
                    templateUrl:"views/live/live.view.user.html",
                    controller:"userMainpageController",
                    controllerAs:"model"
                })
            .when(
                "/",{
                    templateUrl:"views/mainpage/landing.view.client.html",
                    controller:"userMainpageController",
                    controllerAs:"model"
                })
            .otherwise({
                redirectTo:'/'
            });
    }
})();
