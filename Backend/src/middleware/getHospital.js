const hospital = require('../models/hospital')

const hospital_data = async(req,res,next)=>{
    const email = req.email
    try{
        const hospital_data = await hospital.findOne({email})
        req.hospital = hospital_data
        return next()
    } catch(e){
        console.log(e)
        return res.status(500).send({error:"Not Found"})
    }
    
}

module.exports = hospital_data