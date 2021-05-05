var apiKey = "&appid=dbaec924e284909f3d31bc2652b4488f&units=imperial";
var currentUrl = "https://api.openweathermap.org/data/2.5/weather?q="; //q = query
var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
var uvUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=";
var citySearch = $("#searchCity");
var cityName = $(".cityName");
var weatherImg = $(".weather");
var currentTemp = $("#temp");
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
      cityName.empty();
      cityName.append(data.name + " (" + new Date().toLocaleDateString() + ")");
      var src = weatherImg.append();
      currentTemp.empty();
      currentTemp.append(data.main.temp + " °F");
      currentHumidity.empty();
      currentHumidity.append(data.main.humidity + "%");
      currentWind.empty();
      currentWind.append(data.wind.speed + " MPH");
      getUv(data.coord.lat, data.coord.lon);
    },
  });
}

//var + city + api key

// currentDay (city) {data.main.temp}

function getUv(lat, lon) {
  $.ajax({
    type: "GET",
    url: uvUrl + lat + "&lon=" + lon + apiKey,
    dataType: "json",
    success: function (data) {
      uvI.empty();
      uvI.append(data.value);
      console.log(data);
    },
  });
}

//data.coord.lat inside function
//data.coord.lon
