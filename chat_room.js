var firebaseConfig = {
      apiKey: "AIzaSyDcgahiykp4c273xivP84IQlmeqB0y3yRY",
      authDomain: "letschat-73528.firebaseapp.com",
      databaseURL: "https://letschat-73528-default-rtdb.firebaseio.com",
      projectId: "letschat-73528",
      storageBucket: "letschat-73528.appspot.com",
      messagingSenderId: "895431128010",
      appId: "1:895431128010:web:f317773bb02d3991151533"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + username + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name-", +Room_names);
                  row = "<div class='room_name' id='+Room_names+' onclick='rederectToRoomName(this.id)'># " + Room_names + " </div> <hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "chat_page.html";
}

function rederectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}
