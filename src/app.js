const express = require('express');
const weatherRoutes = require('./routes/Weather');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/weather', weatherRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the MVVM Node.js App!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});