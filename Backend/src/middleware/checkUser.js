const admin = require('firebase-admin')
require("./firebase")

const checkUser = (req, res, next) => {
    
    if (!req.header("Authorization") || req.header("Authorization") == undefined) {
        throw new Error("USER NOT AUTHORISED")
    }    
    const idToken = req.header("Authorization").replace("Bearer ", "");
    console.log("BACKEND\n"+idToken)
    admin
        .auth()
        .verifyIdToken(idToken)
        .then((decodedToken) => {
            req.user=decodedToken
            next()
        })
        .catch((error) => {
            console.log(error)
        });
        
}
module.exports = checkUser




