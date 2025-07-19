const express = require('express');
const weatherRoutes = require('./routes/Weather');

// Initialize path so we canuse the frontend .html file
const path = require('path');

// Load environment variables from .env file
// This is important for accessing the API key securely
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS (or any other template engine you prefer) here we use a plain HTML file.
app.use(express.static(path.join(__dirname, '../public')));

// This is an API backend so we say it needs to use JSON
app.use(express.json());

// The routes for the weather API
// This will handle requests to /weather and forward them to the WeatherView
app.use('/weather', weatherRoutes);

app.get('/', (req, res) => {
  res.send('App could not load properly, please check the console for errors.');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});