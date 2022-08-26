const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
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
