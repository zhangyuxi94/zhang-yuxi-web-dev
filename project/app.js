/**
 * Created by zhangyuxi on 2016/6/6.
 */
module.exports = function(app) {
    require("./services/user.service.server.js")(app);
};