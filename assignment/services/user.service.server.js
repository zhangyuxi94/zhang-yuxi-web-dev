/**
 * Created by zhangyuxi on 2016/6/1.
 */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require('bcrypt-nodejs');


module.exports=function(app,models){
    var userModel=models.userModel;

    app.get("/auth/facebook",passport.authenticate('facebook'));
    app.get("/auth/facebook/callback", passport.authenticate('facebook', {
        successRedirect: '/assignment/#/user',
        failureRedirect: '/assignment/#/login'
    }));
    app.get("/api/user",getUsers);
    app.get("/api/user/:userId",findUserById);
    app.get("/api/loggedIn",loggedIn);
    app.post("/api/user",createUser);
    app.post("/api/login",passport.authenticate('assignment'),login);
    app.post("/api/logout",logout);
    app.post("/api/register",register);
    app.put("/api/user/:userId",updateUser);
    app.delete("/api/user/:userId",deleteUser);

    passport.use('assignment',new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    var facebookConfig = {
        clientID     : "301460686858797",
        clientSecret : "512650dc75de693ed05f8dbb48ff2bb1",
        callbackURL  : "http://127.0.0.1:8080/auth/facebook/callback"
    };
    passport.use('facebook',new FacebookStrategy(facebookConfig,facebookLogin));


    function localStrategy(username, password, done) {
        userModel
            .findUserByUsername(username)
            .then(
                function(user) {
                    if (!user) {
                        return done(null, "400");
                    }
                    if(user.username===username&&bcrypt.compareSync(password, user.password)) {
                        return done(null, user);
                    }
                    else {
                        return done(null, "404");
                    }
                }
            );
    }

    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        userModel
            .findUserById(user._id)
            .then(
                function(user){
                    done(null, user);
                },
                function(err){
                    done(err, null);
                }
            );
    }

    function login(req,res) {
        var user=req.user;
        if(user!=="404"){
            res.json(user);
        }
        else if(user==="404"){
                res.send("404")
        }
        else if(user==="400"){
            res.send("400")
        }
    }

    function facebookLogin(token, refreshToken, profile, done){
        userModel
            .findFacebookUser(profile.id)
            .then(
                function(facebookUser){

                    if(facebookUser){
                        return done(null,facebookUser);
                    }
                    else{
                        facebookUser={
                            username:profile.displayName.replace(/ /g,''),
                            facebook:{
                                token:token,
                                id:profile.id,
                                displayName:profile.displayName
                            }
                        };
                        userModel
                            .createUser(facebookUser)
                            .then(
                                function(user) {
                                    done(null, user);
                                }
                            );
                    }
                }
            );
    }

    function loggedIn(req,res){
        if(req.isAuthenticated()){
            res.json(req.user);
        }else{
            res.send("0");
        }
    }
    function logout(req,res){
        req.logout();
        res.send(200);
    }

    function register(req,res){
        var username=req.body.username;
        var password=req.body.password;
        userModel
            .findUserByUsername(username)
            .then(
                function(user){
                    if(user){
                        res.status(404).send("Username already in use");
                        return;
                    }
                    else{
                        req.body.password=bcrypt.hashSync(req.body.password);
                        return userModel
                            .createUser(req.body);
                    }
                },

                function(err){
                    res.status(400).send(err);
                }
            )
            .then(
                function(user){
                    if(user){
                        req.login(user,function(err){
                            if(err){
                                res.status(4e00).send(err);
                            }else{
                                res.json(user);
                            }
                        })
                    }
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function getUsers(req,res){
        var username=req.query['username'];
        var password=req.query['password'];
    if(username&&password){
            findUserByCredentials(username,password,req,res);
        }
    else if(username){
            findUserByUsername(username,res);
        }
        else{
            res.send(400);
        }
    }

    // function findUserByCredentials(username, password,req,res) {
    //     userModel
    //         .findUserByCredentials(username,password)
    //         .then(
    //             function (user){
    //                 req.session.currentUser=user;
    //                 res.json(user);
    //             },
    //             function(error){
    //                 res.statusCode(404).send(error);
    //             }
    //         );
    // }

    function findUserByUsername(username,res) {
        userModel
            .findUserByUsername(username)
            .then(function (user) {
                    res.json(user);
                },
                function (err) {
                    res.statusCode(404).send(err);
                });
    }

    function findUserById(req,res){
        var id=req.params.userId;
        userModel
            .findUserById(id)
            .then(function(user){
                res.send(user);
                // console.log(req.session.currentUser)
            },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }

    function createUser(req,res){
        var user = req.body;
        userModel
            .createUser(user)
            .then(
                function(user){
                    res.json(user);
                },
                function(error){
                    res.send(400);
                }
            );
    }

    function updateUser(req,res){
        var userId=req.params.userId;
        var user=req.body;
        userModel
            .updateUser(userId,user)
            .then(
                function(stats){
                    res.send(200);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }

    function deleteUser(req,res){
        var id=req.params.userId;
        userModel
            .deleteUser(id)
            .then(
                function(stats){
                    res.send(200);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }
};