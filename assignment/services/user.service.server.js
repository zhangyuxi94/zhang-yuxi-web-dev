/**
 * Created by zhangyuxi on 2016/6/1.
 */

module.exports=function(app,models){
    var userModel=models.userModel;

    var users=[
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];
    app.get("/api/user",getUsers);
    app.get("/api/user/:userId",findUserById);
    app.post("/api/user",createUser);
    app.put("/api/user/:userId",updateUser);
    app.delete("/api/user/:userId",deleteUser);
    function getUsers(req,res){
        var username=req.query['username'];
        var password=req.query['password'];
    if(username&&password){
            findUserByCredentials(username,password,res);
        }
    else if(username){
            findUserByUsername(username,res);
        }
        else{
            res.send(users);
        }
    }

    function findUserByCredentials(username, password,res) {
        userModel
            .findUserByCredentials(username,password)
            .then(
                function (user){
                    res.json(user);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }

    function findUserByUsername(username,res) {
        for(var i in users){
            if(users[i].username===username){
                res.send(users[i]);
                return;
            }
        }
        res.send({});
    }

    function findUserById(req,res){
        var id=req.params.userId;
        userModel
            .findUserById(id)
            .then(function(user){
                res.send(user);
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
                    console.log(user);
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
                    console.log(stats);
                    res.send(200);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
        // for(var i in users){
        //     if(users[i]._id===userId){
        //         users[i].email=user.email;
        //         users[i].firstName=user.firstName;
        //         users[i].lastName=user.lastName;
        //         res.send(200);
        //         return;
        //     }
        // }
        // res.send(400);
    }

    function deleteUser(req,res){
        var id=req.params.userId;
        userModel
            .deleteUser(id)
            .then(
                function(stats){
                    console.log(stats);
                    res.send(200);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }
};