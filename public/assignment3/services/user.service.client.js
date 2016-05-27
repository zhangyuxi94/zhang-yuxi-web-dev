/**
 * Created by zhangyuxi on 2016/5/25.
 */

(function(){
    angular.module("WebAppMaker")
        .factory("UserService",UserService);
    function UserService(){
     var users=[
         {_id: "1", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
         {_id: "2", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
         {_id: "3", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
         {_id: "4", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
     ];
        var api = {
            findUserByCredentials:findUserByCredentials,
            findUserById:findUserById,
            updateUser:updateUser,
            createUser:createUser,
            "findUserByUsername":"findUserByUsername",
            "deleteUser":"deleteUser"
        };
        return api;

        function findUserByCredentials(username,password){
            for(var i in users){
                if(users[i].username === username && users[i].password === password){
                    return users[i];
                }
            }
            return null;
        }

        function findUserById(userId){
            for(var i in users){
                if(users[i]._id===userId){
                    return users[i];
                }
            }
            return null;
        }

        function updateUser(userId,user){
            for(var i in users){
                if(users[i]._id===userId){
                    users[i].firstName=user.firstName;
                    users[i].lastName=user.lastName;
                    return true;
                }
            }
            return false;
        }

        function createUser(user,password){
            var length=users.length-1;
            var uid=users[length]._id;
            uid=parseInt(uid);
            uid+=1;
            uid=uid.toString();
            var uname=user;
            var upwd=password;
            var userarry={_id: uid,username: uname, password: upwd};
            users.push(userarry);
            return users[length+1];
        }


        function findUserByUsername(username){}

        function deleteUser(userId){}
    }
})();