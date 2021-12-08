const express = require('express')
const hospital = require('../models/hospital')
const checkUser = require('../middleware/checkUser')
const getHospital = require('../middleware/getHospital')

const router=express.Router()

// POST Route to create Hospital and save in the database
router.post('/hospital',async (req,res)=>{
    const Hospital = new hospital(req.body)
    try{
        await Hospital.save()
        res.status(201).send({Hospital})
    } catch(e){
        res.status(400).send(e)
    }
})

// GET ROUTE for gettig the hospital details
router.post('/hospital/profile',getHospital,async(req,res)=>{
    res.status(201).send(req.hospital)
})

// GET Route to get all hospitals
router.post('/hospital',async(req,res)=>{
    try{
        const hospital_data = await hospital.find({})
        res.status(200).send(hospital_data)
    } catch(e){
        res.status(400).send(e)
    }
})

// PATCH Route for updating hospital
router.patch('/hospital/me',async(req,res)=>{
    const updates = Object.keys(req.body)
    updates.forEach((update) => (req.hospital[update] = req.body[update]))
    await (req.hospital).save()
    res.status(200).send(req.hospital)
})

// DELETE Route for deleting profile
router.delete('/hospital/me',getHospital, async(req,res)=>{
    try{
        await req.hospital.remove()
        res.send(req.hospital)
    } catch(e){
        res.status(400).send(e)
    }
})

module.exports = router