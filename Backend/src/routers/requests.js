const express = require('express')
const requests = require('../models/requests')
const checkUser = require('../middleware/checkUser')
const getHospital = require('../middleware/getHospital')

const router = express.Router()

// POST Route for creating a requests
router.post('/request_organ',checkUser,getHospital,async(req,res)=>{
    req.body.hos_id = req.hospital._id
    const Request = new requests(req.body)
    try{
        await Request.save()
        res.status(200).send(Request)
    } catch(e){
        res.status(500).send(e)
    }
})

// GET Route for getting all Requests
router.get('/request_organ',checkUser,getHospital,async(req,res)=>{
    const hos_id = req.hospital._id
    try{
        const Requests = await requests.find({hos_id}).populate("hospital","name")
        res.status(200).send(Requests)
    } catch(e){
        res.status(500).send(e)
    }
})

// PATCH Route to update a particular request
router.patch('/request_organ/:id',checkUser,async(req,res)=>{
    const _id = req.params.id
    const updates = req.body
    if(updates.hos_id){
        return res.status(500).send({error:"Cannot change Hospital ID"})
    }
    try{
        const new_data = await requests.findOneAndUpdate({_id},req.body,{new:true})
        res.status(200).send(new_data)
    } catch(e){
        res.status(500).send(e)
    }
})

// DELETE Route for updating a particular request
router.delete('/request_organ/:id',checkUser,async(req,res)=>{
    const _id = req.params.id
    try{
        const deleted_data = await requests.findOneAndDelete({_id})
        res.status(200).send(deleted_data)
    } catch(e){
        res.status(500).send(e)
    }
})


module.exports = router