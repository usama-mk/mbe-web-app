import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBk4kGixnBbyeewmI4QC3Z34APvDT-H0bg",
    authDomain: "mbe-web-app.firebaseapp.com",
    databaseURL: "https://mbe-web-app.firebaseio.com",
    projectId: "mbe-web-app",
    storageBucket: "mbe-web-app.appspot.com",
    messagingSenderId: "909007409446",
    appId: "1:909007409446:web:3534cdee9ff37ca7f3b1e7",
    measurementId: "G-S51ZWMVB25"
  };
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const storage= firebase.storage();

  export{storage,db,firebaseApp, firebase as default};