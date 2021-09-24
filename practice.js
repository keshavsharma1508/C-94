
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDbeqx_SvSPp751tD2MVhbxNIKYtgwF7YU",
    authDomain: "kwitter-573d7.firebaseapp.com",
    projectId: "kwitter-573d7",
    storageBucket: "kwitter-573d7.appspot.com",
    messagingSenderId: "790560111804",
    appId: "1:790560111804:web:f434cc39802d84d08ba4b9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }