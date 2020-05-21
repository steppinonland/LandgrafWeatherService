// This is our API key
var APIKey = "72dc3f69fdfc73eedbb7f9276f7e28db";
var queryURL = "https://www.api.openweathermap.org/data/2.5/forecast?q=" + city + APIKey;
var cities = [];
var city = $("#city-search").val();
// this will be the function that takes in the searched city and displays that data
        function displayCityWeather() {
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                console.log(queryURL);
                console.log(response);
                
                // $(".city").html("<h1>" + response.name + " Weather Details</h1>");


                // var windSpeed = response.wind.speed;
                // var cityTemp = (response.main.temp - 273.15) * 1.8 + 32;
                // var UVindex = response.clouds.all;
                // var humidity = response.main.humidity;
            });
        }

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
// This is the onclick function that will take in the searched city and then push it into the cities array
// This should also display the weather for that city
    $("#add-city").on("click", function(event) {
        event.preventDefault();
        cities.push(city);
        console.log(cities);

        renderCities();
    });

    $(document).on("click", ".city", displayCityWeather);
