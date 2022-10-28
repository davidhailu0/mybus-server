const mongoose = require("mongoose")

const busSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    logo:String,
    role:{
        type:String,
        default:"BUS COMPANY"
    }
})

module.exports = mongoose.model("Bus",busSchema)