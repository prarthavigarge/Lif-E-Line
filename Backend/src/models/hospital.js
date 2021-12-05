const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')

const hospital_schema = new Schema({
    license_no:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        validate(value){
            if(!(validator.isAlphanumeric(value)) || (value.length<9)){
                throw new Error("INVAILD LICENSE NO")
            }
        }
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!(validator.isEmail(value))){
                throw new Error("INVALID EMAIL!")
            }
        }
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