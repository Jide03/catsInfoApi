require('dotenv').config({ quiet: true });
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT
const catFactRoute = require("./src/routes/catFact")
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())



app.listen(port, () =>{
    console.log(`app is listening on ${port}`)
}
)
app.get("/me", catFactRoute)