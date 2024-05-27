// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBgSWsWK1syoHb24PztXxCFPZFplWioKt0",
    authDomain: "yt-clone-123.firebaseapp.com",
    projectId: "yt-clone-123",
    storageBucket: "yt-clone-123.appspot.com",
    messagingSenderId: "1065244852122",
    appId: "1:1065244852122:web:f931d704017f9429544423",
    measurementId: "G-7Z95JYEZVF"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.auth()