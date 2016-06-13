/**
 * Created by zhangyuxi on 2016/5/31.
 */
(function(){
    angular.module("MainpageApp")
        .controller("userMainpageController",userMainpageController)
        .controller('TabsDemoCtrl',TabsDemoCtrl);

    function userMainpageController($routeParams,HotelListService){
        var vm=this;
        vm.userId=$routeParams.uid;
        function init(){
            var popularHotels=HotelListService.findPopularHotels();
            vm.popularHotels=popularHotels;
            var highHotels=HotelListService.findHighstarHotels();
            vm.highHotels=highHotels;
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
