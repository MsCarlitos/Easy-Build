import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAYu6w8ccneFU_wuobtlbZXCJfijHXJiSw",
    authDomain: "easybuild-4636f.firebaseapp.com",
    databaseURL: "https://easybuild-4636f.firebaseio.com/",
    projectId: "easybuild-4636f",
    storageBucket: "easybuild-4636f.appspot.com",
    messagingSenderId: "413293924102",
    appId: "1:413293924102:web:17c95eee4fa3df98421887",
    measurementId: "G-QRK0N9MWV8"
  };

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
export default firebase