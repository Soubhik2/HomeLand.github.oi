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

var isLogin = false;

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        isLogin = true;
    } else {
        isLogin = false;
    }
});

function DownLoad(){
    if (isLogin) {
        window.location.href = "DownLoad.html";
    }else{
        window.location.href = "SignIn.html";
    }
}