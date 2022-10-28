const jwt = require("jsonwebtoken")

const adminAuthorizedPath = ["/manage"]
const busAuthorizedPath = ["/addTrip","/updateTrip","/deleteTrip"]
const customerAuthorizedPath = ["/ticket"]

const authMiddleware = (req,res,next)=>{
    const {token} = req.headers;
    if(!token){
        return res.status(401).json({"status":"error","message":"you are not authorized"})
    }
    try{
        const passToken = jwt.verify(token,process.env.TOKEN_KEY)
        req.user = passToken._doc
        if(passToken._doc.role==="ADMIN"){
            if(busAuthorizedPath.find(path=>req.originalUrl.includes(path))){
                return res.status(401).json({"message":"unauthorized"})
            }
            if(customerAuthorizedPath.find(path=>req.originalUrl.includes(path))){
                return res.status(401).json({"message":"unauthorized"})
            }
        }
        else if(passToken._doc.role==="BUS COMPANY"){
            if(customerAuthorizedPath.find(path=>req.originalUrl.includes(path))){
                return res.status(401).json({"message":"unauthorized"})
            }
            if(adminAuthorizedPath.find(path=>req.originalUrl.includes(path))){
                return res.status(401).json({"message":"unauthorized"})
            }
        }
        else if(passToken._doc.role==="CUSTOMER"){
            if(adminAuthorizedPath.find(path=>req.originalUrl.includes(path))){
                return res.status(401).json({"message":"unauthorized"})
            }
            if(busAuthorizedPath.find(path=>req.originalUrl.includes(path))){
                return res.status(401).json({"message":"unauthorized"})
            }
        }
        else{
            return res.status(401).json({"status":"error","message":"you have Invalid Token"})
        }
        next()
    }
    catch(e){
        return res.status(401).json({"status":"error","message":"Invalid Token format"})
    }
}
module.exports = authMiddleware