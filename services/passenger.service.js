const moment = require('moment')
const trip = require("../models/trip.model")

const getSearchedTrips = async(req,res)=>{
    const {starting_place,destination,date} = req.query
    try{
      const result = await trip.find({starting_place,destination})
      const filteredResult = result.filter(({dateFrom,dateUpto})=>new Date(dateFrom.toString()).getTime()<=parseInt(date)&&new Date(dateUpto.toString())>=parseInt(date))
      return res.status(200).json(filteredResult)

    }
    catch(e){
      return res.status(500).json({"Status":"Error","Message":"There is an error in the server"})
    }
  }

  module.exports = {getSearchedTrips};