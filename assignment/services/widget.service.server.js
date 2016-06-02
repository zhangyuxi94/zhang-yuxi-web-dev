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

    app.post("/api/page/:pageId/widget",createWidget);
    app.get("/api/page/:pageId/widget",findAllWidgetsForPage);
    app.get("/api/page/:pageId/widget/new",widgetChooser);
    app.get("/api/widget/:widgetId",findWidgetById);
    app.put("/api/widget/:widgetId",updateWidget);
    app.delete("/api/widget/:widgetId",deleteWidget);

    function widgetChooser(req,res){
        res.send(widgetFilter);
    }

    function createWidget(req,res){
        // var websiteId=req.params.websiteId;
        // var newPage=req.body;
        // newPage._id=(new Date()).getTime()+"";
        // newPage.websiteId=websiteId;
        // pages.push(newPage);
        // res.send(newPage);
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
    function updateWidget(req,res){}
    function deleteWidget(req,res){}
};