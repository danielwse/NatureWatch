import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBrvePxM0kwC01wUxa-kncvZjHtOaNnvy8",
    authDomain: "naturewatch-4e101.firebaseapp.com",
    projectId: "naturewatch-4e101",
    storageBucket: "naturewatch-4e101.appspot.com",
    messagingSenderId: "131422362530",
    appId: "1:131422362530:web:1a763acf29c0cf173af0fb",
    measurementId: "G-1Y7N6LETYN"
  };

  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;