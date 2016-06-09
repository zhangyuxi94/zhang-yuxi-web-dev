/**
 * Created by zhangyuxi on 2016/6/7.
 */


module.exports=function(){

    var mongoose=require("mongoose");
    var UserSchema=require("./user.schema.server")();
    var User=mongoose.model("User",UserSchema);

  var api={
      createUser:createUser,
      findUserById:findUserById,
      findUserByCredentials:findUserByCredentials,
      deleteUser:deleteUser,
      updateUser:updateUser
  };
return api;



    function findUserByCredentials(username,password){
        return User.findOne({username:username,password:password});
    }

    function findUserById(userId) {
        return User.findById(userId);
    }

    function createUser(user){
        return User.create(user);
    }

    function deleteUser(userId){
        return User.remove({_id:userId});
    }

    function updateUser(userId,user){
        delete user._id;
        return User
            .update({_id:userId},{
                $set:{
                    email:user.email,
                    firstName:user.firstName,
                    lastName:user.lastName
                }
            });
    }

};