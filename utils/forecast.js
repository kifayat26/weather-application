const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=a281232671d92f9dfe30f9f2f52b2533'

    request({ url, json: true }, (error, {body} ) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'The current temperature is ' + (body.main.temp -273.15) + '\xB0C and the humidity is ' + body.main.humidity)
        }
    })
}

module.exports = forecast