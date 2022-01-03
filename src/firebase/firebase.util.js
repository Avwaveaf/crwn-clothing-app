import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBit6607f5wsAcNgIajyiBXPpepZUbHT2U",
  authDomain: "crwn-db-10ef8.firebaseapp.com",
  projectId: "crwn-db-10ef8",
  storageBucket: "crwn-db-10ef8.appspot.com",
  messagingSenderId: "312346001592",
  appId: "1:312346001592:web:c5ad17b84b5f2e81d6b44d",
  measurementId: "G-YZWRBSFCD4"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
