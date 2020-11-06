# LandgrafWeatherService
 Welcome to my Weather Dashboard!

This is a straightforward website where the user can search any city to look up the weather. I had a lot of fun designing it and laying out everything. It's one of my very first JavaScript projects!

This application is set up to retrieve data from the application's third-party OpenWeather API. This API allowed me to access the weather data. Each request with specific parameters to a URL dynamically updates HTML and CSS.

Here is the [OpenWeather API](https://openweathermap.org/api) that I used to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions. Use `localStorage` to store any persistent data.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```
