/**
 * Created by zhangyuxi on 2016/6/13.
 */
module.exports=function(){
    var mongoose=require("mongoose");
    var BUserSchema=require("./Buser.schema.server.js")();
    var BUser=mongoose.model("BUser",BUserSchema);

    var api={
        findUserByCredentials:findUserByCredentials,
        createUser:createUser
    };
    return api;

    // function findUserByCredentials(username, password) {
    //     return User.findOne({username: username, password: password});
    // }
    function findUserByCredentials(){

    }

    function createUser(user){
        return BUser.create(user);
    }
};