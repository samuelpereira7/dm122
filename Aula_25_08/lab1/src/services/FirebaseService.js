import * as firebase from 'firebase';

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

const firebaseRef = firebase.initializeApp(config);

export default firebaseRef.database();