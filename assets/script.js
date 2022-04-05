var APIKey = "36b80f9a86355f67ae521926147037ad";
var city;
var state;
var country;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + state + "," + country + "&appid=" + APIKey

fetch(queryURL)