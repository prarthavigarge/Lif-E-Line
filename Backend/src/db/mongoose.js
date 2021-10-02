const mongoose = require('mongoose')
const {mongo_connection} = require('../../secrets')
const hospital = require('../models/hospital')
const organ = require('../models/organ')
const requests = require('../models/requests')
const organ_accept = require('../models/organ_accept')

// Connecting to mongo atlas database
mongoose.connect(mongo_connection,{
    useNewUrlParser:true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
}, async()=>{
    await hospital.init()
    await organ.init()
    await requests.init()
    await organ_accept.init()
})