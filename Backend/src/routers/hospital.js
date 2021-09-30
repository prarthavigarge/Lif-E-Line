const express = require('express')
const hospital = require('../models/hospital')
const mongoose = require('mongoose')

const router=express.Router()

router.post('/hospital',async (req,res)=>{
    const Hospital = new hospital(req.body)
    
    try{
        await Hospital.save()
        res.status(201).send({Hospital})
    } catch(e){
        res.status(400).send(e)
    }
})

module.exports = router