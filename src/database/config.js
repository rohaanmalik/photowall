import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDVlN1ZXcvl80eX9ZGBHtFNFwGslsXnVdU",
    authDomain: "photowall-c614e.firebaseapp.com",
    databaseURL: "https://photowall-c614e.firebaseio.com",
    projectId: "photowall-c614e",
    storageBucket: "photowall-c614e.appspot.com",
    messagingSenderId: "764899154129",
    appId: "1:764899154129:web:0a3e3f055539a302548df0",
    measurementId: "G-E99SP4QFM8"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()

  export {database}