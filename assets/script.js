var APIKey = "36b80f9a86355f67ae521926147037ad";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=eagan&appid=" + APIKey + "&units=imperial"
var city = $('city');
var temp = $('temp');
var humidity = $('humidity');
var windSpeed = $('windspeed');
var conditonsIcon = $('conditionsIcon');
var date = $('date');

fetch(queryURL)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      searchData = data;
      console.log(data);
  })


  function addToPage(data) {
      var temp = data.main.temp;
      console.log(temp);
  }

  addToPage();