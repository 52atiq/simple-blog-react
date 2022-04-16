import React from 'react';
import  { useState } from 'react';
import google from '../../Assets/google.png'
import {  createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import {auth} from '../../Firebase/Firebase.init'


const provider = new GoogleAuthProvider();


const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [confirmPassword, setConfirmPassword] = useState({value: "", error: ""})

    console.log(email)
    // console.log(password)
    // console.log(confirmPassword)

    const googleAuth = () =>{
     signInWithPopup(auth, provider)
     .then((result) => {
      
       const user = result.user;
      console.log(user);
      navigate('/')
     }).catch((error) => { 
      const errorMessage = error.message;
      console.log(errorMessage);
      
     });

    }
  //handle email, password, confirmpassword 
  const handleEmail = (emailInput) => {
    if (/\S+@\S+\.\S+/.test(emailInput)) {
      setEmail({ value: emailInput, error: "" });
    } else {
      setEmail({ value: "", error: "Please Provide a valid Email" });
    }
   
  };

    const handlePassword = (passwordInput) =>{
        if(passwordInput.length <7) {
            setPassword( {value: '' , error: 'password to short'});
        } else {
            setPassword({value:passwordInput, error:''})
        }
       
    }
    const handleConfirmPassword = (confirmPasswordInput) =>{
        setConfirmPassword(confirmPasswordInput);
    }
    

    // for User Create 
    const handleSignup =(event) =>{
        event.preventDefault();
        const email =event.target.email.value;
        const password = event.target.password.value;

         createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage);
        });

        
    }
  

    return (
        <div className='grid  w-[500px] mx-auto border-2 p-8'>
            <h2 className='flex justify-center mb-3 text-2xl '>Sign Up</h2>

           <form  onSubmit={handleSignup}>
           <div className='grid'>
                
                <input className='border-2 p-2 mb-3' type="email" name="email" id=""  placeholder='Email'
                onBlur={(event) => handleEmail(event.target.value)}   />
               {email?.error && <p className='text-red-500 mb-2 '> {email.error} </p>}
                <input className='border-2 p-2 mb-3' type="password" name="password" id="" placeholder='Password' onBlur={ (event) => handlePassword(event.target.value)} />
                {password.error &&  <p className='text-red-500 mb-2'>{password.error}</p>}
                <input className='border-2 p-2 mb-3' type="password" name="confirmPassword" id="" placeholder='Confirm Password' onBlur={(event) => handleConfirmPassword(event.target.value)}  />
            </div>
            <button style={{text:'center'}} className='bg-yellow-400 w-[450px]  ' type="submit"> Sign Up</button>
           </form>

            <p className='text-blue-700' onClick={() => navigate('/login')} > Login</p>
            <div className='flex justify-center mt-4'>
           <div style={{height: '1px'}} className='h-1 bg-black w-40 mt-4'></div>
               <p className='px-4'> or </p>
            <div style={{height: '1px'}} className='h-1 bg-black w-40 mt-4'></div>
           </div>

           


           <button  className=" border-2 mt-4 bg-yellow-400 " onClick={googleAuth} >
             Google Sign In
          </button>
           
        </div>
        
        
    );
};

export default Signup;