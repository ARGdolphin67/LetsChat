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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
