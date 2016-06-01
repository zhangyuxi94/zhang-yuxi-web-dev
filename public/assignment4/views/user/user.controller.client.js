/**
 * Created by zhangyuxi on 2016/5/25.
 */

(function(){
    angular
        .module("WebAppMaker")
        .controller("LoginController",LoginController)
        .controller("RegisterController",RegisterController)
        .controller("ProfileController",ProfileController);

    function LoginController($location,UserService){
        var vm=this;
        vm.login=login;
        function login(username,password){
            UserService
                .findUserByCredentials(username,password)
                .then(function (response) {
                    var user=response.data;
                    if(user._id){
                        $location.url("/user/"+user._id);
                    }
                    else{
                        vm.alert="Unable to login";
                    }
            });
        }
    }

    function ProfileController($location,$routeParams,UserService){
        var vm=this;
        var userId=$routeParams.uid;
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

        }
        init();


    }


    function RegisterController($location,UserService){
        var vm=this;
        vm.register=register;
        function register(user,password,verifypassword){
            UserService
                .createUser(user,password)
                .then(function(response){
                    var user=response.data;
                    if(user){
                        $location.url("/user/"+user._id);
                    }
                });
            // if(password===verifypassword){
            //     $location.url("/user/"+user._id);
            // }else{
            //     vm.alert="Password does not match!";
            // }
        }
    }
})();