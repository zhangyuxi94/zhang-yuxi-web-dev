/**
 * Created by zhangyuxi on 2016/6/13.
 */
module.exports=function(app){
    var popularHotels=[
        { "_id": "1",
            "type": "1" ,
            "image":"./image/hotel1.jpg",
            "name": "The Godfrey Hotel Boston",
            "price": "509",
            "stars":"4",
            "address":"505 Washington Street, Theater District"
        },
        { "_id": "2",
            "type": "1" ,
            "image":"./image/hotel2.jpg",
            "name": "DoubleTree Suites by Hilton",
            "price": "369",
            "stars":"3",
            "address":"400 Soldier Field Road, Allston"
        },
        { "_id": "3",
            "type": "1" ,
            "image":"./image/hotel3.jpg",
            "name": "Residence Inn Back Bay",
            "price": "441",
            "stars":"3",
            "address":"125 Brookline Avenue, Fenway Kenmore"
        },
        { "_id": "4",
            "type": "1" ,
            "image":"./image/hotel4.jpg",
            "name": "Harborside Inn",
            "price": "309",
            "stars":"3",
            "address":"185 State Street, Financial District"
        }

    ];
    var highstarHotels=[
        { "_id": "5",
            "type": "2" ,
            "image":"./image/hotel2-1.jpg",
            "name": "The Eliot Suite Hotel",
            "price": "485",
            "stars":"5",
            "address":"370 Commonwealth Avenue, Back Bay"
        },
        { "_id": "6",
            "type": "2" ,
            "image":"./image/hotel2-2.jpg",
            "name": "Battery Wharf Hotel, Boston Waterfront",
            "price": "429",
            "stars":"5",
            "address":"3 Battery Wharf, Waterfront"
        },
        { "_id": "7",
            "type": "2" ,
            "image":"./image/hotel2-3.jpg",
            "name": "Four Seasons Boston",
            "price": "795",
            "stars":"5",
            "address":"200 Boylston Street"
        },
        { "_id": "8",
            "type": "2" ,
            "image":"./image/hotel2-4.jpg",
            "name": "Fairmont Copley Plaza",
            "price": "512",
            "stars":"5",
            "address":"138 Saint James Avenue, Back Bay"
        }

    ];

    app.get("/BostonTrip/api/popular",findPopularHotels);
    app.get("/BostonTrip/api/highstar",findHighstarHotels);

    function findPopularHotels(req,res){
        res.send(popularHotels);
    }

    function findHighstarHotels(req,res){
        res.send(highstarHotels);
    }
};