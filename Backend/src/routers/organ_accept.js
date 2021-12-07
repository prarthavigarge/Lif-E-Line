const express = require('express')
const hospital = require('../models/hospital')
const organ  = require('../models/organ')
const requests = require('../models/requests')
const organ_accept = require('../models/organ_accept')
const checkUser = require('../middleware/checkUser')
const getHospital = require('../middleware/getHospital')

const router = express.Router()

// POST Route to accept a particular organ
router.post('/accept/:id',getHospital,async(req,res)=>{
    const hos_id =  req.hospital._id
    const _id = req.params.id
    const request_data = await requests.findOne({_id})
    console.log(request_data)
    const organ_data = await organ.findOne({organ:request_data.organ})
    console.log(organ_data)
    if(organ_data.status=="AVAILABLE" && organ_data.blood_group == request_data.blood_group){
        let accept_data = {
            hos_id,
            org_id:organ_data._id,
            req_id:request_data._id
        }
        accept_data = new organ_accept(accept_data)
        await accept_data.save()
        organ_data.status="NOTAVAILABLE"
        await organ_data.save()
        res.send(accept_data)
    } else{
        throw new Error("ERROR")
    }
})


// GET Route to get all accepted ones
router.get('/accept',getHospital,async(req,res)=>{
    const accept_data = await organ_accept.find({hos_id:req.hospital._id}).populate(['hos_id','org_id','req_id'])
    res.send(accept_data)
})


module.exports = router


