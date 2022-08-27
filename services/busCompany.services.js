const Trip = require("../models/trip.model")

const addTrip = async(req,res)=>{
  try{
    const trip = new Trip(req.body)
  await trip.save()
  return res.status(201).json(trip);
  }
  catch(e){
    return res.status(500).json({"Status":"Failed","Message":`${e.message}`})
  }
}

module.exports = {
    addTrip
}