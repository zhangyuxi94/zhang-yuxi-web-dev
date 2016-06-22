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
        vm.attractionId=$routeParams.aid;

        function init(){
            var attractionId=$routeParams.aid;
            var userId=$routeParams.uid;

            MainpageService.findAttractions()
                .then(
                    function(response){
                        var attraction=response.data;
                        vm.attraction=attraction;
                    }
                );
            MainpageService.findAttractionsById(attractionId)
                .then(
                    function(response){
                        var attraction=response.data;
                        vm.eachAttraction=attraction;
                    }
                );
            MainpageService.findGuide()
                .then(
                    function(response){
                        var guide=response.data;
                        vm.guides=guide;
                    }
                );
            MainpageService.findEat()
                .then(
                    function(response){
                        var eat=response.data;
                        vm.eats=eat;
                    }
                );
            MainpageService.findHotels()
                .then(
                    function(response){
                        var hotels=response.data;
                        vm.hotels=hotels;
                    }
                );
            function likeAttraction(attractionId,attractionName){
                // console.log(attractionId);
                // console.log(attractionName)
                var userId=$routeParams.uid;
                MainpageService.likeAttraction(attractionId,attractionName,userId)
                    .then(
                        function(response){
                            vm.attractionSuccess="Successfully Added!";
                        },
                        function(err){
                            vm.existAttraction=err.data;
                        }
                    );
            }
            vm.likeAttraction=likeAttraction;

            MainpageService.findLikeAttractions(userId)
                .then(function(response){
                    var likeAttractions=response.data;
                    vm.likeAttractions=likeAttractions;
                });
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
