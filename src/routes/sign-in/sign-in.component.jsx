
import {

  signInWithGooglePopup,
  creatUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = ()=>{

   const logGoogleUser = async () =>{
    const {user} = await signInWithGooglePopup();
    const userDocRef = await creatUserDocumentFromAuth(user);
   }; 
  
   
    return (
      <div>
        <h1>sign In Page</h1>
        <button onClick={logGoogleUser}>sign in with Google Popup</button>
         <SignUpForm />        
      </div>
    );
};
export default SignIn;