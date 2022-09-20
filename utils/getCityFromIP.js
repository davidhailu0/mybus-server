const https = require("https")
const { locationCache } =  require("../middlewares/location.cache.middleware")

const API_KEY = "Bearer 3785|HeGlqnpxwgnwSVhjy1NIvF2EHoSCbkqmCMShEaLE";

const getCityfromIP = async(req,res)=>{
    const {ip} = req.params;
    var options = {
        host: `ipxapi.com`,
        path: `/api/ip?ip=${ip}`,
        headers: {
            "Accept": "application/json",
            "Authorization": API_KEY
        }
    };
    const httpGet = https.request(options, (response) => {
        let data = ""
        response.on("data", (chunk) => {
            data += chunk;
        });
        response.on("end",()=>{
            locationCache.set(ip,JSON.parse(data)['city'])
            res.status(200).json({message:"success",city:JSON.parse(data)['city']})
        })
    })
    httpGet.end()
}

module.exports = getCityfromIP