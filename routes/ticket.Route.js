const {getTicketById,buyTicket} = require("../services/ticket.services")
const Router = require("express").Router()

Router.get("/:ticketId",getTicketById)
Router.post("/buyTicket",buyTicket)
// Router.put("/updateTicket",)
// Router.delete("/cancelTicket",)


module.exports = Router