const {getSearchedTrips} = require('../services/passenger.service')

const router = require("express").Router()

router.get("/",getSearchedTrips)

module.exports = router;