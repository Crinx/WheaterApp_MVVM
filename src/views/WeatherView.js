const weatherViewModel = require('../viewmodels/WeatherViewModel');

async function renderWeather(req, res) {
    
  try {
    const city = req.query.city || 'Brussel';
    const weatherData = await weatherViewModel.getWeatherData(city);
    res.json(weatherData);
  } 
  
  catch (err) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
}

module.exports = { renderWeather };