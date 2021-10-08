const express = require('express')
require('./db/mongoose')
const {port} = require('../secrets')
const hospitalRouter = require('./routers/hospital')
const organRouter = require('./routers/organ')

const app = express()

app.use(express.json())
app.use(hospitalRouter)
app.use(organRouter)

app.listen(port,()=>{
    console.log("Server is up at port ",port)
})
