/**
 * Created by zhangyuxi on 2016/6/2.
 */
module.exports=function(app,models){
    var widgetModel=models.widgetModel;
    var todoModel=models.todoModel;

    var widgets=[
        {"_id": "2", "widgetType": "IMAGE"}
        // { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
        // { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        // { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
        //     "url": "http://lorempixel.com/400/200/"},
        // { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p><a href='https://www.youtube.com/watch?time_continue=550&v=KPe-WY2eghY'>A rally in Fresno, California</a> today, newfound irrigation expert Donald Trump finally revealed the solution to the drought that’s been crippling California for the past five years: Turn the water back on, idiots.</p>"},
        // { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "California's Drought: Start Opening Up the Water"},
        // { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
        //     "url": "https://youtu.be/AM2Ivdi9c4E" },
        // { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Fortunately for California, when Donald Trump becomes president, he plans to “start opening up the water so that you can have your farmers survive so that your job market will get better”—a position that is genuinely hard to argue with, though not for the usual reasons.</p>"}
    ];
    var widgetFilter=[
        {"widgetType": "HEADER","typeId": "1"},
        {"widgetType": "IMAGE","typeId": "2"},
        {"widgetType": "HTML","typeId": "3"},
        {"widgetType": "YOUTUBE","typeId": "4"}
    ];
    var multer = require('multer'); 
    var upload = multer({ dest: __dirname+'/../../public/uploads' });

    app.post("/api/user/:userId/web/:websiteId/page/:pageId/widget/new/:widgetTypeId",createWidget);
    app.post ("/api/uploads", upload.single('myFile'), uploadImage);
    app.post ("/api/newUploads", upload.single('myFile'), uploadNewImage);
    app.get("/api/user/:userId/web/:websiteId/page/:pageId/widget",findAllWidgetsForPage);
    app.get("/api/page/:pageId/widget/new",widgetChooser);
    app.get("/api/widget/:widgetId",findWidgetById);
    app.get("/api/page/:pageId/widget/new/:widgetTypeId",findWidgetByType);
    app.get("/api/todos",findAllTodos);
    app.put("/api/widget/:widgetId",updateWidget);
    app.put("/api/todos",reorderTodos);
    app.put("/page/:pageId/widget",reorderWidgets);
    app.delete("/api/widget/:widgetId",deleteWidget);

    function findAllTodos(req,res){
        todoModel
            .findAllTodos()
            .then(function(todos){
                res.json(todos);
            })
    }

    function reorderTodos(req,res){
        var start=parseInt(req.query.start);
        var end=parseInt(req.query.end);
        console.log([start,end]);
        todoModel
            .reorderTodos(start,end);
        res.send(200);
    }

    function reorderWidgets(req,res){
        var start=parseInt(req.query.start);
        var end=parseInt(req.query.end);
        var pageId=req.params.pageId;
        widgetModel
            .reorderWidgets(start,end,pageId);
        // res.send(200);
    }

    function widgetChooser(req,res){
        res.send(widgetFilter);
    }

    function findWidgetByType(req,res){
        var widgetTypeId=req.params.widgetTypeId;
        for(var i in widgetFilter){
            if(widgetFilter[i].typeId===widgetTypeId){
                widgetFilter[i].url=widgets[0].url;
                res.send(widgetFilter[i]);
                return;
            }
        }
        res.send({});
    }
    var priority=0;
    function createWidget(req,res){
        var pageId=req.params.pageId;
        var websiteId=req.params.websiteId;
        var userId=req.params.userId;
        var widgetTypeId=req.params.widgetTypeId;
        var i=parseInt(widgetTypeId);
        var newWidget=req.body;
        var widgetType=widgetFilter[i-1].widgetType;
        widgetModel
            .createWidget(pageId,websiteId,userId,newWidget,widgetType,priority)
            .then(
                function(widget){
                    res.json(widget);
                    priority=widget.length;
                }
            );

    }

    function findAllWidgetsForPage(req,res){
        var pageId=req.params.pageId;
        var websiteId=req.params.websiteId;
        var userId=req.params.userId;
        widgetModel
            .findAllWidgetsForPage(pageId,websiteId,userId)
            .then(
                function(widgets){
                    res.json(widgets);
                }
            );
    }
    function findWidgetById(req,res){
        var widgetId=req.params.widgetId;
        widgetModel
            .findWidgetById(widgetId)
            .then(
                function(widget){
                    res.json(widget);
                }
            );
    }
    function updateWidget(req,res){
        var widgetId=req.params.widgetId;
        var widget=req.body;
        widgetModel
            .updateWidget(widgetId,widget)
            .then(
                function(stats){
                    res.send(stats);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }
    function deleteWidget(req,res){
        var widgetId=req.params.widgetId;
        widgetModel
            .deleteWidget(widgetId)
            .then(
                function(stats){
                    res.send(stats);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }

    function uploadImage(req, res) {

        var widgetId      = req.body.widgetId;
        var pageId      = req.body.pageId;
        var websiteId      = req.body.websiteId;
        var userId      = req.body.userId;
        var width         = req.body.width;
        var myFile        = req.file;

        var originalname  = myFile.originalname;
        var filename      = myFile.filename;
        var path          = myFile.path;
        var destination   = myFile.destination;
        var size          = myFile.size;
        var mimetype      = myFile.mimetype;

        for(var i in widgets){
            if(widgets[i]._id===widgetId){
                widgets[i].url="/uploads/"+filename;
            }
        }
            res.redirect("/assignment/index.html#/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
    }


    function uploadNewImage(req, res) {

        var widgetId      = req.body.widgetId;
        var pageId      = req.body.pageId;
        var websiteId      = req.body.websiteId;
        var widgetTypeId=req.body.widgetTypeId;
        var userId      = req.body.userId;
        var width         = req.body.width;
        var myFile        = req.file;

        var originalname  = myFile.originalname;
        var filename      = myFile.filename;
        var path          = myFile.path;
        var destination   = myFile.destination;
        var size          = myFile.size;
        var mimetype      = myFile.mimetype;

                widgets[0].url="/uploads/"+filename;
        res.redirect("/assignment/index.html#/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget/new/"+widgetTypeId);
    }

};

