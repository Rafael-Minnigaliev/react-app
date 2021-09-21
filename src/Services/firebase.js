import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCr7MMtBC7gwwALV1WiJzBY3iNDkj5tZ4c",
  authDomain: "my-react-app-a4a39.firebaseapp.com",
  databaseURL: "https://my-react-app-a4a39-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-react-app-a4a39",
  storageBucket: "my-react-app-a4a39.appspot.com",
  messagingSenderId: "196370312030",
  appId: "1:196370312030:web:5e087ddeb4a2da45f13dcf",
  measurementId: "G-XK15X8CD78",
};

firebase.initializeApp(firebaseConfig);
