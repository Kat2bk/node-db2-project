const express = require("express")
//cors, helmet, morgan
const carsRouter = require('./cars/cars-router');
const server = express()
server.use(express.json())

//router, middleware
server.use('/api/cars', carsRouter)

server.get('/', (req, res) => {
    res.send('Welcome to the API!')
})

module.exports = server
