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
            var user=UserService.findUserByCredentials(username,password);
            if(user){
                $location.url("/user/"+user._id);
            }
            else{
                vm.alert="Unable to login";
            }
        }
    }

    function ProfileController($routeParams,UserService){
        var vm=this;
        vm.updateUser=updateUser;

        var userId=$routeParams.uid;
        function init(){
            var user=UserService.findUserById(userId);
            vm.user=user;
        }
        init();

        function updateUser(user){
            UserService.updateUser(userId,user);
            vm.save="Success! Your profile was saved."
        }
    }

    function RegisterController($location,UserService){
        var vm=this;
        vm.register=register;
        function register(user,password){
            var user=UserService.createUser(user,password);
            console.log(user);
            console.log(user._id);
            $location.url("/user/"+user._id);

            // console.log(password);

        }
    }
    
})();