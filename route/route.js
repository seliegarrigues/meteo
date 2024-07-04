require('dotenv').config({ path: 'config.env' });
const express = require('express');
const axios = require('axios');

const route = express.Router();

route.get('/', (req, res) => {
  res.render('index', {
    meteo: null,
    error: null,
  });
});

route.get('/meteo', async (req, res) => {
  let apiKey = process.env.meteo_api_key;
  let meteo;
  let error = null;
  let city = req.query.city;
  const meteoURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await axios.get(meteoURL);
    meteo = response.data;
    console.log(response.data);
  } catch (err) {
    meteo = null;
    error = err.message;
    console.log(err.message);
  }

  res.render('index', {
    meteo,
    city,
    error,
  });
});

module.exports = route;
