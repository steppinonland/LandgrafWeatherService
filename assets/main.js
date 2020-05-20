// This is our API key
var APIKey = "72dc3f69fdfc73eedbb7f9276f7e28db";

// Here we are building the URL we need to query the database


      // This .on("click") function will trigger the AJAX Call
      $("#find-city").on("click", function(event) {

        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();

        // Here we grab the text from the input box
        var city = $("#city-input").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + city + APIKey;
        // Here we construct our URL

        // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
        // and display it in the div with an id of movie-view

        // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          $("#").text(JSON.stringify(response));
        });

        // -----------------------------------------------------------------------

      });