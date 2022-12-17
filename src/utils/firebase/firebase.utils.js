import { initializeApp } from "firebase/app";
import{
    getAuth,
    signInWithRedirect,
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword
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

const googleProvider = new GoogleAuthProvider();

 googleProvider.setCustomParameters({
    prompt: "select_account"
 });
 export const auth = getAuth();
 export const signInWithGooglePopup = ()=> signInWithPopup(auth, googleProvider);

 export const signInWithGoogleRedirect = ()=> signInWithRedirect(auth, googleProvider);

 export const db = getFirestore();

export const creatUserDocumentFromAuth = async(userAuth, additionalInformation={})=>{
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
        createdAt,
        ...additionalInformation,
            });
      } catch(error){
        console.log('error creating the user', error.message);
      }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) =>{
 if(!email|| !password) return;

 return await createUserWithEmailAndPassword(auth, email, password);
  
}