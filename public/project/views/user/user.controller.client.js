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
                        $location.url("/"+user._id);
                },
                    function(error){
                        vm.error="Email and password not match."
                    }
                );
        }
    }
    function RegisterController($location,UserService){
        var vm=this;
        vm.register=register;
        function register(email,username,password,verifyPassword){
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

    function ProfileController($routeParams,UserService){
        var vm=this;
        var userId=$routeParams.uid;
        vm.userId=userId;
        function init(){
            UserService
                .findUserById(userId)
                .then(function (response) {
                    var user=response.data;
                    vm.user=user;
                });
        }
        init();
    }
})();