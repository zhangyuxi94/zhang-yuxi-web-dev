/**
 * Created by zhangyuxi on 2016/6/7.
 */

module.exports=function(){
    var connectionString = 'mongodb://127.0.0.1:27017/assignment';

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
        websiteModel:require("./website/website.model.server")()
    };
    return models;
};