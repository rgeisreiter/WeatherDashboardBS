var apiKey = "&appid=dbaec924e284909f3d31bc2652b4488f&units=imperial";
var currentUrl = "https://api.openweathermap.org/data/2.5/weather?q="; //q = query
var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
var uvUrl =
  "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}";
var citySearch = $("#searchCity");
var currentTemp = $("#Temperature");
var currentWind = $("#wind");
var currentHumidity = $("#humidity");
var uvI = $("#uvI");

//grabbing value from input box
$("#searchButton").on("click", function () {
  var city = citySearch.val();
  console.log(city);
  currentWeather(city);
});

function currentWeather(city) {
  $.ajax({
    type: "GET",
    url: currentUrl + city + apiKey,
    dataType: "json",
    success: function (data) {
      console.log(data);
    },
  });
}

//var + city + api key

// currentDay (city) {data.main.temp}

//funciton getUv (lat,long) {}

//data.coord.lat inside function
//data.coord.lon
