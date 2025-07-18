const express = require('express');
const { renderWeather } = require('../views/WeatherView');

const router = express.Router();

router.get('/', renderWeather);

module.exports = router;