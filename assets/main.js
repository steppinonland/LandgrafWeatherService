// Initial array of cities
var cities = JSON.parse(localStorage.getItem("cities")) || [];
// Function for dumping the JSON content for each button into the div
function renderWeather(city, response) {
  $("#city-weather").html(city);
  $(".today col-md-6").addClass("style=border-style: ridge;");
  $("#weatherIcon").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
    // temperature:
    var tempToday = Math.round(
      JSON.stringify(response.main.temp - 273.15) * 1.8 + 32
    );
    const displayTodayTemp = $("<p>").text("Temperature: " + tempToday + " °F");
    $("#temp-today").html(displayTodayTemp);

    // humidity:
    var humToday = Math.round(JSON.stringify(response.main.humidity));
    const displayTodayHum = $("<p>").text("Humidity: " + humToday + "%");
    $("#hum-today").html(displayTodayHum);

    // wind speed:
    var windToday = Math.round(response.wind.speed);
    const displayTodayWind = $("<p>").text("Wind Speed: " + windToday + " MPH");
    $("#wind-today").html(displayTodayWind);
}
function renderForecast(city, response) {
  $("#5dayForecast").text(city + " 5 Day Forecast ");
  $("#forecast1").text(moment().add(1, 'days').format("dddd, MMMM Do"));
  $("#weathertomorrow").attr("src", "https://openweathermap.org/img/w/" + response.list[1].weather[0].icon + ".png")
  var temp1 = Math.round((response.list[1].main.temp - 273.15) * 1.8 + 32);
  const displayTemp1 = $("<li>").text("Temperature: " + temp1 + " °F");
  $("#temp1").html(displayTemp1);
    // tomorrow's humidity:
  var hum1 = Math.round(JSON.stringify(response.list[1].main.humidity));
  const displayHum1 = $("<li>").text("Humidity: " + hum1 + "%");
  $("#hum1").html(displayHum1);
    // "dttxt2"
    $("#forecast2").text(moment().add(2, 'days').format("dddd, MMMM Do"));
    // // "day2icon"
    $("#weather2").attr("src", "https://openweathermap.org/img/w/" + response.list[2].weather[0].icon + ".png")
    // "temp2"
    var temp2 = Math.round((response.list[2].main.temp - 273.15) * 1.8 + 32);
    const displayTemp2 = $("<li>").text("Temperature: " + temp2 + " °F");
    $("#temp2").html(displayTemp2);
    // "hum2"
    var hum2 = Math.round(JSON.stringify(response.list[2].main.humidity));
    const displayHum2 = $("<li>").text("Humidity: " + hum2 + "%");
    $("#hum2").html(displayHum2);
// "dttxt3"  
$("#forecast3").text(moment().add(3, 'days').format("dddd, MMMM Do"));

// // "day3icon"
$("#weather3").attr("src", "https://openweathermap.org/img/w/" + response.list[3].weather[0].icon + ".png")

    // "temp3"
    var temp3 = Math.round((response.list[3].main.temp - 273.15) * 1.8 + 32);
    const displayTemp3 = $("<li>").text("Temperature: " + temp3 + " °F");
    $("#temp3").html(displayTemp3);
    // "hum3"
    var hum3 = Math.round(JSON.stringify(response.list[3].main.humidity));
    const displayHum3 = $("<li>").text("Humidity: " + hum3 + "%");
    $("#hum3").html(displayHum3);
    // 
    // "dttxt4"
    $("#forecast4").text(moment().add(4, 'days').format("dddd, MMMM Do"));
    // "day4icon"
    $("#weather4").attr("src", "https://openweathermap.org/img/w/" + response.list[4].weather[0].icon + ".png")
    // "temp4"
    var temp4 = Math.round((response.list[4].main.temp - 273.15) * 1.8 + 32);
    const displayTemp4 = $("<li>").text("Temperature: " + temp4 + " °F");
    $("#temp4").html(displayTemp4);
    // "hum4"
    var hum4 = Math.round(JSON.stringify(response.list[4].main.humidity));
    const displayHum4 = $("<li>").text("Humidity: " + hum4 + "%");
    $("#hum4").html(displayHum4);

    // "dttxt5"
    $("#forecast5").text(moment().add(5, 'days').format("dddd, MMMM Do"));
    // "day5icon"
    $("#weather5").attr("src", "https://openweathermap.org/img/w/" + response.list[5].weather[0].icon + ".png")
    // "temp5"
    var temp5 = Math.round((response.list[5].main.temp - 273.15) * 1.8 + 32);
    const displayTemp5 = $("<li>").text("Temperature: " + temp5 + " °F");
    $("#temp5").html(displayTemp5);
    // "hum5"
    var hum5 = Math.round(JSON.stringify(response.list[5].main.humidity));
    const displayHum5 = $("<li>").text("Humidity: " + hum5 + "%");
    $("#hum5").html(displayHum5);
}


