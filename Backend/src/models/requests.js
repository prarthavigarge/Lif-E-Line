const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requests_Schema = new Schema({
    hos_id:{
        type:Schema.Types.ObjectId,
        ref:'hospital',
        immutable:true
    },
    patient_name:{
        type:String,
        required:true
    },
    patient_age:{
        type:Number,
        required:true,
        validate(value){
            if(value<0){
                throw new Error("INVALID AGE")
            }
        }
    },
    blood_group:{
        type:String,
        required:true
    },
    organ:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["OPEN","CLOSE"],
        default:"OPEN"
    }
})

const requests = mongoose.model("requests",requests_Schema)

module.exports = requests