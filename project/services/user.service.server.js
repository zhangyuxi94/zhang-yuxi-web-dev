/**
 * Created by zhangyuxi on 2016/6/6.
 */

module.exports=function(app){
    var users=[
        {_id: "1", username: "zhang.yuxi1@husky.neu.edu",    password: "zhangyuxi"},
        {_id: "2", username: "676883173@qq.com",    password: "676883173"}
    ];
    app.get("/BostonTrip/api/user",getUsers);
    // app.get("/api/user/:userId",findUserById);
    // app.post("/api/user",createUser);
    // app.put("/api/user/:userId",updateUser);
    // app.delete("/api/user/:userId",deleteUser);
    function getUsers(req,res){
        var username=req.query['username'];
        var password=req.query['password'];
        for(var i in users){
            if(users[i].username===username&&users[i].password===password){
                res.send(users[i]);
                return;
            }
        }
        res.send(400);
        // if(username&&password){
        //     findUserByCredentials(username,password,res);
        // }
        // else if(username){
        //     findUserByUsername(username,res);
        // }
        // else{
        //     res.send(users);
        // }
    }

    function findUserByCredentials(username, password,res) {
        for(var i in users){
            if(users[i].username===username&&users[i].password===password){
                res.send(users[i]);
                return;
            }
        }
        res.send({});
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

    // function findUserById(req,res){
    //     var id=req.params.userId;
    //     for(var i in users){
    //         if(users[i]._id===id){
    //             res.send(users[i]);
    //             return;
    //         }
    //     }
    //     res.send({});
    // }

    // function createUser(req,res){
    //     var user = req.body;
    //     if(user.password===user.verifyPassword){
    //         user._id=(new Date()).getTime()+"";
    //         users.push(user);
    //         res.send(user);
    //     }
    //     else{
    //         res.send(400);
    //     }
    // }
    //
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