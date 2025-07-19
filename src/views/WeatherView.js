const weatherViewModel = require('../viewmodels/WeatherViewModel');

// Get the request from the frontend (city) to fetch the weather and send it back as a JSON response
async function renderWeather(req, res) {

  try {
    // This allows the user to specify a city in the URL, e.g., /weather?city=London
    // If no city is specified, it defaults to 'Brussel
    const city = req.query.city || 'Brussel';
    const weatherData = await weatherViewModel.getWeatherData(city);
    res.json(weatherData);
  } 
  
  catch (err) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
}

module.exports = { renderWeather };