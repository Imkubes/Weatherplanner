var APIKey = "36b80f9a86355f67ae521926147037ad";
var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=44.8041&lon=-93.1669&appid=" + APIKey + "&units=imperial"
var city = $('city');
var temp = $('temp');
var humidity = $('humidity');
var windSpeed = $('windspeed');
var conditonsIcon = $('conditionsIcon');
var date = $('date');
var lat = $('lat');
var lon = $('lon');

fetch(queryURL)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      //searchData = data;
      console.log(data);
      addToPage(data);
  })


  function addToPage(data) {
      var temp = data.current.temp
      var humidity = data.current.humidity
      var windSpeed = data.current.wind_speed
      console.log(windSpeed);
  }