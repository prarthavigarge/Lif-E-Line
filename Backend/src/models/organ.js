const mongoose = require('mongoose')
const Schema = mongoose.Schema

const organ_Schema = new Schema({
    hos_id:{
        type:Schema.Types.ObjectId,
        ref:"hospital",
        immutable:true
    },
    donor_name:{    
        type:String,
        required:true
    },
    donor_age:{
        type:Number,
        required:true,
        validate(value){
            if(value<0){
                throw new Error("INVALID AGE")
            }
        }
    },
    organ:{
        type:String,
        required:true,
        immutable:true
    },
    blood_group:{
        type:String,
        required:true,
        immutable:true
    },
    condition:{
        type:String,
        enum:['NEW','OLD','GOOD','BAD'],
        required:true
    },
    status:{
        type:String,
        enum:['AVAILABLE','NOTAVAILABLE'],
        required:true
    }
})

const organ = mongoose.model('organ',organ_Schema)

module.exports = organ