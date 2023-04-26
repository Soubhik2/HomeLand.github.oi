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

document.getElementsByClassName("download-item")[1].addEventListener("click",()=>{
    firebase.database().ref('Download/').on("value", function(snapshot) {
        window.location.href = snapshot.val().linkZip;
    });
});

document.getElementsByClassName("download-item")[0].addEventListener("click",()=>{
    firebase.database().ref('Download/').on("value", function(snapshot) {
        window.location.href = snapshot.val().linkIn;
    });
});