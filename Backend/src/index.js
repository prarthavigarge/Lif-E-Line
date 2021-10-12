const express = require('express')
require('./db/mongoose')
const {port} = require('../secrets')

const hospitalRouter = require('./routers/hospital')
const organRouter = require('./routers/organ')
const requestsRouter = require('./routers/requests')
const cors = require('cors')

const app = express()


app.use(cors())
app.use(express.json())
app.use(hospitalRouter)
app.use(organRouter)
app.use(requestsRouter)


app.listen(port,()=>{
    console.log("Server is up at port ",port)
})
