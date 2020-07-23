const request = require('request')

const forecast = (latitude,longitude,callback) => {
    url = 'http://api.weatherstack.com/current?access_key=f36924475fac81c0763a14fa4eb65bbc&query='+ latitude + ',' + longitude
    request( {url, json: true}, (error,{body}) => {
        if(error){
            callback('Unable to connect to weather service!',undefined)
        } else if (body.error) {
            callback('Unable to get location',undefined)
        } else {
            callback(undefined,body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out.It feels like ' + body.current.feelslike +' degrees out.' + ' The humidity is ' + body.current.humidity + '%. Chances of rain is ' + body.current.precip + '%.')
        }
    })
}

module.exports = forecast