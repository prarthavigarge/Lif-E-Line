const express = require('express')
const organ = require('../models/organ')
const checkUser = require('../middleware/checkUser')
const getHospital = require('../middleware/getHospital')

const router = express.Router()

// POST Route to create an organ profile
router.post('/organ',checkUser,getHospital,async(req,res)=>{
    req.body.hos_id=req.hospital._id
    const Organ = new organ(req.body)
    try{
        await Organ.save()
        res.status(201).send(Organ)
    } catch(e){
        res.status(500).send(e)
    }
})

// GET Route to get all the organs associated to the hospital
router.get('/organ/me',checkUser,getHospital,async(req,res)=>{
    const hos_id = req.hospital._id
    try{
        const new_data= await organ.find({hos_id}).populate("hos_id","name")
        res.send(new_data)
    } catch(e){
        res.status(500).send()
    }
})

// GET Route to get all the organs associated to any hospitals
router.get('/organ',checkUser,async(req,res)=>{
    const organ_data = await organ.find({})
    res.send(organ_data)
})

// DELETE Route to delete a particular organ
router.delete('/organ/:id',checkUser,async(req,res)=>{
    const _id = req.params.id
    try{
        const organ_data = await organ.findOne({_id})
        await organ_data.remove()
        res.status(200).send(organ_data)
    } catch(e){
        res.status(500).send(e)
    }
})

// PATCH Route to edit a particular organ
router.patch('/organ/:id',checkUser,async(req,res)=>{
    const _id = req.params.id
    const updates = req.body
    try{
        const organ_data = await organ.findOne({_id})
        const updates = Object.keys(req.body)
        updates.forEach((update) => (organ_data[update] = req.body[update]))
        await organ_data.save()
        res.send(organ_data)
    } catch(e){
        res.status(200).send(e)
    }
})


module.exports = router