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
const signUp = async () => {
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value)
    promise.catch(e => {
        alert(e.message)
    })
    promise.then(async () => {
        alert("Signed Up")
        await auth.currentUser.getIdToken(true).then(async (idToken) => {
            console.log(idToken)
            var req = {
                method: 'POST',
                headers: {
                    Authorization: idToken,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({}),
                // redirect: 'follow'
            };

            await fetch("localhost:3000/hospital", req)
                .then(response => {
                    return response.json()
                })
        }).catch(function (error) {
        });
    })
}



const signOut = () => {
    auth.signOut()
    alert("Signed Out")
}

const signIn = async () => {
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    firebase.auth().currentUser.getIdToken(true).then(async (idToken2) => {
        const promise = auth.signInWithEmailAndPassword(email.value, password.value)
        promise.catch(e => {
            alert(e.message)
        })
        alert("Signed In " + email.value)
        const user = auth.currentUser
        const idToken = auth.currentUser.getIdToken(true)
        alert(user.email)
        console.log(idToken2)
        var req = {
            method: 'POST',
            headers: {
                Authorization: idToken2,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
            // redirect: 'follow'
        };

        await fetch("localhost:3000/hospital/login", req)
            .then(response => {
                return response.json()
            })
            .then(result => {
            })
            .catch(error => {
            });
    }).catch(function (error) {
    });
}






