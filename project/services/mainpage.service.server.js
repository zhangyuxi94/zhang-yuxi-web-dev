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
    var attraction=[
        { _id: "1",
            type:"1",
            image:"./image/1harvard.jpg",
            name: "Harvard University",
            rank:"1",
            address:"Harvard Yard Cambridge, MA",
            official:"http://www.harvard.edu/visitors/tours"
        },
        { _id: "2",
            type:"1",
            image:"./image/2freedom.png",
            name: "Freedom Trial",
            rank:"2",
            address:"Charles Street, Boston, MA",
            official:"http://www.thefreedomtrail.org/"
        },
        { _id: "3",
            type:"1",
            image:"./image/3mit.jpg",
            name: "MIT",
            rank:"3",
            address:"Massachusetts Avenue Cambridge, MA",
            official:"http://web.mit.edu/"
        },
        { _id: "4",
            type:"1",
            image:"./image/4Quincy.jpg",
            name: "Quincy Market",
            rank:"4",
            address:"4 South Market Street, Boston, MA",
            official:"http://www.quincy-market.com"
        },
        { _id: "5",
            type:"2",
            image:"./image/5charlesriver.jpg",
            name: "Charles River",
            rank:"5",
            address:"Beacon St & Arlington St, Boston, MA"
        },
        { _id: "6",
            type:"2",
            image:"./image/6trinity.jpg",
            name: "Trinity Church",
            rank:"6",
            address:"206 Clarendon Street, Boston, MA",
            official:"http://trinitychurchboston.org/",
            phone:"617-536-0944"
        },
        { _id: "7",
            type:"2",
            image:"./image/7library.jpg",
            name: "Boston Public Library",
            rank:"7",
            address:"700 Boylston St, Boston, MA",
            official:"http://bpl.org/central/",
            phone:"617-536-5400"
        },
        { _id: "8",
            type:"2",
            image:"./image/8MFA.jpg",
            name: "Museum of Fine Arts",
            rank:"8",
            address:"465 Huntington Avenue, Boston, MA",
            official:"http://www.mfa.org/",
            phone:"617-267-9300"
        },
        { _id: "9",
            type:"3",
            image:"./image/9bostonCommon.jpg",
            name: "Boston Common",
            rank:"9",
            address:"131 Tremont St, Boston, MA",
            official:"http://www.cityofboston.gov/freedomtrail/bostoncommon.asp"
        },
        { _id: "10",
            type:"3",
            image:"./image/10copley.jpeg",
            name: "Copley Square",
            rank:"10",
            address:"Copley Square, Huntington Avenue, Boston, MA"
        },
        { _id: "11",
            type:"3",
            image:"./image/11prudential.jpg",
            name: "Prudential Tower",
            rank:"11",
            address:"800 Boylston St#50, Boston, MA",
            official:"http://www.prudentialcenter.com/"
        },
        { _id: "12",
            type:"3",
            image:"./image/4fenway.jpg",
            name: "Fenway Park",
            rank:"12",
            address:"4 Yawkey Way, Boston, MA",
            official:"http://boston.redsox.mlb.com/index.jsp?c_id=bos",
            phone:"617-226-6666"
        }
    ];
    var guide=[
        { _id: "1",
            userName:"Marina K",
            userPhoto:"./image/marina-k.jpg",
            image:"./image/guide1.jpg",
            name: "3 Days in Boston",
            description:"From loads of history to delicious eating, Boston is packed with 'must-sees'. Here are the highlights that will give you a good taste of Boston in just three days."
        },
        { _id: "2",
            userName:"Vincent M",
            userPhoto:"./image/vincent-m.jpg",
            image:"./image/guideoutdoor.jpg",
            name: "Guide to Boston Outdoors",
            description:"Hiking, biking, kayaking, walking... Boston is a great city for exploring the great outdoors. Here are some of my favorite 'fresh-air spots' in the city and the surrounding areas."
        },
        { _id: "3",
            userName:"Kevin R",
            userPhoto:"./image/kevin-r.jpg",
            image:"./image/guide3.jpg",
            name: "Afternoon Tour of Boston",
            description:"Hopefully this guide will help find some cool things to do while in the city for the day and help you see what Boston is all about."
        }
    ];
    var eat=[
        { "_id": "1",
            "type": "1" ,
            "image":"./image/eat2.jpg",
            "name": "Giacomo's Ristorante",
            "style": "Italian",
            "price": "$$",
            "stars":"5",
            "address":"355 Hanover St."
        },
        { "_id": "2",
            "type": "1" ,
            "image":"./image/eat3.jpg",
            "name": "Neptune Oyster",
            "style": "Seafood",
            "price": "$$",
            "stars":"5",
            "address":"63 Salem St."
        },
        { "_id": "3",
            "type": "1" ,
            "image":"./image/eat4.jpg",
            "name": "O Ya",
            "style": "Japanese",
            "price": "$$$$",
            "stars":"5",
            "address":"9 East St. Pl"
        },
        { "_id": "4",
            "type": "1" ,
            "image":"./image/eat5.jpg",
            "name": "James Hook & Co",
            "style": "Seafood",
            "price": "$$",
            "stars":"4",
            "address":"440 Atlantic Ave"
        },
        { "_id": "1",
            "type": "2" ,
            "image":"./image/dessert1.jpg",
            "name": "Mike's Pastry",
            "style": "Ice Cream",
            "price": "$",
            "stars":"4",
            "address":"300 Hanover St."
        },
        { "_id": "2",
            "type": "2" ,
            "image":"./image/dessert2.jpg",
            "name": "Picco",
            "style": "Ice Cream",
            "price": "$$",
            "stars":"4",
            "address":"513 Tremont St."
        },
        { "_id": "3",
            "type": "2" ,
            "image":"./image/dessert3.jpg",
            "name": "Cafe Madeleine",
            "style": "Bakery",
            "price": "$",
            "stars":"5",
            "address":"517 Columbus Ave"
        },
        { "_id": "4",
            "type": "2" ,
            "image":"./image/dessert4.jpg",
            "name": "Modern Pastry Shop",
            "style": "Bakery",
            "price": "$",
            "stars":"4",
            "address":"257 Hanover St."
        },
        { "_id": "1",
            "type": "3" ,
            "image":"./image/fast1.jpg",
            "name": "Uburger",
            "style": "Burgers",
            "price": "$",
            "stars":"4",
            "address":"Kenmore Sq 636 Beacon St."
        },
        { "_id": "2",
            "type": "3" ,
            "image":"./image/fast2.jpg",
            "name": "Shake Shack",
            "style": "Hot Dogs",
            "price": "$$",
            "stars":"3",
            "address":"234 Newbury St."
        },
        { "_id": "3",
            "type": "3" ,
            "image":"./image/fast3.jpg",
            "name": "Chicken Lou's",
            "style": "Sandwiches",
            "price": "$",
            "stars":"4",
            "address":"50 Forsyth St."
        },
        { "_id": "4",
            "type": "3" ,
            "image":"./image/fast4.jpg",
            "name": "Beta Burger",
            "style": "Burgers",
            "price": "$",
            "stars":"5",
            "address":"1437 Tremont St."
        }
    ];
    var hotels=[
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
            "price": "167",
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
        },
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
        },
        { "_id": "9",
            "type": "3" ,
            "image":"./image/hotel3-1.jpg",
            "name": "Boston Hotel Buckminster",
            "price": "200",
            "stars":"3",
            "address":"645 Beacon Street, Fenway Kenmore",
            "url":"http://www.booking.com/hotel/us/buckminster.zh-cn.html?aid=304142;label=gen173nr-1DEgJnbzIFaG90ZWxCAlhYSDNiBW5vcmVmcgV1c19uaogBAZgBMrgBDMgBDNgBA-gBAfgBAqgCAw;sid=d9fbdca2636a358333eed8fb70967417;dcid=4;checkin=2016-06-24;checkout=2016-06-25;dest_id=20061717;dest_type=city;dist=0;group_adults=2;highlighted_blocks=7679301_88767979_0_0_0;nflt=class%3D3;room1=A%2CA;sb_price_type=total;srfid=d9e66f22b5c2410c3b979c9152a0363cc87e8391X2;type=total;ucfs=1&"
        },
        { "_id": "10",
            "type": "3" ,
            "image":"./image/hotel3-2.jpg",
            "name": "Hotel 140",
            "price": "219",
            "stars":"3",
            "address":"140 Clarendon Street, Back Bay",
            "url":"http://www.booking.com/hotel/us/140.html?label=gen173nr-1DEgJnbzIFaG90ZWxCAlhYSDNiBW5vcmVmcgV1c19uaogBAZgBMrgBDMgBDNgBA-gBAfgBAqgCAw;sid=d9fbdca2636a358333eed8fb70967417;dcid=4;checkin=2016-06-24&checkout=2016-06-25&dest_id=20061717&dest_type=city&group_adults=2&highlighted_blocks=18113101_88895135_0_0_0&nflt=class%3D3&room1=A%2CA&sb_price_type=total&srfid=d9e66f22b5c2410c3b979c9152a0363cc87e8391X1&type=total&ucfs=1&"
        },
        { "_id": "11",
            "type": "3" ,
            "image":"./image/hotel2.jpg",
            "name": "DoubleTree Suites by Hilton",
            "price": "167",
            "stars":"3",
            "address":"400 Soldier Field Road, Allston",
            "url":"http://www.booking.com/hotel/us/doubletree-guest-suites-boston.html?label=gen173nr-1DEgJnbzIFaG90ZWxCAlhYSDNiBW5vcmVmcgV1c19uaogBAZgBMrgBDMgBDNgBA-gBAfgBAqgCAw;sid=d9fbdca2636a358333eed8fb70967417;dcid=4;checkin=2016-06-24;checkout=2016-06-25;dest_id=20061717;dest_type=city;dist=0;group_adults=2;highlighted_blocks=2876502_487555_2_0_0;nflt=class%3D3;room1=A%2CA;sb_price_type=total;srfid=d9e66f22b5c2410c3b979c9152a0363cc87e8391X5;type=total;ucfs=1&"
        },
        { "_id": "12",
            "type": "3" ,
            "image":"./image/hotel3-4.jpg",
            "name": "The Verb Hotel",
            "price": "179",
            "stars":"3",
            "address":"1271 Boylston Street, Fenway Kenmore",
            "url":"http://www.booking.com/hotel/us/doubletree-guest-suites-boston.html?label=gen173nr-1DEgJnbzIFaG90ZWxCAlhYSDNiBW5vcmVmcgV1c19uaogBAZgBMrgBDMgBDNgBA-gBAfgBAqgCAw;sid=d9fbdca2636a358333eed8fb70967417;dcid=4;checkin=2016-06-24;checkout=2016-06-25;dest_id=20061717;dest_type=city;dist=0;group_adults=2;highlighted_blocks=2876502_487555_2_0_0;nflt=class%3D3;room1=A%2CA;sb_price_type=total;srfid=d9e66f22b5c2410c3b979c9152a0363cc87e8391X5;type=total;ucfs=1&"
        }
    ];

    app.get("/BostonTrip/api/popular",findPopularHotels);
    app.get("/BostonTrip/api/highstar",findHighstarHotels);
    app.get("/BostonTrip/api/attraction",findAttraction);
    app.get("/BostonTrip/api/guide",findGuide);
    app.get("/BostonTrip/api/eat",findEat);
    app.get("/BostonTrip/api/hotels",findHotels);

    function findPopularHotels(req,res){
        res.send(popularHotels);
    }

    function findHighstarHotels(req,res){
        res.send(highstarHotels);
    }

    function findAttraction(req,res){
        res.send(attraction);
    }
    function findGuide(req,res){
        res.send(guide);
    }
    function findEat(req,res){
        res.send(eat);
    }
    function findHotels(req,res){
        res.send(hotels);
    }
};