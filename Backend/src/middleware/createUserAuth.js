const admin = require('firebase-admin')
require('./firebase')

const createHospitalUser = (req,res,next)=>{
    admin
    .auth()
    .createUser({
        email:req.body.email,
        password: req.body.password,
    })
    .then((userRecord) => {
        console.log(userRecord.email)
    })
    .catch((error) => {
        console.log('Error creating new user:', error);
    });
    next();
}

module.exports = createHospitalUser



