import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyArXeCux8x5wRkMz_EL_X5SYZbrXgQqK_8",
  authDomain: "clone-96878.firebaseapp.com",
  databaseURL: "https://clone-96878.firebaseio.com",
  projectId: "clone-96878",
  storageBucket: "clone-96878.appspot.com",
  messagingSenderId: "1040742049486",
  appId: "1:1040742049486:web:f7fea83f3f037d085b929f",
  measurementId: "G-G9S3PBP4C8",
});


const auth = firebase.auth();

export {  auth };
