//Current Weather in Salt Lake
var request = new XMLHttpRequest();
request.open('GET','https://api.openweathermap.org/data/2.5/weather?zip=84044,us&appid=9ebb09608680154b476f1a983cedac5e&units=imperial', true)
request.send();

request.onload = function()  {
    var weatherData = JSON.parse(request.responseText);
    

    //this set the element with this id to the current main tempreture
    document.getElementById('currentTemp').innerHTML = weatherData.main.temp;
    // This is for the current Humidity
    document.getElementById('currentHumidity').innerHTML = weatherData.wind.speed;
    // This is for the current Speed
    document.getElementById('currentWind').innerHTML = weatherData.wind.deg;
   //this is setting the variable icon to the icon id from the json/api data
    var icon = weatherData.weather[0].icon; 

    //make the icon id an actual image that can be displayed
    var icon_path = "http://openweathermap.org/img/w/" + icon + ".png";

    //put it all together here and you get the current weather icon
    document.getElementById('weathericon').src = icon_path;

    
}









// Current Weather in Vegas

var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET','https://api.openweathermap.org/data/2.5/weather?zip=88901,us&appid=9ebb09608680154b476f1a983cedac5e&units=imperial', true)
weatherRequest.send();

weatherRequest.onload = function()  {
    var Data = JSON.parse(weatherRequest.responseText);
    

    //this set the element with this id to the current main tempreture
    document.getElementById('vegastemp').innerHTML = Data.main.temp;
    // This is for the current Humidity
    document.getElementById('vegasHumidity').innerHTML = Data.wind.speed;
    // This is for the current Speed
    document.getElementById('vegasWind').innerHTML = Data.wind.deg;
   //this is setting the variable icon to the icon id from the json/api data
    var icon = Data.weather[0].icon; 

    //make the icon id an actual image that can be displayed
    var icon_path = "http://openweathermap.org/img/w/" + icon + ".png";

    //put it all together here and you get the current weather icon
    document.getElementById('vegasicon').src = icon_path;



 }


//Current Weather in Manti
var maintirequest = new XMLHttpRequest();
maintirequest.open('GET','https://api.openweathermap.org/data/2.5/weather?zip=84642,us&appid=9ebb09608680154b476f1a983cedac5e&units=imperial', true)
maintirequest.send();

maintirequest.onload = function()  {
    var maintiData = JSON.parse(maintirequest.responseText);
    

    //this set the element with this id to the current main tempreture
    document.getElementById('maintiTemp').innerHTML = maintiData.main.temp;
    // This is for the current Humidity
    document.getElementById('maintiHumidity').innerHTML = maintiData.wind.speed;
    // This is for the current Speed
    document.getElementById('maintiWind').innerHTML = maintiData.wind.deg;
   //this is setting the variable icon to the icon id from the json/api data
    var icon = maintiData.weather[0].icon; 

    //make the icon id an actual image that can be displayed
    var icon_path = "http://openweathermap.org/img/w/" + icon + ".png";

    //put it all together here and you get the current weather icon
    document.getElementById('maintiicon').src = icon_path;

    
}









 //Current Weather in Rexburg
var rexrequest = new XMLHttpRequest();
rexrequest.open('GET','https://api.openweathermap.org/data/2.5/weather?zip=83440,us&appid=9ebb09608680154b476f1a983cedac5e&units=imperial', true)
rexrequest.send();

rexrequest.onload = function()  {
    var rexData = JSON.parse(rexrequest.responseText);
    

    //this set the element with this id to the current main tempreture
    document.getElementById('rexTemp').innerHTML = rexData.main.temp;
    // This is for the current Humidity
    document.getElementById('rexHumidity').innerHTML = rexData.wind.speed;
    // This is for the current Speed
    document.getElementById('rexWind').innerHTML = rexData.wind.deg;
   //this is setting the variable icon to the icon id from the json/api data
    var icon = rexData.weather[0].icon; 

    //make the icon id an actual image that can be displayed
    var icon_path = "http://openweathermap.org/img/w/" + icon + ".png";

    //put it all together here and you get the current weather icon
    document.getElementById('rexicon').src = icon_path;

    
}





