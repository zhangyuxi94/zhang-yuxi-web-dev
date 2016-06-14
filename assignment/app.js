/**
 * Created by zhangyuxi on 2016/6/1.
 */
module.exports = function(app) {
    var models=require("./models/models.server.js")();

    require("./services/user.service.server.js")(app,models);
    require("./services/website.service.server.js")(app,models);
    require("./services/page.service.server.js")(app,models);
    require("./services/widget.service.server.js")(app,models);
    require("../project/services/user.service.server")(app,models);
    require("../project/services/mainpage.service.server.js")(app,models);

};