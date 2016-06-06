/**
 * Created by zhangyuxi on 2016/6/2.
 */
module.exports=function(app){
    var widgets=[
        { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
        { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
            "url": "http://lorempixel.com/400/200/"},
        { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p><a href='https://www.youtube.com/watch?time_continue=550&v=KPe-WY2eghY'>A rally in Fresno, California</a> today, newfound irrigation expert Donald Trump finally revealed the solution to the drought that’s been crippling California for the past five years: Turn the water back on, idiots.</p>"},
        { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "California's Drought: Start Opening Up the Water"},
        { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E" },
        { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Fortunately for California, when Donald Trump becomes president, he plans to “start opening up the water so that you can have your farmers survive so that your job market will get better”—a position that is genuinely hard to argue with, though not for the usual reasons.</p>"},
    ];
    var widgetFilter=[
        {"widgetType": "HEADER","typeId": "1"},
        {"widgetType": "IMAGE","typeId": "2"},
        {"widgetType": "HTML","typeId": "3"},
        {"widgetType": "YOUTUBE","typeId": "4"}
    ];
    var multer = require('multer'); 
    var upload = multer({ dest: __dirname+'/../../public/uploads' });

    app.post("/api/page/:pageId/widget/new/:widgetTypeId",createWidget);
    app.post ("/api/uploads", upload.single('myFile'), uploadImage);
    app.get("/api/page/:pageId/widget",findAllWidgetsForPage);
    app.get("/api/page/:pageId/widget/new",widgetChooser);
    app.get("/api/widget/:widgetId",findWidgetById);
    app.get("/api/page/:pageId/widget/new/:widgetTypeId",findWidgetByType);
    app.put("/api/widget/:widgetId",updateWidget);
    app.delete("/api/widget/:widgetId",deleteWidget);


    function widgetChooser(req,res){
        res.send(widgetFilter);
    }

    function findWidgetByType(req,res){
        var widgetTypeId=req.params.widgetTypeId;
        for(var i in widgetFilter){
            if(widgetFilter[i].typeId===widgetTypeId){
                res.send(widgetFilter[i]);
                return;
            }
        }
        res.send({});
    }

    function createWidget(req,res){
        var pageId=req.params.pageId;
        var widgetTypeId=req.params.widgetTypeId;
        var i=parseInt(widgetTypeId);
        var newWidget=req.body;
        var widgetType=widgetFilter[i-1].widgetType;
        newWidget._id=(new Date()).getTime()+"";
        newWidget.pageId=pageId;
        newWidget.widgetType=widgetType;
        widgets.push(newWidget);
        res.send(widgets);
    }

    function findAllWidgetsForPage(req,res){
        var pageId=req.params.pageId;
        var result=[];
        for(var i in widgets){
            if(widgets[i].pageId===pageId){
                result.push(widgets[i])
            }
        }
        res.json(result);
    }
    function findWidgetById(req,res){
        var widgetId=req.params.widgetId;
        for(var i in widgets){
            if(widgets[i]._id===widgetId){
                res.send(widgets[i]);
                return;
            }
        }
        res.send({});
    }
    function updateWidget(req,res){
        var widgetId=req.params.widgetId;
        var widget=req.body;
        for(var i in widgets){
            if(widgets[i]._id===widgetId){
                widgets[i].text=widget.text;
                widgets[i].size=widget.size;
                widgets[i].width=widget.width;
                widgets[i].url=widget.url;
                res.send(200);
                return;
            }
        }
        res.send(400);
    }
    function deleteWidget(req,res){
        var widgetId=req.params.widgetId;
        for(var i in widgets){
            if(widgets[i]._id===widgetId){
                widgets.splice(i,1);
                res.send(widgets);
                return;
            }
        }
        res.send(400);
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

};

