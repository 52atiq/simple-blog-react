import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {auth} from '../../Firebase/Firebase.init'

const provider = new GoogleAuthProvider();

const Login = () => {
    let navigate = useNavigate(); 

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

       const handleLogin = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
    // Signed in 
       const user = userCredential.user;
    // ...
       })
     .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

       }

    return (
        <div className='grid justify-center  mx-auto border-2 w-[500px]' >
            <h2 className='grid justify-center text-2xl mb-4'>Please Login </h2>
            <form onSubmit={handleLogin} >
            <div className=''>
                <input  className='border-2 mb-4 w-96 h-10 p-2 ' type="email" name="email" id="" placeholder='Email' required /> <br />
                <input className='border-2 mb-4 w-96 h-10 p-2' type="password" name="password" id="" placeholder='Password' required /> 
            </div>

            <div className='flex  justify-between mb-10 '>
                <p className='underline cursor-pointer text-blue-500' onClick={() => navigate('/signup')}>  New member? </p>
                <button className='bg-amber-400  h-8 w-40'> Login </button>
            </div>

            </form>
            <button  className=" border-2 mt-4 bg-yellow-400 mb-4 " onClick={googleAuth} >
             Google Sign In
          </button>
          
        </div>
    );
};

export default Login;