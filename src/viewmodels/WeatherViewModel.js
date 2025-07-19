const WeatherService = require('../services/WeatherService');
const WeatherModel = require('../models/WeatherModel');

class WeatherViewModel {
    // This function fetches the weather data for a given city
    // It uses the WeatherService to get the data and then formats it into a more user-friendly structure
    // The data is then returned to the view for rendering
    // Note: The city parameter is expected to be a string representing the city name
    async getWeatherData(city) {
        const data = await WeatherService.fetchWeather(city);

        // Create a new WeatherModel instance with the fetched data
        // This model encapsulates the weather data in a structured format
        // The WeatherModel constructor takes the city name, temperature, and weather condition as parameters
        const weather = new WeatherModel(
            data.name,
            data.main.temp,
            data.weather[0].description
        );

        // Return a simplified object containing the city, temperature, and weather condition
        // This is the data that will be sent back to the view for rendering
        // The temperature is formatted to include the degree symbol and the condition is converted to uppercase for better readability
        // This makes it easier for the view to display the weather information without needing to know the details of the WeatherModel
        return {
            city: weather.city,
            temperature: `${weather.temp}°C`,
            summary: weather.condition.toUpperCase()
        };
    }

}

module.exports = new WeatherViewModel();