var firebaseConfig = {
    apiKey: "AIzaSyBr22DAAWjsUWK84lmdqRh-ljdeHXeVzac",
    authDomain: "kwifreakinpro-lol12345.firebaseapp.com",
    databaseURL: "https://kwifreakinpro-lol12345-default-rtdb.firebaseio.com",
    projectId: "kwifreakinpro-lol12345",
    storageBucket: "kwifreakinpro-lol12345.appspot.com",
    messagingSenderId: "233983416515",
    appId: "1:233983416515:web:762743d9948a5b76d3aa76"
  };

  firebase.initializeApp(firebaseConfig);
function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room"
    });
}
var user_name =localStorage.getItem("usernameofuser");
  document.getElementById("user_name").innerHTML="Welcome   "+ user_name;
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }