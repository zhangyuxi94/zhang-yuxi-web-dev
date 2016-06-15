/**
 * Created by zhangyuxi on 2016/6/1.
 */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports=function(app,models){
    var userModel=models.userModel;

    app.get("/api/user",getUsers);
    app.get("/api/user/:userId",findUserById);
    app.post("/api/user",createUser);
    app.post("/api/login",passport.authenticate('local'),login);
    app.put("/api/user/:userId",updateUser);
    app.delete("/api/user/:userId",deleteUser);

    passport.use(new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    function localStrategy(username, password, done) {
        userModel
            .findUserByCredentials(username, password)
            .then(
                function(user) {
                    if(user) {
                        done(null, user);
                    } else {
                        done(null, false);
                    }
                },
                function(err) {
                    done(err);
                }

                //     if(user.username === username && user.password === password) {
                //         return done(null, user);
                //     } else {
                //         return done(null, false);
                //     }
                // },
                // function(err) {
                //     if (err) { return done(err); }
                // }
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
        res.json(user);
        // var username=req.body.username;
        // var password=req.body.password;
        // userModel
        //     .findUserByCredentials(username,password)
        //     .then(
        //         function (user){
        //             req.session.currentUser=user;
        //             res.json(user);
        //         },
        //         function(error){
        //             res.statusCode(404).send(error);
        //         }
        //     );
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