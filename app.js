const express = require("express");
const cors = require('cors')
const tripRouter = require("./routes/trip.Routes")
const ticketRouter = require("./routes/ticket.Route")
require('dotenv').config()
require("./config")
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
const getLocation = require("./utils/getLocation")

const authRouter = require('./routes/auth.Routes')
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
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/authenticate',authRouter)
app.use("/api/trip/",tripRouter)
app.use("/api/ticket",ticketRouter)

app.use(Sentry.Handlers.errorHandler());

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})