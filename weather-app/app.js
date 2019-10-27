const request = require('request');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('New york', (error, data) => {
  if(data) {
    // now need to call forecast
    const theForecast = forecast(data);

    console.log('the forecast bitch', theForecast);
  }
});