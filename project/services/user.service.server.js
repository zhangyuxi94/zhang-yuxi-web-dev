/**
 * Created by zhangyuxi on 2016/6/6.
 */

module.exports=function(app,models){
    var BUserModel=models.BUserModel;

    app.get("/BostonTrip/api/user",getUsers);
    app.post("/BostonTrip/api/user",createUser);
    app.get("/BostonTrip/api/user/:userId",findUserById);

    // app.put("/api/user/:userId",updateUser);
    // app.delete("/api/user/:userId",deleteUser);

    function getUsers(req,res){
        var email=req.query['email'];
        var password=req.query['password'];
        if(email&&password){
            findUserByCredentials(email,password,res);
        }
        else if(email){
            findUserByEmail(email,res);
        }
        else{
            res.send(400);
        }
    }
    function findUserByCredentials(email,password,res) {
        BUserModel
            .findUserByCredentials(email,password)
            .then(
                function (user){
                    res.json(user);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }
    function findUserByEmail(email,res) {
        BUserModel
            .findUserByEmail(email)
            .then(function (user) {
                    res.json(user);
                },
                function (err) {
                    res.statusCode(404).send(err);
                });
    }

    function findUserById(req,res){
        var userId=req.params.userId;
        BUserModel
            .findUserById(userId)
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
        BUserModel.createUser(user)
            .then(
                function(user){
                    res.json(user);
                },
                function(error){
                    res.send(400);
                }
            );
        
      //   if(user.email&&user.username&&user.password){
      //       if(user.password===user.verifyPassword){
      //           user._id=(new Date()).getTime()+"";
      //           users.push(user);
      //           res.send(user);
      //       }
      //       else{
      //           res.send(400);
      //       }
      //   }
      // else{
      //       res.send(400);
      //   }
    }

    // function updateUser(req,res){
    //     var userId=req.params.userId;
    //     var user=req.body;
    //     for(var i in users){
    //         if(users[i]._id===userId){
    //             users[i].email=user.email;
    //             users[i].firstName=user.firstName;
    //             users[i].lastName=user.lastName;
    //             res.send(200);
    //             return;
    //         }
    //     }
    //     res.send(400);
    // }
    //
    // function deleteUser(req,res){
    //     var id=req.params.userId;
    //     for(var i in users){
    //         if(users[i]._id===id){
    //             users.splice(i,1);
    //             res.send(200);
    //             return;
    //         }
    //     }
    //     res.send(400);
    // }
};