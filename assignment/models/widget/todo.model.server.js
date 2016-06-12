/**
 * Created by zhangyuxi on 2016/6/9.
 */
module.exports=function(app){
    var mongoose=require("mongoose");
    var TodoSchema=require("./todo.schema.server")();
    var Todo=mongoose.model("Todo",TodoSchema);

    var api={
        findAllTodos:findAllTodos,
        reorderTodos:reorderTodos
    };
    return api;

    function findAllTodos() {
        return Todo.find();
    }

    function reorderTodos(start,end){
        return Todo.find(function(err,todos){
            todos.forEach(function(todo){
                if(start>end){
                    if( todo.priority>=end&& todo.priority<start){
                        todo.priority++;
                        todo.save(function(){});

                    }else if(todo.priority===start){
                        todo.priority=end;
                        todo.save(function(){});

                    }
                }else{
                    if(todo.priority>start&&todo.priority<=end){
                        todo.priority--;
                        todo.save(function(){});

                    }else if(todo.priority===start){
                        todo.priority=end;
                        todo.save(function(){});
                    }
                }
            });
        });
    }
   //
   // Todo.create({"priority":1,"title":"aaa","todo":"AAA"});
   // Todo.create({"priority":2,"title":"bbb","todo":"DDD"});
   // Todo.create({"priority":3,"title":"ccc","todo":"CCC"});
};