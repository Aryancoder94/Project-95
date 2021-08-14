
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDWosowIqcN4lCDstHRnbGSWpqFHVcHn3Y",
    authDomain: "kwitter-app-d1f44.firebaseapp.com",
    databaseURL: "https://kwitter-app-d1f44-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-d1f44",
    storageBucket: "kwitter-app-d1f44.appspot.com",
    messagingSenderId: "541086144028",
    appId: "1:541086144028:web:eeccc39d957a165d8db1d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function addRoom() {
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot)
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room Name-"+room_name);
    row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
      //End code
      });
    });
  }
getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");

  window.location="kwitter.html"
}
