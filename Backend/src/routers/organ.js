const express = require('express')
const organ = require('../models/organ')
const mongoose = require('mongoose')
const checkUser = require('../middleware/checkUser')
const getHospital = require('../middleware/getHospital')

const router = express.Router()

// POST Route to create an organ profile
router.post('/organ',checkUser,getHospital,async(req,res)=>{
    req.body.hos_id=req.hospital._id
    const Organ = new organ(req.body)
    try{
        await Organ.save()
        res.status(201).send({Organ})
    } catch(e){
        res.status(500).send(e)
    }
})

// GET Route to get all the organs associated to the hospital
router.get('/organ',checkUser,getHospital,async(req,res)=>{
    const hos_id = req.hospital._id
    try{
        const new_data= await organ.find({hos_id}).populate("hos_id","name")
        res.send(new_data)
    } catch(e){
        res.status(500).send()
    }
})

// GET Route to get a particular organ
router.get('/organ/:id',checkUser,async(req,res)=>{
    const _id = req.params.id
    try{
        const organ_data = await organ.find({_id})
        res.status(200).send(organ_data)
    } catch(e){
        res.status(500).send(e)
    }
})

// DELETE Route to delete a particular organ
router.delete('/organ/:id',checkUser,async(req,res)=>{
    const _id = req.params.id
    try{
        const organ_data = await organ.findOneAndDelete({_id})
        res.status(200).send(organ_data)
    } catch(e){
        res.status(500).send(e)
    }
})

// PATCH Route to edit a particular organ
router.patch('/organ/:id',checkUser,async(req,res)=>{
    const _id = req.params.id
    const updates = req.body
    if(updates.hos_id){
        return res.status(500).send({error:"Cannot Change Hospital Id"})
    }
    try{
        const updated_value = await organ.findOneAndUpdate({_id},updates,{new:true})
        res.status(200).send(updated_value)
    } catch(e){
        res.status(200).send(e)
    }
})


module.exports = router