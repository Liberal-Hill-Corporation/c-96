var firebaseConfig = {
    apiKey: "AIzaSyDUoi7e8NPslEQtKXWKsDZjBt_bSfbx3a8",
    authDomain: "kwitter-app-176d9.firebaseapp.com",
    databaseURL: "https://kwitter-app-176d9-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-176d9",
    storageBucket: "kwitter-app-176d9.appspot.com",
    messagingSenderId: "223964622926",
    appId: "1:223964622926:web:96910566db031ab463931f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
     like:0     
    });
    document.getElementById("msg").value = "";
}