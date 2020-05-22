// Initial array of cities
var cities = [];

// Function for dumping the JSON content for each button into the div
function displayCityWeather() {
  $("#date").html(moment().format("dddd, MMMM Do YYYY"));
  var city = $(this).attr("data-name");
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&apikey=72dc3f69fdfc73eedbb7f9276f7e28db";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#city-weather").html(city);
    // temperature:
    var tempToday = (Math.round(JSON.stringify(response.main.temp - 273.15) * 1.80 + 32));
    const displayTodayTemp = $("<p>").text("Temperature: " + tempToday + " °F");
    $("#temp-today").html(displayTodayTemp);

    // humidity:
    var humToday = (Math.round(JSON.stringify(response.main.humidity)));
    const displayTodayHum = $("<p>").text("Humidity: " + humToday + "%");
    $("#hum-today").html(displayTodayHum);

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
$("#add-city").on("click", function(event) {
  event.preventDefault();

  // This line grabs the input from the textbox
  var city = $("#city-input").val();

  // Adding the movie from the textbox to our array
  cities.push(city);
  console.log(cities);

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
