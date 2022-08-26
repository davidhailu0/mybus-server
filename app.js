const express = require("express");
const cors = require('cors')
const busRouter = require("./routes/busCompany.Routes")
require('dotenv').config()
require("./config")

const authRouter = require('./routes/auth.Routes')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use('/authenticate',authRouter)
app.use("/busCompany",busRouter)


app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})

