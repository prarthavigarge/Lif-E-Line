const firebaseConfig = {
    apiKey: "AIzaSyB2xXL0IWA1U3t9wZmEiYxPxv2Ehr8ZzyM",
    authDomain: "lif-e-line.firebaseapp.com",
    projectId: "lif-e-line",
    storageBucket: "lif-e-line.appspot.com",
    messagingSenderId: "931056068978",
    appId: "1:931056068978:web:329e39360388d463d515eb",
    measurementId: "G-90MREKP27E"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const signUp = ()=>{
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value)
    promise.catch(e => {
        alert(e.message)
    })
    alert("Signed Up")
}



