const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    starting_place:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
},{_id:false})

module.exports = mongoose.model("Ticket",ticketSchema)
