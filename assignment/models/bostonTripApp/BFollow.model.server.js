/**
 * Created by zhangyuxi on 2016/6/13.
 */
module.exports=function(){
    var mongoose=require("mongoose");
    var BFollowSchema=require("./BFollow.schema.server.js")();
    var BFollow=mongoose.model("BFollow",BFollowSchema);

    var api={
        // findLikeAttractionsById:findLikeAttractionsById,
        findFollowsById:findFollowsById,
        followUser:followUser
        // findLikeAttractions:findLikeAttractions,
        // dislikeAttractions:dislikeAttractions
    };
    return api;

    function findFollowsById(followId,followerId){
        return BFollow.findOne({"follow": followId,"follower":followerId});
    }
    function followUser(follow){
        return BFollow.create(follow);
    }

    // function findLikeAttractions(userId){
    //     return BLikeAttraction.find({"userId":userId})
    // }
    //
    // function dislikeAttractions(favoriteId,userId){
    //     return BLikeAttraction.remove({"favoriteId": favoriteId,"userId":userId});
    // }


};