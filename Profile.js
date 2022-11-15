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

firebase.auth().onAuthStateChanged((user) => {
    //document.getElementsByClassName('loading')[0].style.display = 'block';
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        // ...
        // window.location.href = "Profile.html"
        //document.getElementsByTagName('a')[2].innerHTML = 'Profile'
        console.log(firebase.auth().currentUser.uid);

        firebase.database().ref('Users/' + firebase.auth().currentUser.uid).on("value", function(snapshot) {
            document.getElementsByClassName("card-title")[0].innerText = snapshot.val().userName;
            document.getElementsByClassName("card-text")[0].innerText = snapshot.val().emailId;
            document.getElementsByClassName("card-text")[1].innerText = snapshot.val().phoneNumber;
            document.getElementsByClassName("card-title")[1].innerText = snapshot.val().userId;
        });

    } else {
        // User is signed out
        // ...
        document.getElementsByClassName("card-text")[0].innerText = "You are not Login";
        console.log("NO acc");
        // document.getElementsByClassName('loading')[0].style.display = 'none';
    }
});

document.getElementsByTagName("a")[5].addEventListener("click", ()=>{
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log('Sign-out successful.');
        // console.log('Uid 3' + firebase.auth().currentUser.uid);
    }).catch((error) => {
        // An error happened.
        console.log(error.message);
    });
});

document.getElementsByTagName("a")[6].addEventListener("click", ()=>{
    window.location.href = "SignIn.html";
});
