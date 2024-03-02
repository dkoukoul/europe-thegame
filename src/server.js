const express = require('express')
const app = express()
const routes = require('./routes') // includes the routes.js file
const cors = require('cors') // includes cors module

require('dotenv').config()

app.use(cors()) // We're telling express to use CORS
app.use(express.json()) // we need to tell server to use json as well
app.use(routes) // tells the server to use the routes in routes.js

app.listen(process.env.PORT, () => {
    console.log("The API is running...")
})
