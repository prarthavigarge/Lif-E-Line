const express = require('express')
const hospital = require('../models/hospital')
const mongoose = require('mongoose')
const checkUser = require('../middleware/checkUser')

const router=express.Router()

// POST Route to create Hospital
router.post('/hospital',checkUser,async (req,res)=>{
    req.body.email = req.email
    // console.log(req.email)
    const Hospital = new hospital(req.body)
    // console.log(createHospitalUser)
    try{
        await Hospital.save()
        res.status(201).send({Hospital})
    } catch(e){
        res.status(400).send(e)
    }
})

// GET Route to get all hospitals
router.get('/hospital',async(req,res)=>{
    try{
        const hospital_data = await hospital.find({})
        res.status(200).send(hospital_data)
    } catch(e){
        res.status(400).send(e)
    }
})

// GET Route for getting a single hospital
router.get('/hospital/:id',async(req,res)=>{
    const _id = req.params.id
    try{
        const hospital_data = await hospital.findOne({_id})
        res.status(200).send(hospital_data)
    } catch(e){
        res.status(400).send(e)
    }
})

// PATCH Route for updating hospital
router.patch('/hospital/:id',async(req,res)=>{
    const updates = req.body
    const _id = req.params.id
    try{
        const hospital_data = await hospital.findOneAndUpdate({_id},updates,{new:true})
        res.status(200).send(hospital_data) 
    } catch(e){
        res.status(500).send(e)
    }
})

// DELETE Route for deleting profile
router.delete('/hospital/:id',async(req,res)=>{
    const _id = req.params.id
    try{
        const hospital_data = await hospital.findOneAndDelete({_id})
        res.status(200).send(hospital_data)
    } catch(e){
        res.status(500).send(e)
    }
})


module.exports = router