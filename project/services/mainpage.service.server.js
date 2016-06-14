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
    var attraction1=[
        { _id: "1",
            image:"./image/1harvard.jpg",
            name: "Harvard University",
            rank:"1",
            address:"Harvard Yard Cambridge, MA",
            official:"http://www.harvard.edu/visitors/tours"
        },
        { _id: "2",
            image:"./image/2freedom.png",
            name: "Freedom Trial",
            rank:"2",
            address:"Charles Street, Boston, MA",
            official:"http://www.thefreedomtrail.org/"
        },
        { _id: "3",
            image:"./image/3mit.jpg",
            name: "MIT",
            rank:"3",
            address:"Massachusetts Avenue Cambridge, MA",
            official:"http://web.mit.edu/"
        },
        { _id: "4",
            image:"./image/4Quincy.jpg",
            name: "Quincy Market",
            rank:"4",
            address:"4 South Market Street, Boston, MA",
            official:"http://www.quincy-market.com"
        }
    ];
    var attraction2=[
        { _id: "5",
            image:"./image/5charlesriver.jpg",
            name: "Charles River",
            rank:"5",
            address:"Beacon St & Arlington St, Boston, MA"
        },
        { _id: "6",
            image:"./image/6trinity.jpg",
            name: "Trinity Church",
            rank:"6",
            address:"206 Clarendon Street, Boston, MA",
            official:"http://trinitychurchboston.org/",
            phone:"617-536-0944"
        },
        { _id: "7",
            image:"./image/7library.jpg",
            name: "Boston Public Library",
            rank:"7",
            address:"700 Boylston St, Boston, MA",
            official:"http://bpl.org/central/",
            phone:"617-536-5400"
        },
        { _id: "8",
            image:"./image/8MFA.jpg",
            name: "Museum of Fine Arts",
            rank:"8",
            address:"465 Huntington Avenue, Boston, MA",
            official:"http://www.mfa.org/",
            phone:"617-267-9300"
        }
    ];
    var attraction3=[
        { _id: "9",
            image:"./image/9bostonCommon.jpg",
            name: "Boston Common",
            rank:"9",
            address:"131 Tremont St, Boston, MA",
            official:"http://www.cityofboston.gov/freedomtrail/bostoncommon.asp"
        },
        { _id: "10",
            image:"./image/10copley.jpeg",
            name: "Copley Square",
            rank:"10",
            address:"Copley Square, Huntington Avenue, Boston, MA"
        },
        { _id: "11",
            image:"./image/11prudential.jpg",
            name: "Prudential Tower",
            rank:"11",
            address:"800 Boylston St#50, Boston, MA",
            official:"http://www.prudentialcenter.com/"
        },
        { _id: "12",
            image:"./image/4fenway.jpg",
            name: "Fenway Park",
            rank:"12",
            address:"4 Yawkey Way, Boston, MA",
            official:"http://boston.redsox.mlb.com/index.jsp?c_id=bos",
            phone:"617-226-6666"
        }
    ];

    app.get("/BostonTrip/api/popular",findPopularHotels);
    app.get("/BostonTrip/api/highstar",findHighstarHotels);
    app.get("/BostonTrip/api/attraction1",findAttraction1);
    app.get("/BostonTrip/api/attraction2",findAttraction2);
    app.get("/BostonTrip/api/attraction3",findAttraction3);

    function findPopularHotels(req,res){
        res.send(popularHotels);
    }

    function findHighstarHotels(req,res){
        res.send(highstarHotels);
    }

    function findAttraction1(req,res){
        res.send(attraction1);
    }
    function findAttraction2(req,res){
        res.send(attraction2);
    }
    function findAttraction3(req,res){
        res.send(attraction3);
    }
};