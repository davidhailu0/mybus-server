const mongoose = require("mongoose")

try{
    mongoose.connect(process.env.MONGODB_URI)
    console.log("Database connected successfully")
}
catch(e){
    console.error(e.message)
}
