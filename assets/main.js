// Initial array of cities
var cities = [];

// Function for dumping the JSON content for each button into the div
function renderWeather(city, response) {
  $("#city-weather").html(city);
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

    // UV index = 
}
function renderUVinfo(UVToday) {
  console.log(UVToday);
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
  var UVqueryURL =
    "http://api.openweathermap.org/data/2.5/uvi?" +
    "&apikey=72dc3f69fdfc73eedbb7f9276f7e28db" +
    "&lat=" +
    latVal +
    "&lon=" +
    lonVal;
    console.log(UVqueryURL);
  $.ajax({
    url: UVqueryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    renderUVinfo(response.value)
  });
}

function displayCityWeather() {
  $("#date").html(moment().format("dddd, MMMM Do YYYY"));
  $("#tomorrow").hide();
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
    // next 5 days forecast:
    // "day0icon"
    // "#forecast0".html(moment().format("dddd, MMMM Do YYYY"))++;
    // // tomorrow's temp:
    // var temp0 = Math.round(
    //   JSON.stringify(response.list[1].main.temp - 273.15) * 1.8 + 32
    // );
    // const displayTemp0 = $("<li>").text("Temperature: " + temp0 + " °F");
    // $("#tomorrow").html(displayTemp0);
    // // tomorrow's humidity:
    // var hum0 = Math.round(JSON.stringify(response.list[1].main.humidity));
    // const displayHum0 = $("<li>").text("Humidity: " + hum0 + "%");
    // $("#tomorrow").html(displayHum0);

    // // "day1icon"
    // "dttxt1"
    // "temp1"
    // "hum1"

    // // "day2icon"
    // "dttxt2"
    // "temp2"
    // "hum2"

    // // "day3icon"
    // "dttxt3"
    // "temp3"
    // "hum3"

    // // "day4icon"
    // "dttxt0"
    // "temp4"
    // "hum4"
  });
}

// Function for displaying movie data
function renderButtons() {
  // Deleting the buttons prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

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
  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});

// Function for displaying the movie info
// Using $(document).on instead of $(".movie").on to add event listeners to dynamically generated elements
$(document).on("click", ".city", displayCityWeather);
// Calling the renderButtons function to display the initial buttons
renderButtons();
// this will be the function that takes in the searched city and displays that data

/* these are the ID's to target for just the weather elements:
TODAY:
"icon-today"
"dttxt-today"
"temp-today"
"hum-today"
"UV-today"
"wind-today" 

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
