var express = require('express');
var router = express.Router();

router.get('/weather', function (req, res, next) {
  // Simulated weather data
  var weatherData = {
    Temp: 90.5,
    Unit: 'fahrenheit',
    Cloudy: false,
    PrecipitationChance: 0,
  };

  res.json(weatherData);
});

module.exports = router;
