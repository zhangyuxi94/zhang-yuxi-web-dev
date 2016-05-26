/**
 * Created by zhangyuxi on 2016/5/25.
 */

(function(){
    angular
        .module("WebAppMaker")
        .controller("LoginController",LoginController)
        .controller("RegisterController",RegisterController)
        .controller("ProfileController",ProfileController);

    function LoginController($location){
        var vm=this;
        vm.login=login;
        function login(username,password){
            for(var i in users){
                if(users[i].username === username && users[i].password===password){
                    $location.url("/user/"+users[i]._id);
                }
                else{
                    vm.error="User Not Found";
                }
            }
        };


    }
    // function LoginController($location,UserService){
    //     var vm=this;
    //     vm.login=login;
    //     function login(username, password) {
    //         var user = UserService.findUserByCredentials(username,password);
    //         if(user){
    //             $location.url("/user/"+user._id);
    //         }else{
    //             vm.alert="Unable to login";
    //         }
    //     }
    // }
    function RegisterController(){
        var vm=this;
    }

    var users=[
        {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
        {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
        {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
    ];

    function ProfileController($routeParams){
        var vm=this;
        vm.updateUser=updateUser;
        var userId = $routeParams.uid;
        var index=-1;
        for(var i in users){
            if(users[i]._id===userId){
                vm.user=users[i];
                index=i;
            }
        }

        function updateUser(newUser) {
            console.log(newUser);
            users[index].firstName=newUser.firstName;
            users[index].lastName=newUser.lastName;
        }
        // function init(){
        //     vm.user = UserService.findUserById(vm.userId);
        // }
        // init();
    }
})();