const request = require('request');

const forecast = (longitude, latitude, callback) => {
  const url = `https://api.darksky.net/forecast/117060fd3e5da4788a3c60ecfd47b213/${longitude},${latitude}`;

  request({ url: url, json: true }, (error, response) => {
    if(error) {
      callback('unable to connect to weather service', undefined);
    } else if(response.body.error) {
      console.log('unable to find location', undefined)
    } else {
      callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
    }
  });
}

module.exports = forecast;