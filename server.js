var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));
//
// require ("./test/app.js")(app);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var assignment=require ("./assignment/app.js");
assignment(app);

var project=require ("./project/app.js");
project(app);

// require("./experience/app.js")(app);
// require("./experience/todos.js")(app);


app.listen(port, ipaddress);

