const express = require('express');
const { renderWeather } = require('../views/WeatherView');

// Initialize the router
const router = express.Router();

// Define the route for fetching weather data 
// (from the file in the views folder)
router.get('/', renderWeather);

module.exports = router;