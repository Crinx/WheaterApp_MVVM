const WeatherService = require('../services/WeatherService');
const WeatherModel = require('../models/WeatherModel');

class WeatherViewModel {

    async getWeatherData(city) {
        const data = await WeatherService.fetchWeather(city);

        const weather = new WeatherModel(
            data.name,
            data.main.temp,
            data.weather[0].description
        );

        return {
            city: weather.city,
            temperature: `${weather.tempCelsius}°C`,
            summary: weather.condition.toUpperCase()
        };
    }

}

module.exports = new WeatherViewModel();