/**
 * Created by zhangyuxi on 2016/5/31.
 */
(function(){
    angular.module("MainpageApp")
        .controller("userMainpageController",userMainpageController)
        .controller('TabsDemoCtrl',TabsDemoCtrl);

    function userMainpageController($routeParams,MainpageService){
        var vm=this;
        vm.userId=$routeParams.uid;
        function init(){
            MainpageService.findPopularHotels()
                .then(
                    function(response){
                        var popular=response.data;
                        vm.popularHotels=popular;
                    }
                );

            MainpageService.findHighstarHotels()
                .then(
                    function(response){
                        var highstar=response.data;
                        vm.highHotels=highstar;
                    }
                );

            MainpageService.findAttractionsRow1()
                .then(
                    function(response){
                        var attraction=response.data;
                        vm.attraction1=attraction;
                    }
                );
            MainpageService.findAttractionsRow2()
                .then(
                    function(response){
                        var attraction=response.data;
                        vm.attraction2=attraction;
                    }
                );
            MainpageService.findAttractionsRow3()
                .then(
                    function(response){
                        var attraction=response.data;
                        vm.attraction3=attraction;
                    }
                );
            MainpageService.findGuide()
                .then(
                    function(response){
                        var guide=response.data;
                        vm.guides=guide;
                    }
                );
        }
        init();
    }

    function TabsDemoCtrl($scope, $window) {
        $scope.tabs = [
            { title:'Dynamic Title 1', content:'Dynamic content 1' },
            { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
        ];

        $scope.alertMe = function() {
            setTimeout(function() {
                $window.alert('You\'ve selected the alert tab!');
            });
        };

        $scope.model = {
            name: 'Tabs'
        };
    }
})();
