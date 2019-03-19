//current Weather
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET','//api.openweathermap.org/data/2.5/weather?id=5799783,us&appid=9ebb09608680154b476f1a983cedac5e&units=imperial', true)
weatherRequest.send();

weatherRequest.onload = function()  {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);


    document.getElementById('current-temp').innerHTML = weatherData.main.temp.toFixed(1);
   

}
