const {addTrip} = require('../services/busCompany.services')
const router = require("express").Router()

router.post("/addTrip",addTrip)

module.exports = router