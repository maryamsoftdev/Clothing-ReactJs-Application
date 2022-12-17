import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';


import { auth, createAuthUserWithEmailAndPassword, creatUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import './sign-up-form.style.scss';

const defaultFormFields = {
displayName:'',
email:'',
password:'',
confirmPassword:''
}

const SignUpForm = () =>{
    const [formFields, setFormFields]= useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);

    const resetFormFields = ()=>{
   setFormFields(defaultFormFields);
    }

  const handleSubmit = async (event) =>{
    event.preventDefault();

    if(password!== confirmPassword){
     alert("passwords do not match");
     return;
    }

    try{
     const {user} = await createAuthUserWithEmailAndPassword(email, password);
    
     await creatUserDocumentFromAuth(user,{displayName});

     resetFormFields();



    }catch(error){
      if(error.code== 'auth/email-already-in-use'){

        alert('cannot creat user, email already in use');
     } else{


         console.log('user creation encountered an error', error);
     }


    }


  };



    const handleChange = (event) =>{

        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});



    };


return (
  <div className="sign-up-container">
    <h2>Don't have an account?</h2>
    <span>sign up with your email and passward </span>
    <form onSubmit={handleSubmit}>
      <label>Display Name</label>
      <FormInput
        label="Display Name"
        type="text"
        required
        onChange={handleChange}
        name="displayName"
        value={displayName}
      />

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

      <label>Confirm Password</label>
      <FormInput
        label="confirmPassword"
        type="password"
        required
        onChange={handleChange}
        name="confirmPassword"
        value={confirmPassword}
      />

      <Button type='submit'>
        Sign Up
        </Button>
    </form>
  </div>
);

};
export default SignUpForm;