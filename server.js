/**
 * Created by zhangyuxi on 2016/5/13.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.listen(port,ipaddress);