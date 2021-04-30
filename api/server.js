const express = require("express")
//cors, helmet, morgan
const server = express()
server.use(express.json())

//router, middleware

server.get('/', (req, res) => {
    res.send('Welcome to the API')
})

module.exports = server
