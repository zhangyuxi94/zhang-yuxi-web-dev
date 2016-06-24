/**
 * Created by zhangyuxi on 2016/6/6.
 */

(function(){
    angular
        .module("MainpageApp")
        .controller("LoginController",LoginController)
        .controller("RegisterController",RegisterController)
        .controller("ProfileController",ProfileController);

    function LoginController($location,UserService){
        var vm=this;
        vm.login=login;
        function login(email,password){
            UserService
                .findUserByCredentials(email,password)
                .then(function (response) {
                    var user=response.data;
                        if(user===null){
                            vm.error="Unable to login";
                        }
                        else if(user._id){
                            $location.url("/landingPage/"+user._id);
                        }
                },
                    function(error){
                        vm.error="Unable to login"
                    }
                );
        }
    }
    function RegisterController($location,UserService){
        var vm=this;
        vm.register=register;
        function register(email,username,password,verifyPassword){
            if(email==null||password==null||verifyPassword==null){
                vm.error="Please check your enter!"
            }else if(password!==verifyPassword){
                vm.error="Password not match!"
            }else{
                UserService
                    .createUser(email,username,password,verifyPassword)
                    .then(
                        function(response){
                            var user=response.data;
                            if(user){
                                $location.url("/profile/"+user._id);
                            }
                        },
                        function(error){
                            vm.error="Please check your enter!"
                        }
                    );
            }
        }
    }

    function ProfileController($rootScope,$location,$routeParams,UserService){
        var vm=this;
        var userId=$routeParams.uid;
        // var userId=$rootScope.currentUser._id;
        vm.userId=userId;
        function init(){
            UserService
                .findUserById(userId)
                .then(function (response) {
                    var user=response.data;
                    vm.user=user;
                });

            function logout(){
                UserService
                    .logout()
                    .then(
                        function(response){
                            $rootScope.currentUser = null;
                            $location.url("/login");
                        }
                    )
            }
            vm.logout=logout;
        }
        init();
    }
})();