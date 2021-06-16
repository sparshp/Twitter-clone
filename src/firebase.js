import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBa-yK4xhf9Vfbm0g1Qvp2daMx1aBxAzek",
    authDomain: "twitter-clone-7a185.firebaseapp.com",
    projectId: "twitter-clone-7a185",
    storageBucket: "twitter-clone-7a185.appspot.com",
    messagingSenderId: "664775941623",
    appId: "1:664775941623:web:d328da2abe305d4383e2f2",
    measurementId: "G-MKXFR566J4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;