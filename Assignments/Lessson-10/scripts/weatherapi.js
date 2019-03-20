//current Weather
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET','//api.openweathermap.org/data/2.5/weather?id=5799783,us&appid=9ebb09608680154b476f1a983cedac5e&units=imperial', true)
weatherRequest.send();

weatherRequest.onload = function()  {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);


    document.getElementById('current-temp').innerHTML = weatherData.main.temp.toFixed(1);
   

}
//forcast
var forcastObject = new XMLHttpRequest();
forcastObject.open('GET', '//api.openweathermap.org/data/2.5/forecast?zip=5799783,us&appid=25187f2c68d8950cbad7de4d8c50ff5b&units=imperial', true)
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