function renderUVinfo(UVToday) {
    $("#UV-head").html($("<h4>").text("UV Index:"));
    $(".UV-keyE").html($("<li>").addClass("UVExtreme").text("Extreme: Greater than 11"));
    $(".UV-keyH").html($("<li>").addClass("UVHigh").text("High: Between 5 and 10"));
    $(".UV-keyL").html($("<li>").addClass("UVLow").text("Low: Less than 5"));
    $("#UV-today").html($("<h5>").text("Current UV Index: " + UVToday));
    //   // these will set the conditions to show the different UV indexes:
      if (UVToday >= 11) {
        $("#UV-today").removeClass()
        $("#UV-today").addClass("UVExtreme");
      } else if (UVToday < 11 && UVToday > 5) {
        $("#UV-today").removeClass()
        $("#UV-today").addClass("UVHigh");
      } else {
        $("#UV-today").removeClass()
        $("#UV-today").addClass("UVLow");
      }
}

function UVinfo(latVal, lonVal) {
  var UVqueryURL = "http://api.openweathermap.org/data/2.5/uvi?" + "&apikey=72dc3f69fdfc73eedbb7f9276f7e28db" +
    "&lat=" +
    latVal +
    "&lon=" +
    lonVal;
  $.ajax({
    url: UVqueryURL,
    method: "GET",
  }).then(function (response) {
    renderUVinfo(response.value)
  });
}

function displayCityWeather() {
  $("#date").html(moment().format("dddd, MMMM Do YYYY"));
  var city = $(this).attr("data-name");
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&apikey=72dc3f69fdfc73eedbb7f9276f7e28db";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    var latVal = response.coord.lat;
    var lonVal = response.coord.lon;
    renderWeather(city, response);
    UVinfo(latVal, lonVal);
  });
}
function displayForecast() {
  var city = $(this).attr("data-name");
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&apikey=72dc3f69fdfc73eedbb7f9276f7e28db";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    renderForecast(city, response);
  });
}
// Function for displaying movie data
function renderButtons() {
  // Deleting the buttons prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();
  $(".container").removeClass();
  // Looping through the array of movies
  for (var i = 0; i < cities.length; i++) {
    // Then dynamically generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie to our button
    a.addClass("city");
    a.addClass("btn btn-secondary");
    // Adding a data-attribute
    a.attr("data-name", cities[i]);
    // Providing the initial button text
    a.text(cities[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

// This function handles events where one button is clicked
$("#add-city").on("click", function (event) {
  event.preventDefault();

  // This line grabs the input from the textbox
  var city = $("#city-input").val();

  // Adding the movie from the textbox to our array
  cities.push(city);
  localStorage.setItem("cities", JSON.stringify(cities));
  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});

// Function for displaying the movie info
// Using $(document).on instead of $(".movie").on to add event listeners to dynamically generated elements
$(document).on("click", ".city", displayCityWeather);
$(document).on("click", ".city", displayForecast);
// Calling the renderButtons function to display the initial buttons
renderButtons();
// this will be the function that takes in the searched city and displays that data

/* these are the ID's to target for just the weather elements:

5 DAY FORECAST ID'S:
"day0icon"
"dttxt0"
"temp0"
"hum0"

"day1icon"
"dttxt1"
"temp1"
"hum1"

"day2icon"
"dttxt2"
"temp2"
"hum2"

"day3icon"
"dttxt3"
"temp3"
"hum3"

"day4icon"
"dttxt0"
"temp4"
"hum4"

*/
