const mongoose = require('mongoose')
const Schema = mongoose.Schema

const organ_accept_Schema = new Schema({
    hos_id:{
        type:Schema.Types.ObjectId,
        ref:"hospital"
    },
    org_id:{
        type:Schema.Types.ObjectId,
        ref:"organ"
    }
})

const organ_accept = mongoose.model('organ_accept',organ_accept_Schema)

module.exports = organ_accept