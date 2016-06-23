/**
 * Created by zhangyuxi on 2016/5/31.
 */
(function(){
    angular.module("MainpageApp")
        .controller("findAttractionsController",findAttractionsController)
        .controller("findGuidesController",findGuidesController)
        .controller("userMainpageController",userMainpageController)
        .controller('TabsDemoCtrl',TabsDemoCtrl);


    function userMainpageController($location,$route,$routeParams,MainpageService){
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

            function unlikeAttraction(attraction){
                MainpageService
                    .dislikeAttraction(attraction,userId)
                    .then(
                        function(response){
                            $route.reload();
                        }
                    );
            }
            vm.unlikeAttraction=unlikeAttraction;

            function likeHotel(attractionId,attractionName){
                // console.log(attractionId);
                // console.log(attractionName);

                var userId=$routeParams.uid;
                MainpageService.likeHotel(attractionId,attractionName,userId)
                    .then(
                        function(response){
                            vm.hotelSuccess="Successfully Added!";
                        },
                        function(err){
                            vm.existHotel=err.data;
                        }
                    );
            }
            vm.likeHotel=likeHotel;

            MainpageService.findLikeHotels(userId)
                .then(function(response){
                    var likeHotels=response.data;
                    vm.likeHotels=likeHotels;
                });

            function unlikeHotel(attraction){
                MainpageService
                    .dislikeHotel(attraction,userId)
                    .then(
                        function(response){
                            $route.reload();
                        }
                    );
            }
            vm.unlikeHotel=unlikeHotel;

            function likeEat(attractionId,attractionName){
                var userId=$routeParams.uid;
                MainpageService.likeEat(attractionId,attractionName,userId)
                    .then(
                        function(response){
                            vm.eatSuccess="Successfully Added!";
                        },
                        function(err){
                            vm.existEat=err.data;
                        }
                    );
            }
            vm.likeEat=likeEat;

            MainpageService.findLikeEats(userId)
                .then(function(response){
                    var likeEats=response.data;
                    vm.likeEats=likeEats;
                });

            function unlikeEat(attraction){
                MainpageService
                    .dislikeEats(attraction,userId)
                    .then(
                        function(response){
                            $route.reload();
                        }
                    );
            }
            vm.unlikeEat=unlikeEat;

            function likeGuide(attractionId,attractionName){
                var userId=$routeParams.uid;
                MainpageService.likeGuide(attractionId,attractionName,userId)
                    .then(
                        function(response){
                            vm.guideSuccess="Successfully Added!";
                        },
                        function(err){
                            vm.existGuide=err.data;
                        }
                    );
            }
            vm.likeGuide=likeGuide;

            MainpageService.findLikeGuides(userId)
                .then(function(response){
                    var likeGuides=response.data;
                    vm.likeGuides=likeGuides;
                });

            function unlikeGuide(attraction){
                MainpageService
                    .dislikeGuides(attraction,userId)
                    .then(
                        function(response){
                            $route.reload();
                        }
                    );
            }
            vm.unlikeGuide=unlikeGuide;
        }
        init();
    }

    function findAttractionsController($routeParams,MainpageService){
        var vm=this;
        vm.attractionId=$routeParams.aid;

        function init(){
            var attractionId=$routeParams.aid;
            var userId=$routeParams.uid;

            MainpageService.findAttractionsById(attractionId)
                .then(
                    function(response){
                        var attraction=response.data;
                        vm.eachAttraction=attraction;
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
                    var likeEats=response.data;
                    vm.likeEats=likeEats;
                });
        }
        init();
    }

    function findGuidesController($routeParams,MainpageService){
        var vm=this;
        vm.guideId=$routeParams.gid;

        function init(){
            var guideId=$routeParams.gid;
            var userId=$routeParams.uid;

            MainpageService.findGuidesById(guideId)
                .then(
                    function(response){
                        var guide=response.data;
                        vm.eachGuide=guide;
                    }
                );

            function likeGuide(attractionId,attractionName){
                var userId=$routeParams.uid;
                MainpageService.likeGuide(attractionId,attractionName,userId)
                    .then(
                        function(response){
                            vm.guideSuccess="Successfully Added!";
                        },
                        function(err){
                            vm.existGuide=err.data;
                        }
                    );
            }
            vm.likeGuide=likeGuide;

            MainpageService.findLikeGuides(userId)
                .then(function(response){
                    var likeGuides=response.data;
                    vm.likeGuides=likeGuides;
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
