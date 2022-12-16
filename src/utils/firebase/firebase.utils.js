import { initializeApp } from "firebase/app";
import{
    getAuth,
    signInWithRedirect,
    signInWithPopup, 
    GoogleAuthProvider,
} from 'firebase/auth';

import{
getFirestore,
doc,
getDoc,
setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCFMdj1LtjGnNxVrgG_RSCuZwf4VAnpFCc",
  authDomain: "crown-clothing-db-9c004.firebaseapp.com",
  projectId: "crown-clothing-db-9c004",
  storageBucket: "crown-clothing-db-9c004.appspot.com",
  messagingSenderId: "755032539356",
  appId: "1:755032539356:web:83282afcce95929f0fb419"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

 provider.setCustomParameters({
    prompt: "select_account"
 });
 export const auth = getAuth();
 export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);

 export const db = getFirestore();

export const creatUserDocumentFromAuth = async(userAuth)=>{
    const userDocRef = doc(db, 'user', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
      const {displayName, email } = userAuth;
      const createdAt = new Date();

      try{
       await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
            });
      } catch(error){
        console.log('error creating the user', error.message);
      }
    }
    return userDocRef;
};