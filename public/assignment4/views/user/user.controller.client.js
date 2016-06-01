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
                    if(user){
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

        }
        init();

        // vm.updateUser=updateUser;
        // function updateUser(user){
        //     UserService.updateUser(userId,user);
        //     vm.save="Success! Your profile was saved."
        // }
        //
        // vm.deleteUser=deleteUser;
        // function deleteUser(){
        //     var deleteUser=UserService.deleteUser(userId);
        //     $location.url("/login");
        // }
    }


    function RegisterController($location,UserService){
        var vm=this;
        vm.register=register;
        function register(user,password,verifypassword){
            var user=UserService.createUser(user,password);
            if(password===verifypassword){
                $location.url("/user/"+user._id);
            }else{
                vm.alert="Password does not match!";
            }
        }
    }
})();