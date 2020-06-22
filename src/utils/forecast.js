const request = require('request');


const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=c7c100c748334fc780484126202006&q=${latitude},${longitude}`;

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather API');
        } else if (body.error) {
            callback('Unable to find location');
        } else {
            callback(undefined, `The temperature now is ${body.current.temp_c} degrees out. Forecast: ${body.current.condition.text}.`);
        }
    });
}

module.exports = forecast;