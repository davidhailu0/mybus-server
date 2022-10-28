const express = require("express");
const cors = require('cors')
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
const device = require("express-device")
const path = require('path');
const tripRouter = require("./routes/trip.Routes")
const ticketRouter = require("./routes/ticket.Route")
const authRouter = require('./routes/auth.Routes')
const managementRouter = require("./routes/managememt.Routes")
require('dotenv').config()
require("./config")
const getCityFromIp = require("./utils/getCityFromIP")
const {checkLocation} = require("./middlewares/location.cache.middleware") 
const getDeviceType = require("./middlewares/deviceType.middleware")
const authMiddleWare = require("./middlewares/auth.middleware")
const app = express()
Sentry.init({
    dsn: "https://918f046266284fbdbd85d61a1a7d801c@o1413547.ingest.sentry.io/6754649",
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Tracing.Integrations.Express({ app }),
    ],
    tracesSampleRate: 1.0,
  });
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());
app.use(cors())
app.use(express.static(path.resolve(__dirname,"uploads")))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(device.capture())
app.get("/getCity/:ip",[checkLocation,getDeviceType],getCityFromIp)
app.use('/api/v1/auth',authRouter)
app.use("/api/v1/trip/",tripRouter)
app.use("/api/v1/ticket",ticketRouter)
app.use("/api/v1/manage",[authMiddleWare],managementRouter)

app.use(Sentry.Handlers.errorHandler());

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})