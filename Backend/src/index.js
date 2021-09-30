const express = require('express')
require('./db/mongoose')
const {port} = require('./secrets')
const hospitalRouter = require('./routers/hospital')

const app = express()

app.use(express.json())
app.use(hospitalRouter)

app.listen(port,()=>{
    console.log("Server is up at port ",port)
})
