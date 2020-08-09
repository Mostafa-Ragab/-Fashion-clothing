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
  

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const {displayName , email} = userAuth;

    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData

      });
    } catch (error) {
      console.log(`error creating user`, error.message);
    }
  }

  return userRef;
}
firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;