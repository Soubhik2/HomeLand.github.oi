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

document.getElementsByTagName('input')[4].addEventListener('click', ()=>{
    if (document.getElementsByTagName('input')[1].value.length >= 10) {
        document.getElementsByClassName('Error-class')[0].style.display = 'none'
        firebase.auth().createUserWithEmailAndPassword(document.getElementsByTagName('input')[2].value, document.getElementsByTagName('input')[3].value)
        .then((userCredential) => {
            // Signed in 
            document.getElementsByClassName('Error-class')[0].style.display = 'none'
            var user = userCredential.user;
            console.log("User Id : "+auth.currentUser.uid);

            firebase.database().ref('Users/' + auth.currentUser.uid).set({
                userName: document.getElementsByTagName('input')[0].value,
                emailId: document.getElementsByTagName('input')[2].value,
                passWord: document.getElementsByTagName('input')[3].value,
                userId: auth.currentUser.uid,
                phoneNumber: document.getElementsByTagName('input')[1].value,
                DownLoad: 0,
                AccountCreateTime: new Date().getTime(),
            }).then(() => {
                 window.location.href = "index.html"
                document.getElementsByClassName('Error-class')[0].innerHTML = 'Account creat successful'
                document.getElementsByClassName('Error-class')[0].style.display = 'block'
            });

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.error(errorMessage);
            console.error(errorCode);

            document.getElementsByClassName('Error-class')[0].innerHTML = errorMessage
            document.getElementsByClassName('Error-class')[0].style.display = 'block'
        });
        
    } else {
        document.getElementsByClassName('Error-class')[0].innerHTML = 'The phone is badly formatted.'
        document.getElementsByClassName('Error-class')[0].style.display = 'block'
    }
})