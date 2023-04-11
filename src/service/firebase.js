import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROFECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCHET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.firestore();

export const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(googleProvider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
  };

  export const logOut = () => {
    firebase.auth().signOut()
      .then(() => {
        console.log("logged out");
        document.location.reload();
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
