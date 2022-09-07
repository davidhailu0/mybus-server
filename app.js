const express = require("express");
const cors = require('cors')
const tripRouter = require("./routes/trip.Routes")
const ticketRouter = require("./routes/ticket.Route")
require('dotenv').config()
require("./config")

const authRouter = require('./routes/auth.Routes')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/authenticate',authRouter)
app.use("/api/trip/",tripRouter)
app.use("/api/ticket",ticketRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})

