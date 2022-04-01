import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="row2 ">
    <nav className="flex bg-blue-400 py-5 justify-between ">
      <ul className="flex mx-auto ">
        <li className="pr-10 text-lg "><NavLink className="hover:text-blue-600 p-5 text-white  font-bold" to="/">Trang chủ</NavLink></li>
        <li className="pr-10 text-lg"><NavLink  className="hover:text-blue-600 p-5 text-white  font-bold" to="/product">Sản phẩm</NavLink></li>
        <li className="pr-10 text-lg"><NavLink  className="hover:text-blue-600 p-5 text-white  font-bold" to="/about">About</NavLink></li>
        <li className="pr-10 text-lg"><NavLink  className="hover:text-blue-600 p-5 text-white  font-bold" to="/contact">Liên hệ</NavLink></li>
        <li className="pr-10 text-lg"><NavLink  className="hover:text-blue-600 p-5 text-white  font-bold" to="/cart">Giỏ hàng</NavLink></li>
      </ul>
    </nav>
  </div>
  )
}

export default Navbar