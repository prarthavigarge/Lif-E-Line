const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hospital_schema = new Schema({
    license_no:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    building:{
        type:String,
    },
    street:{
        type:String
    },
    city:{
        type:String
    },
    pincode:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    }
})

const hospital = mongoose.model('hospital',hospital_schema)

module.exports = hospital