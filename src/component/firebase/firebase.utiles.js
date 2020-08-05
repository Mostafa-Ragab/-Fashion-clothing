import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC1nvpZdOIA5tNzW_4lZjNvG97Z6nidJOs",
  authDomain: "crwn-db-270f9.firebaseapp.com",
  databaseURL: "https://crwn-db-270f9.firebaseio.com",
  projectId: "crwn-db-270f9",
  storageBucket: "crwn-db-270f9.appspot.com",
  messagingSenderId: "830172283755",
  appId: "1:830172283755:web:ff0c137324babbe5ebc22e",
  measurementId: "G-EQVPECJBXV"
};
  
firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;