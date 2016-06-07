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
            createUser:createUser
            // findUserById:findUserById,
            // updateUser:updateUser,
            // deleteUser:deleteUser
        };
        return api;
        function findUserByCredentials(email,password){
            var url="/BostonTrip/api/user?email="+email+"&password="+password;
            return $http.get(url);
        }

        function createUser(email,username,password,verifyPassword){
            // var user={"a":email,"b":username,"c":password,"d":verifyPassword};
            // return user;

            var user={
                email:email,
                username:username,
                password:password,
                verifyPassword:verifyPassword
            };
            return $http.post("/BostonTrip/api/user",user);
        }

        // function findUserByCredentials(email,password){
        //     var url="/BostonTrip/api/user";
        //     var user={
        //         email:email,
        //         password:password
        //             };
        //     return $http.get(url,user);
        // }

        // function findUserById(userId){
        //     var url="/api/user/"+userId;
        //     return $http.get(url);
        // }
        //
        // function updateUser(userId,newUser){
        //     var url="/api/user/"+userId;
        //     return $http.put(url,newUser);
        // }
        //
        // function createUser(user,password,verifyPassword){
        //     var user={
        //         username:user,
        //         password:password,
        //         verifyPassword:verifyPassword
        //     };
        //     return $http.post("/api/user",user);
        // }
        // function deleteUser(userId){
        //     var url="/api/user/"+userId;
        //     return $http.delete(url);
        // }
    }
})();