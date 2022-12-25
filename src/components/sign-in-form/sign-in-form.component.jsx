import { useState} from "react";

import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';

// import { UserContext } from "../../contexts/user.context";

import {
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import './sign-in-form.style.scss';

const defaultFormFields = {
email:'',
password:'',
}

const SignInForm = () =>{
    const [formFields, setFormFields]= useState(defaultFormFields);
    const {email, password} = formFields;


// const{setCurrentUser}= useContext(UserContext);


    const resetFormFields = ()=>{
   setFormFields(defaultFormFields);
    };
    const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    //  setCurrentUser(user);
    
    }; 

  const handleSubmit = async (event) =>{
    event.preventDefault();

  

    try{ 
      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
    
     
    //  setCurrentUser(user);


      resetFormFields();



    }catch(error){
      switch(error.code){
  case 'auth/wrong-password':
   alert('incorrect password for email')
        break;
        case 'auth/user-not-fond':
          alert('no user associated with this email');
          break;
          default:
            console.log(error)
      }
     
        }
  };



    const handleChange = (event) =>{

        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});



    };


return (
  <div className="sign-up-container">
    <h2>Already have an account?</h2>
    <span>sign in with your email and passward </span>
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <FormInput
        label="email"
        type="email"
        required
        onChange={handleChange}
        name="email"
        value={email}
      />

      <label>Password</label>
      <FormInput
        label="password"
        type="password"
        required
        onChange={handleChange}
        name="password"
        value={password}
      />
   
   <div className='buttons-container'>

      <Button type="submit">Sign In</Button>
      <Button type= 'button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
</div>
    </form>
  </div>
);

};
export default SignInForm;