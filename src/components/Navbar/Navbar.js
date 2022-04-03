import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../Assets/Images/logo-one.png'
const Navbar = () => {

    const {pathname} = useLocation();

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
             <NavLink className={({isActive}) => (isActive ? 'text-red-600' : 'text-green-500')} to='/login'> Login</NavLink>
             
            </div>
        </div>
   </nav>
    );
};

export default Navbar;