// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwEKrNIZl4_ZbFNBdCL2jiyVLf-iil7KU",
    authDomain: "home-land-61250.firebaseapp.com",
    databaseURL: "https://home-land-61250-default-rtdb.firebaseio.com",
    projectId: "home-land-61250",
    storageBucket: "home-land-61250.appspot.com",
    messagingSenderId: "217538402725",
    appId: "1:217538402725:web:f779a5969527008d3e304c",
    measurementId: "G-698WCXR9CD"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementsByTagName("input")[2].addEventListener("click",()=>{
    document.getElementsByTagName("input")[2].value = "Loading..."
    firebase.auth().signInWithEmailAndPassword(document.getElementsByTagName("input")[0].value, document.getElementsByTagName("input")[1].value)
        .then((userCredential) => {
            document.getElementsByTagName("input")[2].value = "Login"
            // Signed in
            var user = userCredential.user;
            // ...
            console.log(auth.currentUser.uid);
            window.location.href = "index.html"
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorMessage);
            console.log(errorCode);
            document.getElementsByTagName("input")[2].value = "Login"
            document.getElementsByClassName('Error-class')[0].style.display = "block"
            document.getElementsByClassName('Error-class')[0].innerHTML = errorMessage
        });

});