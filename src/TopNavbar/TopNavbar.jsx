import React, { useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { GrCatalog } from "react-icons/gr";
import { ImCart } from "react-icons/im";
import { MdOutlineMenuBook } from "react-icons/md";
import { RiLoginBoxFill } from "react-icons/ri";
import SignInSignUp from './SignInSignUp';
import { useNavigate } from 'react-router-dom';


const TopNavbar = () => {
  const [login,setLogin] = useState(null);
  const [cartDisplay,setCartDisplay] = useState(false);
  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault();
    setLogin(true);
  }
  function handleClose(){
    // e.preventDefault();
    setLogin(false);
  }
  function handleCart(){
    // e.preventDefault();
    navigate('/cart', { replace: true });
  }
  
  return (
    <>
      <div className='flex justify-evenly mt-6 pl-10 pb-4 border-b-2 border-gray-600 w-full'>
        <div className='flex justify-start items-start text-white w-full'>
          <div className='rounded-full bg-white text-black text-[30px] p-2 object-cover overflow-hidden'>
            <MdOutlineMenuBook />
          </div>
        </div>
        <div className='flex w-full justify-evenly items-center item-center text-[25px] text-white ' id = 'icons-container'>
          <IoHomeOutline  className=' hover:text-gray-600' id='home-icon' onClick={(e)=>{
            e.preventDefault();
            navigate('/')
          }}/>
          {/* <GrCatalog className=' hover:text-gray-600' id='catalog-icon'/> */}
          <ImCart className=' hover:text-gray-600' id='cart-icon' onClick={handleCart}/>

        </div>
        <div className='flex justify-end items-center text-white w-full pr-16 text-[30px]'>
          <div className='hover:text-gray-600 cursor-pointer'>
            <RiLoginBoxFill id = 'login-icon' onClick={handleLogin}/>
          </div>
        </div>
      </div>

      
        {
          login && (<>
            <div className='fixed w-full h-full top-  left-auto z-1'>
              <div className='relative w-full mb-8 bg-[rgba(0,0,0,0.7)]'><button className='absolute right-0 font-bold text-red-800 pr-4 ' onClick={handleClose}>X</button></div>
              <SignInSignUp/>
            </div>
          </>)
        }
      
    </>
  )
}

export default TopNavbar;