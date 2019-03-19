//current Weather
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET','//api.openweathermap.org/data/2.5/weather?zip=55333,us&appid=9ebb09608680154b476f1a983cedac5e&units=imperial', true)
weatherRequest.send();

weatherRequest.onload = function()  {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
}
