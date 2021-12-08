const express = require('express')
const requests = require('../models/requests')
const organ = require('../models/organ')
const checkUser = require('../middleware/checkUser')
const getHospital = require('../middleware/getHospital')
const { request } = require('express')

const router = express.Router()

// POST Route for creating a requests
router.post('/request_organ',getHospital,async(req,res)=>{
    const data = {
        patient_name:req.body.patient_name,
        patient_age:req.body.patient_age,
        blood_group:req.body.blood_group,
        organ:req.body.organ,
        hos_id:req.hospital._id
    }
    const Request = new requests(data)
    try{
        await Request.save()
        res.status(200).send(Request)
    } catch(e){
        res.status(500).send(e)
    }
})

// GET Route for getting all Requests
router.post('/request_organ/me',getHospital,async(req,res)=>{
    const hos_id = req.hospital._id
    try{
        const Requests = await requests.find({hos_id,status:"OPEN"}).populate("hospital","name")
        res.status(200).send(Requests)
    } catch(e){
        res.status(500).send(e)
    }
})

// GET Route to get all the requests possibile to give
router.post('/request_organ/available',getHospital,async(req,res)=>{
    const my_requests = await requests.find({hos_id:req.hospital._id,status:"OPEN"}).populate('hos_id')
    console.log(my_requests)
    const new_data = await Promise.all(my_requests.map(async(request)=>{
        const data = await organ.findOne({organ:request.organ,status:"AVAILABLE",blood_group:request.blood_group})
        console.log(data)
        if(data!==null){
            return request
        } else{
            return null
        }
    }))
    const available = await Promise.all(new_data.filter(element => {
        return element !== null;
      }))
    res.send(available)
})

// PATCH Route to update a particular request
router.patch('/request_organ/:id',async(req,res)=>{
    const _id = req.params.id
    const updates = req.body
    try{
        const new_data = await requests.findOne({_id})
        updates.forEach((update) => (new_data[update] = req.body[update]))
        await (new_data).save()
        res.status(200).send(new_data)
    } catch(e){
        res.status(500).send(e)
    }
})

// DELETE Route for updating a particular request
router.delete('/request_organ/:id',getHospital,async(req,res)=>{
    const _id = req.params.id
    try{
        const deleted_data = await requests.findOne({_id,hos_id:req.hospital._id})
        await deleted_data.remove()
        res.status(200).send(deleted_data)
    } catch(e){
        res.status(500).send(e)
    }
})

module.exports = router