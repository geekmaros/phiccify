import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: 'AIzaSyAdGbu8p1k6t8YYnMa-vnXPQCmVwGDnfkY',
    authDomain: "phiccify-db.firebaseapp.com",
    databaseURL: "https://phiccify-db.fireb🙌aseio.com",
    projectId: "phiccify-db",
    storageBucket: "phiccify-db.appspot.com",
    messagingSenderId: "902113502496",
    appId: "1:902113502496:web:aa7ade48e7b444e309a345",
    measurementId: "G-SRGHLJZ3G4"
};

export  const  createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth) return ;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()

    if(!snapshot.exists){
        const {displayName, email} = userAuth
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData

            })
        }catch (e) {
            console.log('error creating user', e.message)
        }
    }
    return  userRef
    console.log(snapshot)

}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const Provider = new firebase.auth.GoogleAuthProvider();
Provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(Provider);

export default firebase