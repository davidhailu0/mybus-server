const express = require("express");
const cors = require('cors')
require('dotenv').config()
require("./config")

const authRouter = require('./routes/auth.Routes')
const app = express()
app.use(cors())
app.use(express.json())
app.use('/authenticate',authRouter)


app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})

