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

    function RegisterController(){
        var vm=this;
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
        // vm.updateUser=updateUser;
        // var userId = $routeParams.uid;
        // var index=-1;
        // for(var i in users){
        //     if(users[i]._id===userId){
        //         vm.user=users[i];
        //         index=i;
        //     }
        // }
        //
        // function updateUser(newUser) {
        //     console.log(newUser);
        //     users[index].firstName=newUser.firstName;
        //     users[index].lastName=newUser.lastName;
        // }
    }

    
})();