/**
 * Created by zhangyuxi on 2016/5/22.
 */
// weather API
(function(){
    $(init);
    function init(){
        $.ajax({
                url:"http://api.openweathermap.org/data/2.5/weather?q=Boston&APPID=40680bd060047bd428a3f6a2748e5f31&units=metric",
                success:weatherapi
        });
    }
    function weatherapi(response){
        console.log(response);
        var weatherboston=response.main;
        // console.log(weatherboston);
        var temp_min=parseInt(weatherboston.temp_min);
        var temp_max=parseInt(weatherboston.temp_max);
        $("#temprature").append(temp_min+"&#176;C"+"&nbsp;"+"~"+"&nbsp;"+temp_max+"&#176;C");
    }
})();

// hotel hover

(function(){
    $(function() {
        $( "#tabs" ).tabs();
    });
})();
//
// $(".test").click(function(){
//     $(".test").addClass("active");
// });

// function hotels() {
//     var tabs=document.getElementById("tabs");
//     var tab1=tabs.getElementsByClassName("nav");
//     for (var i = 0; i < tab1.length; i++) {
//         var tab=tab1[i];
//         tab.onclick=tabchange;
//
//         function tabchange(){
//             var tabs=document.getElementById("tabs");
//             var tab1=tabs.getElementsByClassName("nav");
//             for (var i = 0; i < tab1.length; i++) {
//                 var tab2=tab1[i];
//                 if(tab2=window.event.srcElement){
//                     tab2.style.border="2px red solid";
//                     // console.log(tab);
//                     console.log("1");
//                 }
//                 else{
//
//                 }
//
//             }
//
//         }
//     }
// }






//
// (function(){
//     $(init);
//     function init(){
//         $.ajax({
//             url:"http://partners.api.skyscanner.net/apiservices/hotels/autosuggest/v2/US/USD/en-US/BOSTON?apikey=prtl6749387986743898559646983194",
//             success:hotelapi
//         });
//     }
//     function hotelapi(response){
//         console.log(response);
//         // var hotelboston=response.HotelsPrices;
//         // console.log(hotelboston);
//         // var temp_min=parseInt(weatherboston.temp_min);
//         // var temp_max=parseInt(weatherboston.temp_max);
//         // $("#temprature").append(temp_min+"&#176;C"+"&nbsp;"+"~"+"&nbsp;"+temp_max+"&#176;C");
//     }
//
// })();

