const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
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
})

module.exports = mongoose.model("Trip",tripSchema)
