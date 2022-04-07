
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCaeJswQY_0ZvDwG5Qb8q3j0ojiua1Lgds",
      authDomain: "qitter-e7e07.firebaseapp.com",
      databaseURL: "https://qitter-e7e07-default-rtdb.firebaseio.com",
      projectId: "qitter-e7e07",
      storageBucket: "qitter-e7e07.appspot.com",
      messagingSenderId: "341574818314",
      appId: "1:341574818314:web:9bff111ba24b38db409df3"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
