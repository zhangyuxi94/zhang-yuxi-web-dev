/**
 * Created by zhangyuxi on 2016/5/25.
 */

(function(){
    angular.module("WebAppMaker")
        .factory("UserService",UserService);
    function UserService($http){
     var users=[
         {_id: "123", username: "alice",	password: "alice",	firstName: "Alice",  lastName: "Wonder"  },
         {_id: "234", username: "bob",  	password: "bob",  	firstName: "Bob",	lastName: "Marley"  },
         {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
         {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
     ];
        var api = {
            findUserByCredentials:findUserByCredentials,
            findUserById:findUserById,
            // updateUser:updateUser,
            createUser:createUser
            // deleteUser:deleteUser
        };
        return api;

        function findUserByCredentials(username,password){
            var url="/api/user?username="+username+"&password="+password;
            return $http.get(url);
        }

        function findUserById(userId){
            var url="/api/user/"+userId;
            return $http.get(url);
        }

        // function updateUser(userId,user){
        //     for(var i in users){
        //         if(users[i]._id===userId){
        //             users[i].firstName=user.firstName;
        //             users[i].lastName=user.lastName;
        //             return true;
        //         }
        //     }
        //     return false;
        // }
        //
        function createUser(user,password){
            var user={
                username:user,
                password:password
            };
            return $http.post("/api/user",user);
            // var length=users.length-1;
            // var uid=users[length]._id;
            // uid=parseInt(uid);
            // uid+=1;
            // uid=uid.toString();
            // var uname=user;
            // var upwd=password;
            // var userarry={_id: uid,username: uname, password: upwd};
            // users.push(userarry);
            // return users[length+1];
        }
        //
        // function deleteUser(userId){
        //     for(var i in users){
        //         if(users[i]._id===userId){
        //             users.splice(i,1);
        //             return true;
        //         }
        //     }
        //     return false;
        // }
    }
})();