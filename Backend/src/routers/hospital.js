const express = require('express')
const hospital = require('../models/hospital')
const mongoose = require('mongoose')
const checkUser = require('../middleware/checkUser')

const router=express.Router()

// POST Route to create Hospital and save in the database
router.post('/hospital',checkUser,async (req,res)=>{
    req.body.email = req.user.email
    // console.log(req.email)
    const Hospital = new hospital(req.body)
    res.send(req.user)
    try{
        await Hospital.save()
        res.status(201).send({Hospital})
    } catch(e){
        res.status(400).send(e)
    }
})

router.post('/hospital/login',checkUser,async (req,res)=>{
    try{
        const Hospital = await hospital.findOne({email:req.user.email})
        res.status(200).send({Hospital})
    } catch(e){
        res.status(500).send(e)
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
router.patch('/hospital/me',checkUser,async(req,res)=>{
    const updates = req.body
    if(updates.email){
       return res.status(500).send({error:"Error! Cannot change EmailID "}) 
    }
    try{
        const hospital_data = await hospital.findOneAndUpdate({email:req.user.email},updates,{new:true})
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