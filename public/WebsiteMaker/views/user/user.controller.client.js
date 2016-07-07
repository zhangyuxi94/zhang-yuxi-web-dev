/**
 * Created by zhangyuxi on 2016/5/25.
 */

(function(){
    angular
        .module("WebAppMaker")
        .controller("LoginController",LoginController)
        .controller("RegisterController",RegisterController)
        .controller("ProfileController",ProfileController);

    function LoginController($location,UserService,$rootScope){
        var vm=this;
        vm.login=login;
        function login(username,password){
            if(username==null||password==null){
                vm.alert="Please check your input!";
            }else{
                UserService
                    .login(username,password)
                    .then(function (response) {
                        var user=response.data;
                        if(user==="404"){
                            vm.alert="Username and password not match!";
                        }
                        else if(user==="400"){
                            vm.alert="Username not found!";
                        }
                        else if(user._id){
                            $rootScope.currentUser = user;
                            $location.url("/user");
                        }
                    });
            }
        }
    }

    function ProfileController($location,$routeParams,UserService,$rootScope){
        var vm=this;
        var userId=$rootScope.currentUser._id;
        function init(){
            UserService
                .findUserById(userId)
                .then(function (response) {
                    var user=response.data;
                    vm.user=user;
                });

            vm.updateUser=updateUser;
            function updateUser(newUser){
                UserService
                    .updateUser(userId,newUser)
                    .then(
                        function(response){
                            vm.save="Success! Your profile was saved."
                        },
                        function (error) {
                            vm.error="Unable to update"
                    });
            }
            vm.deleteUser=deleteUser;
            function deleteUser(){
                UserService
                    .deleteUser(userId)
                    .then(
                        function(response){
                            $location.url("/login");
                        },
                        function(error){
                            vm.error="Unable to remove user"
                        }
                    );
            }

            vm.logout=logout;
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
        }
        init();
    }

    function RegisterController($location,UserService) {
        var vm=this;
        vm.register=register;
        function register(user,password,verifypassword){
            if(user==null||password==null||verifypassword==null){
                vm.alert="Please recheck!"
            }else if(password!==verifypassword){
                vm.alert="Password not match!"
            }else{
                UserService
                        .register(user,password,verifypassword)
                        .then(
                            function(response){
                                var user=response.data;
                                if(user){
                                    $location.url("/user");
                                }
                            },
                            function(error){
                                vm.alert=error.data;
                            }
                        );
            }
        }
    }
})();