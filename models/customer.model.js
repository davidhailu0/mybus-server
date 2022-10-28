const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:String,
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    address:String,
    role:{
        type:String,
        default:"CUSTOMER"
    }
})

module.exports = mongoose.model("Customer",userSchema)