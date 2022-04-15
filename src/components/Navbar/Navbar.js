import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../Assets/Images/logo-one.png'
import { auth } from '../../Firebase/Firebase.init';
const Navbar = () => {
    const {pathname} = useLocation();
    const [user, setUser] = useState({});
  
     
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
             console.log(user);
            //   const uid = user.uid;
              // ...
            } else {
              // User is signed out
              setUser({})
            }
          });
    },[]);

    const handleLogOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    return (

    <nav style={pathname.includes('blog')? {display: 'none'}: {display: 'px-20 flex justify-between items-center'}}>
   <div className='px-20 flex justify-between items-center '>
            <div className='' >
           {/* <img className=' flex items-center ' src={Logo} alt="" /> */}
           <img className='w-28' src={Logo} alt="" />
            </div>
            <div className=' text-lg flex gap-3 text-green-500'>
             <NavLink className={({isActive}) => (isActive ? 'text-red-600' : 'text-green-500')} to='/'> Home</NavLink>
             <NavLink className={({isActive}) => (isActive ? 'text-red-600' :'text-green-500' )} to='/videos'> Videos</NavLink>

            { user?.uid ? <button onClick={handleLogOut}> Logout </button> :
                <NavLink className={({isActive}) => (isActive ? 'text-red-600' :'text-green-500')} to='/login'> Login</NavLink>
            }
             {/* <p> {user?.displayName}</p> */}
            </div>
        </div>
   </nav>
    );
};

export default Navbar;