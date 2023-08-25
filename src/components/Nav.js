import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Btn from '../components/Btn.js';

const Nav = (handleAddProduct) => {


  let [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className='shadow-md fixed top-0 left-0 ' style={{ "width": "100vw" }}>
        <div className='md:flex h-24 items-center justify-between bg-violet-300  md:bg-violet-300 sm:bg-violet-300 lg:bg-violet-300 py-4 md:px-10 px-7'>
          <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800 '>

            <span className='text-3xl text-indigo-600 mr-1 pt-2'>
              <ion-icon name="logo-ionic"></ion-icon>
            </span>

            <Link to="/">
              SHOPME
            </Link>

          </div>
          <div onClick={() => setOpen(!open)} className='absolute text-3xl right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>
          <ul className={`md:flex font-semibold md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0 bg-violet-300 mt-0`}>

            <li className='md:ml-8 text-xl md:my-0 my-7 '><Link className={`text-gray-800 hover:text-gray-400 duration-500 ${location.pathname === '/' ? 'text-indigo-600' : 'text-gray-800 hover:text-gray-400 w-10 underline-offset-8'} `} to="/" handleAddProduct={handleAddProduct}>Home</Link></li>

            <li className='md:ml-8 text-xl md:my-0 my-7'><Link className={`text-gray-800 hover:text-gray-400 duration-500 ${location.pathname === '/shop' ? 'text-indigo-600' : 'text-gray-800 hover:text-gray-400'}`} to="/shop">Shop</Link></li>

            <li className='md:ml-8 text-xl md:my-0 my-7'><Link className={`text-gray-800 hover:text-gray-400 duration-500 ${location.pathname === '/about' ? 'text-indigo-600' : 'text-gray-800 hover:text-gray-400'}`} to="/about">About</Link></li>

            <li className='md:ml-8 text-xl md:my-0 my-7'><Link className={`text-gray-800 hover:text-gray-400 duration-500 ${location.pathname === '/contact' ? 'text-indigo-600' : 'text-gray-800 hover:text-gray-400'}`} to="/contact">Contact</Link></li>

            <li className='md:ml-8 text-xl md:my-0 my-7'><Link className={`text-gray-800 hover:text-gray-400 duration-500 ${location.pathname === '/cart' ? 'text-indigo-600' : 'text-gray-800 hover:text-gray-400 mr-4'}`} to="/cart" handleAddProduct={handleAddProduct}><i className="fa-solid fa-cart-shopping"></i></Link></li>



            <Btn>
              Log In
            </Btn>

          </ul>



        </div>


      </div>

    </>

  );
}

export default Nav;


