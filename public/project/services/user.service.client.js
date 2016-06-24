/**
 * Created by zhangyuxi on 2016/6/6.
 */


(function(){
    angular
        .module("MainpageApp")
        .factory("UserService",UserService);

    function UserService($http){
        var api = {
            findUserByCredentials:findUserByCredentials,
            createUser:createUser,
            findUserById:findUserById
            // login:login,
            // loggedIn:loggedIn,
            // logout:logout
        };
        return api;
        function findUserByCredentials(email,password){
            var url="/BostonTrip/api/user?email="+email+"&password="+password;
            return $http.get(url);
        }

        function createUser(email,username,password,verifyPassword){
            var user={
                email:email,
                username:username,
                password:password,
                verifyPassword:verifyPassword
            };
            return $http.post("/BostonTrip/api/user",user);
        }

        function findUserById(userId){
            var url="/BostonTrip/api/user/"+userId;
            return $http.get(url);
        }

        function login(email,password){
            var user={
                username:email,
                password:password
            };
            if(user.username&&user.password){
                return $http.post("/BostonTrip/api/login",user);
            }
        }

        function loggedIn(){
            return $http.get("/BostonTrip/api/loggedIn");
        }

        function logout(){
            return $http.post("/BostonTrip/api/logout");
        }
    }
})();