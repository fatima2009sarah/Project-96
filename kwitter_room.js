
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyATW0Bipq07n9DAN8C6T0t-XVwi9G6mtac",
      authDomain: "kwitter-ae0e6.firebaseapp.com",
      databaseURL: "https://kwitter-ae0e6-default-rtdb.firebaseio.com",
      projectId: "kwitter-ae0e6",
      storageBucket: "kwitter-ae0e6.appspot.com",
      messagingSenderId: "615073158967",
      appId: "1:615073158967:web:42847fe32e21773ee92cb2",
      measurementId: "G-60WBW6JY4Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("")

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
