const admin = require('firebase-admin')
const {type,project_id,private_key_id,private_key,client_email,client_id,auth_uri,token_uri,auth_provider_x509_cert_url,client_x509_cert_url} = require('../../secrets')
var serviceAccount = {
    type,
    project_id,
    private_key_id,
    private_key,
    client_email,
    client_id,
    auth_uri,
    token_uri,
    auth_provider_x509_cert_url,
    client_x509_cert_url
  }
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


const createHospitalUser = (req,res,next)=>{
    admin
    .auth()
    .createUser({
        email:req.body.email,
        password: req.body.password,
    })
    .then((userRecord) => {
        console.log('Successfully created new user:', userRecord.uid);
    })
    .catch((error) => {
        console.log('Error creating new user:', error);
    });
    next();
}

module.exports = createHospitalUser



