const nodeCache = require("node-cache")
const locationCache = new nodeCache({checkperiod:0,useClones:false})

const checkLocation = (req,res,next)=>{
    const {ip} = req.params
    const city = locationCache.get(ip)
    if(city){
        return res.status(200).json({"message":"success",city:city})
    }
    next()
}

module.exports = {checkLocation,locationCache}