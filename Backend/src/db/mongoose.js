const mongoose = require('mongoose')
const {mongo_connection} = require('../../secrets')

// Connecting to mongo atlas database
mongoose.connect(mongo_connection,{
    useNewUrlParser:true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
})