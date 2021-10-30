var firebaseConfig = {
  apiKey: "AIzaSyBAYz-iGq-XYrK7gZsLGr7xX6rZoxUJ8u8",
  authDomain: "bitter-db35c.firebaseapp.com",
  databaseURL: "https://bitter-db35c-default-rtdb.firebaseio.com",
  projectId: "bitter-db35c",
  storageBucket: "bitter-db35c.appspot.com",
  messagingSenderId: "1020279279545",
  appId: "1:1020279279545:web:5ee2d54e8e72e8ae7f7068"
};

firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("user_name");
document.getElementById('user_name').innerHTML = "Hello " + userName + '!';

function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log('Room Name - ' + Room_names);
      row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById('output').innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref('/').child(room_name).update({purpose: 'adding room name'});

  localStorage.setItem("room_name", room_name);

  window.location = 'bitter_page.html';
}

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem('room_name', name);
  window.location = "bitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem('room_name');
  window.location = 'index.html';
}