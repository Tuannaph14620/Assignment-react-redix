import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

const HeaderIndex = () => {
  return (
    <header>
      <div className=" flex justify-between px-10 items-center p-5 bg-blue-500">
        <div className="logo w-44 ">
          <NavLink to="/"><img src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1644822377/logo_ea3bvi.png" /></NavLink>
          <p className="pl-5 font-bold text-xl text-white">ManCity Shop</p>
        </div>
        <div className="account">
          <NavLink to="/signin">Sign in</NavLink>
        </div>
      </div>  
      <Navbar/>
    </header>
  )
}

export default HeaderIndex