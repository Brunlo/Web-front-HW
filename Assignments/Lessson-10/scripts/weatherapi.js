//current Weather
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET','https://api.openweathermap.org/data/2.5/weather?zip=83263,us&appid=9ebb09608680154b476f1a983cedac5e&units=imperial', true)
weatherRequest.send();

weatherRequest.onload = function()  {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    //this set the element with this id to the current main tempreture
    document.getElementById('currenttemp').innerHTML = weatherData.main.temp;
    // This is for the current Humidity
    document.getElementById('currentHumidity').innerHTML = weatherData.wind.speed;
    // This is for the current Speed
    document.getElementById('currentWind').innerHTML = weatherData.wind.deg;
   //this is setting the variable icon to the icon id from the json/api data
    var icon = weatherData.weather[0].icon; 

    //make the icon id an actual image that can be displayed
    var icon_path = "http://openweathermap.org/img/w/" + icon + ".png";

    //put it all together here and you get the current weather icon
    document.getElementById('weather_icon').src = icon_path;

    
}
//forcast
var forcastObject = new XMLHttpRequest();
forcastObject.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?zip=83263,us&appid=25187f2c68d8950cbad7de4d8c50ff5b&units=imperial', true)
forcastObject.send();

forcastObject.onload = function () {
    var weatherForcast = JSON.parse(forcastObject.responseText);
    console.log(weatherForcast);

    document.getElementById('day1').innerHTML = weatherForcast.list["0"].main.temp.toFixed(1);
    document.getElementById('day2').innerHTML = weatherForcast.list["1"].main.temp.toFixed(1);
    document.getElementById('day3').innerHTML = weatherForcast.list["2"].main.temp.toFixed(1);
    document.getElementById('day4').innerHTML = weatherForcast.list["3"].main.temp.toFixed(1);
    document.getElementById('day5').innerHTML = weatherForcast.list["4"].main.temp.toFixed(1);
    document.getElementById('day6').innerHTML = weatherForcast.list["5"].main.temp.toFixed(1);
    document.getElementById('day7').innerHTML = weatherForcast.list["6"].main.temp.toFixed(1);
    document.getElementById('day8').innerHTML = weatherForcast.list["7"].main.temp.toFixed(1);
    document.getElementById('day9').innerHTML = weatherForcast.list["8"].main.temp.toFixed(1);
    document.getElementById('day10').innerHTML = weatherForcast.list["9"].main.temp.toFixed(1);

}

//

 
