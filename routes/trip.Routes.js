const {addTrip,getSearchedTrips,updateTrip, deleteTrip} = require('../services/trip.services')
const router = require("express").Router()

router.get("/",getSearchedTrips)
router.post("/addTrip",addTrip)
router.put("/updateTrip",updateTrip)
router.delete("/deleteTrip",deleteTrip)

module.exports = router