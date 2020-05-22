// This is our API key
var cities = [];

function displayCityWeather() {

    var city = $(this).attr("data-name");
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&apikey=72dc3f69fdfc73eedbb7f9276f7e28db";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#cities-view").text(JSON.stringify(response));
    });
  }
// These are the default cities that show up in the list
function renderCities () {

    $("#my-cities-view").empty();
// Looping through the array of cities
    for (var i = 0; i < cities.length; i++) {
  // Then dynamically generating a list for each movie in the array
  // This code $("<li>") is all jQuery needs to create the beginning and end tag. (<li></li>)
    var a = $("<li>");
  // Adding a class to the list item
    a.addClass("list-group-item");
  // Adding a data-attribute
    a.attr("data-name", cities[i]);
  // Providing the initial list item text
    a.text(cities[i]);
  // Adding the list item to the list-group div
    $("#my-cities-view").append(a);
}
}
// this will be the function that takes in the searched city and displays that data
$("#add-city").on("click", function(event) {
    
    event.preventDefault();
    
    var city = $("#city-search").val().trim();
    
    cities.push(city);
    
    console.log(cities);
    
    $(document).on("click", displayCityWeather);

    renderCities();
});
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
