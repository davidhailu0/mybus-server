const nodeCache = require("node-cache")
const locationCache = new nodeCache({checkperiod:0,useClones:false})

const checkLocation = (req,res,next)=>{
    const {ip} = req.params
    const locationData = locationCache.get(ip)
    if(locationData){
        return res.status(200).json({"message":"success",city:locationData["city"],lang:locationData["lang"]})
    }
    next()
}

module.exports = {checkLocation,locationCache}