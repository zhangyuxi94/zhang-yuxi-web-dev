/**
 * Created by zhangyuxi on 2016/6/13.
 */
module.exports=function(){
    var mongoose=require("mongoose");
    var BCommentSchema=require("./BComment.schema.server.js")();
    var BComment=mongoose.model("BComment",BCommentSchema);

    var api={
        createComment:createComment,
        findGuideComments:findGuideComments
        // findFacebookUser:findFacebookUser,
        // findUserByCredentials:findUserByCredentials,
        // createUser:createUser,
        // findUserById:findUserById,
        // findUserByEmail:findUserByEmail
    };
    return api;

    // function findFacebookUser(id){
    //     return BUser.findOne({"facebook.id":id})
    // }
    //
    // function findUserByCredentials(email, password) {
    //     return BUser.findOne({email: email, password: password});
    // }
    //
    // function findUserByEmail(email){
    //     return BUser.findOne({email: email});
    // }
    //
    // function findUserById(userId) {
    //     return BUser.findById(userId);
    // }
    //
    // function createUser(user){
    //     return BUser.create(user);
    // }

    function createComment(comment){
        return BComment.create(comment);
    }
    function findGuideComments(guideId) {
        return BComment.find({"guideId":guideId});
    }
};