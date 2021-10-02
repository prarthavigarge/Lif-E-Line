const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requests_Schema = new Schema({
    hos_id:{
        type:Schema.Types.ObjectId,
        ref:'hospital'
    },
    patient_name:{
        type:String,
        required:true
    },
    patient_age:{
        type:Number,
        required:true
    },
    blood_group:{
        type:String,
        required:true
    },
    organ:{
        type:String,
        required:true
    }
})

const requests = mongoose.model("requests",requests_Schema)

module.exports = requests