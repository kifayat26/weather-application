const express = require('express')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

app.get('',(req, res) => {
    const address = "dhaka"
    if (!address) {
        console.log('Please provide an address')
    } else {
        geocode(address, (error, { latitude, longitude, location }) => {
            if (error) {
                return console.log(error)
            }
    
            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return console.log(error)
                }
    
                console.log(location)
                console.log(forecastData)
            })
        })
    }
    
    res.send('<h1>success</h1>')
    console.log('success')
})



const address = process.argv[2]


app.listen(port,()=> {
    console.log('port ' + port)
})