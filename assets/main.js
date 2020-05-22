// Initial array of cities
var cities = [];

// Function for dumping the JSON content for each button into the div
function renderWeather(city, response) {
  $("#city-weather").html(city);

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
function UVinfo() {
  
  var UVqueryURL =
    "http://api.openweathermap.org/data/2.5/uvi?" +
    "&apikey=72dc3f69fdfc73eedbb7f9276f7e28db" +
    "&lat=" +
    latVal +
    "&lon=" +
    lonVal;
  $.ajax({
    url: UVqueryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var UVToday = Math.round(JSON.stringify(response.value));
    console.log(UVToday);
    const UVHead = $("<h5>")
      .attr("mt-0")
      .text("Current UV Index: " + UVToday);
    UVHead.append(UVToday);
    $(".mt-0").append(UVHead);

    //   // these will set the conditions to show the different UV indexes:
    //   if (UVToday >= 11) {
    //     UVMedia.addClass("UVExtreme");
    //   } else if (UVToday < 11 || UVToday > 7) {
    //     UVMedia.addClass("UVVHigh");
    //   } else if (UVToday <= 7 || UVToday > 5) {
    //     UVMedia.addClass("UVHigh");
    //   } else if (UVToday <=5 || UVMedia > 2) {
    //     UVMedia.addClass("UVModerate");
    //   } else {
    //     UVMedia.addClass("UVLow");
    //   }
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
