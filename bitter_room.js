var firebaseConfig = {
  apiKey: "AIzaSyAsDPNONYkUNm1_IrhZmuRSupL2OG3Iiok",
  authDomain: "bitterproto.firebaseapp.com",
  projectId: "bitterproto",
  storageBucket: "bitterproto.appspot.com",
  messagingSenderId: "937835430285",
  databaseURL: "https://bitterproto-default-rtdb.firebaseio.com",
  appId: "1:937835430285:web:7c4cc6a94c89b355b57dc4"
};

firebase.initializeApp(firebaseConfig)

userName = localStorage.getItem("user_name");
document.getElementById('user_name').innerHTML = "Hello " + userName + '!';

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log('Room Name - ' + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById('output').innerHTML += row;
      //End code
    });
  });
}
getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref('/').child(room_name).update({ purpose: 'adding room name' });

  localStorage.setItem("room_name", room_name);

  window.location = 'bitter_page.html';
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem('room_name', name);
  window.location = "bitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem('room_name');
  window.location = 'index.html';
}