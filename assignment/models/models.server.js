/**
 * Created by zhangyuxi on 2016/6/7.
 */

module.exports=function(){
    var connectionString = 'mongodb://127.0.0.1:27017/WebsiteMaker';

    if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
        connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
            process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
            process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
            process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
            process.env.OPENSHIFT_APP_NAME;
    }

    var mongoose = require("mongoose");
    mongoose.connect(connectionString);

    var models={
        userModel:require("./user/user.model.server")(),
        websiteModel:require("./website/website.model.server")(),
        pageModel:require("./page/page.model.server")(),
        widgetModel:require("./widget/widget.model.server")(),
        todoModel:require("./widget/todo.model.server")(),
        BUserModel:require("./bostonTripApp/Buser.model.server")(),
        BLikeAttractionModel:require("./bostonTripApp/BLikeAttraction.model.server.js")(),
        BLikeHotelModel:require("./bostonTripApp/BLikeHotel.model.server.js")(),
        BLikeEatModel:require("./bostonTripApp/BLikeEat.model.server.js")(),
        BLikeGuideModel:require("./bostonTripApp/BLikeGuide.model.server.js")(),
        BCommentModel:require("./bostonTripApp/BComment.model.server.js")(),
        BFollowModel:require("./bostonTripApp/BFollow.model.server.js")()
    };
    return models;
};