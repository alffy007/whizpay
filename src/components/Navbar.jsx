import React from 'react'
import logo1 from '../assets/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='drop-shadow-md px-8 bg-white w-screen font-poppins  flex py-5 justify-between items-center '>
    <img src={logo1} className="w-44" alt="logo" />
    <div className=' cursor-pointer bg-gray-300  hover:bg-[#25D366] ease-in duration-300 px-4 py-2 rounded-3xl hover:text-white text-gray-00 font-semibold'>
       <Link to='/Login'>Login</Link>
    </div>
    </nav>
  )
}

export default Navbar