import React from 'react';

const Login = () => {
    return (
        <div className=' flex justify-center align-items-center'>
            <h2>Login</h2>
            <div> 
                <p>Email:  </p>
                    <input className='bg-green-500' type="text" />
                   
            </div>
            <div className='flex mt-10'>
                <p>Password: </p>
                <input className='bg-green-500' type="password" name="" id="" /> 
            </div>
        </div>
    );
};

export default Login;