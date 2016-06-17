/**
 * Created by zhangyuxi on 2016/5/25.
 */

(function(){
    angular.module("WebAppMaker")
        .factory("UserService",UserService);
    function UserService($http){
        var api = {
            findUserByCredentials:findUserByCredentials,
            findUserById:findUserById,
            updateUser:updateUser,
            createUser:createUser,
            deleteUser:deleteUser,
            login:login,
            logout:logout,
            register:register,
            loggedIn:loggedIn
        };
        return api;

        function loggedIn(){
            return $http.get("/api/loggedIn");
        }

        function login(username,password){
            var user={
                username:username,
                password:password
            };
            if(user.username&&user.password){
                return $http.post("/api/login",user);
            }
        }

        function logout(){
            return $http.post("/api/logout");
        }

        function register(username,password,verifyPassword){
            var user={
                username:username,
                password:password,
                verifyPassword:verifyPassword
            };
            return $http.post("/api/register",user);
        }
        function findUserByCredentials(username,password){
            var url="/api/user?username="+username+"&password="+password;
            return $http.get(url);
        }

        function findUserById(userId){
            var url="/api/user/"+userId;
            return $http.get(url);
        }

        function updateUser(userId,newUser){
            var url="/api/user/"+userId;
            return $http.put(url,newUser);
        }

        function createUser(user,password,verifyPassword){
            var user={
                username:user,
                password:password,
                verifyPassword:verifyPassword
            };
            return $http.post("/api/user",user);
        }
        function deleteUser(userId){
            var url="/api/user/"+userId;
            return $http.delete(url);
        }
    }
})();