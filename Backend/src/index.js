const express = require('express')
require('./db/mongoose')
require('express-async-errors')
const {port} = require('../secrets')

const hospitalRouter = require('./routers/hospital')
const organRouter = require('./routers/organ')
const requestsRouter = require('./routers/requests')
const organ_acceptRouter = require('./routers/organ_accept')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(hospitalRouter)
app.use(organRouter)
app.use(requestsRouter)
app.use(organ_acceptRouter)

app.use(function (err, req, res, next) {
    if (err.message) {
        res.status(500).send(err.message)
    } else {
        res.status(500).send(err.stack)    
    }
})

app.listen(port,()=>{
    console.log("Server is up at port ",port)
})
