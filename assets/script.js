var APIKey = "36b80f9a86355f67ae521926147037ad";
var queryURL2 = "https://api.openweathermap.org/data/2.5/weather?q=duluth&appid=" + APIKey
var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=44.8041&lon=-93.1669&appid=" + APIKey + "&units=imperial"
var city = $('#city');
var temp = $('#temp');
var humidity = $('#humidity');
var windSpeed = $('#windSpeed');
var conditonsIcon = $('#conditionsIcon');
var date = $('#date');
var uvi = $('#uvi');
var lat = $('#lat');
var lon = $('#lon');


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
  }


fetch(queryURL)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      console.log(data);
      addToPage(data);
  })


  function addToPage(data) {
      var cTemp = data.current.temp
      var cHumidity = data.current.humidity
      var cWindSpeed = data.current.wind_speed
      var cUvi = data.current.uvi
      var cConditionsIcon = data.current.weather[0].icon;
      // Changing date to a readable format
      var CUnixDate = data.current.dt
      var milliseconds = CUnixDate * 1000
      var dateObject = new Date(milliseconds)
      var humanDate = dateObject.toLocaleString("en-us", {timeZoneName: "short"})

      date.text(humanDate);
      temp.text('Temp: ' + cTemp + '\u00b0');
      humidity.text('Humidity: ' + cHumidity);
      windSpeed.text('Current Wind Speed: ' + cWindSpeed + ' MPH');
      uvi.text('UV Index: ' + cUvi);
      conditonsIcon.text(cConditionsIcon);
  }

  function fiveDay(data) {
      fiveDay.html("");


      for (let i = 0; i < 5; i++) {
          var fiveConditionsIcon = data.daily[i].weather[0].icon;
          var fiveIconURL = "http://openweathermap.org/img/wn/" + fiveConditionsIcon + "@2x.png"
          var fiveTemp = data.daily[i].temp;
          var fiveWind = data.daily[i].wind_speed;
          var fiveHumidity = data.daily[i].humidity;
          var fiveUVI = date.daily[i].uvi;
          var fiveUnixDate = date.daily[i].dt;
          var fMilliseconds = fiveUnixDate * 1000;
          var fiveDateObj = new Date(fMilliseconds);
          var fiveHumanDate = fiveDateObj.toLocaleString("en-us", {timeZoneName: "short"});


          var liEl = $('<li class="bg-dark text-white flex-fill">')
          var liDate = $('<h3>');
          liDate.text(fiveHumanDate);
          liEl.append(liDate);
      }
  }