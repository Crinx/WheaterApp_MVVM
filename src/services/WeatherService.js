const axios = require('axios');
require('dotenv').config();

class WeatherService {

    async fetchWeather(city) {

        // OpenWeather API URL, set wheater variable from model and get API key from .env file
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.WHEATER_API_KEY}`;

        // Try/Catch block (always catch errors!), get the weather for given city
        try {
            const response = await axios.get(url);
            const data = response.data;

            const res = await axios.get(url);
            return res.data;
        } 
        catch (error) {
            console.error('Error fetching weather data:', error);
            throw new Error('Could not fetch weather data');
        }
    }
}

module.exports = new WeatherService();