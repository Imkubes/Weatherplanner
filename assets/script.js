var APIKey = "36b80f9a86355f67ae521926147037ad";
var queryURL2 = "https://api.openweathermap.org/data/2.5/weather?q=eagan&appid=" + APIKey
var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=44.8041&lon=-93.1669&appid=" + APIKey + "&units=imperial"
var city = $('city');
var temp = $('temp');
var humidity = $('humidity');
var windSpeed = $('windspeed');
var conditonsIcon = $('conditionsIcon');
var date = $('date');
var uvi = $('uvi');
var lat = $('lat');
var lon = $('lon');


fetch(queryURL2)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      console.log(data);
      getLatLon(data);
  })

  function getLatLon(data) {
      var lat = data.coord.lat
      var lon = data.coord.lon
      console.log(lat);
      console.log(lon);
  }


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
      var uvi = data.current.uvi
      // Changing date to a readable format
      var unixDate = data.current.dt
      var milliseconds = unixDate * 1000
      var dateObject = new Date(milliseconds)
      var humanDate = dateObject.toLocaleString("en-us", {timeZoneName: "short"})
      console.log(uvi);
  }