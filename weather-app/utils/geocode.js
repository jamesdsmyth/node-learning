const request = require('request');

const geocode = (address, callback) => {
  const encodedAddress = encodeURIComponent(address);
  const weatherUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=pk.eyJ1IjoiamFtZXNkc215dGgiLCJhIjoiY2lvaXFlejRoMDA2eHV1a3gwMWJyOThiYSJ9.ZHj4u050E2Ta_YiWyRnOxA&limit=1`

  request({ url: weatherUrl, json: true }, (error, response) => {
    if(error) {
      callback('unable to connect to location services!');
    } else if(response.body.features.length === 0) {
      callback('we have no results')
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      })
    }
  });
}

module.exports = geocode;