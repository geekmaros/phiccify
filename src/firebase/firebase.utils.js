import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "phiccify-db.firebaseapp.com",
    databaseURL: "https://phiccify-db.firebaseio.com",
    projectId: "phiccify-db",
    storageBucket: "phiccify-db.appspot.com",
    messagingSenderId: "902113502496",
    appId: "1:902113502496:web:aa7ade48e7b444e309a345",
    measurementId: "G-SRGHLJZ3G4"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const Provider = new firebase.auth.GoogleAuthProvider();
Provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(Provider);

export default firebase