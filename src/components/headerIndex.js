import { data } from 'autoprefixer'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Logout } from '../features/AuthSlice'

const HeaderIndex = () => {
  const quantityCart = useSelector(data => data.cart.value?.length)
  const isUser = useSelector(data => data.user.value)
  const dispatch = useDispatch()
  console.log("user", isUser.length);

  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <p className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">Miễn phí vận chuyển cho đơn hàng hơn 1.000.000Đ</p>
        <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              <div className="ml-4 flex lg:ml-0">
                <NavLink to="/">
                  <img className="h-8 w-auto" src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1645429633/logo_cnemt5.png" alt />
                </NavLink>
              </div>
              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  <div className="flex">
                    <div className="relative flex">
                      <NavLink to="/product" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Sản phẩm</NavLink></div>
                  </div>
                  <div className="flex">
                    <div className="relative flex">
                      <NavLink to="/new" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Tin tức</NavLink>
                    </div>
                  </div>
                  <NavLink to="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Giới Thiệu</NavLink>
                  <NavLink to="/contact" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Liên hệ</NavLink>
                  {isUser.length === 0 ? "" : <NavLink to="/admin" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Admin</NavLink>}
                </div>
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {isUser.length === 0 ? <NavLink to="/signin" className="text-sm font-medium text-gray-700 hover:text-gray-800">Đăng nhập</NavLink> : <button onClick={() => dispatch(Logout())} className="text-sm font-medium text-gray-700 hover:text-gray-800">Đăng xuất</button>}
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <NavLink to="/signup" className="text-sm font-medium text-gray-700 hover:text-gray-800">Tạo tài khoản</NavLink>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <NavLink to="#" className="text-gray-700 hover:text-gray-800 flex items-center">
                    <img src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649328766/0296c560d12f6bf9010f70ee668b62e3_yzhtdn.jpg" alt className="w-5 h-auto block flex-shrink-0" />
                    <span className="ml-3 block text-sm font-medium"> VIE </span>
                  </NavLink>
                </div>
                {/* Search */}
                <div className="flex lg:ml-6">
                  <NavLink to="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    {/* Heroicon name: outline/search */}
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </NavLink>
                </div>
                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <NavLink to="/cart" className="group -m-2 p-2 flex items-center">
                    {/* Heroicon name: outline/shopping-bag */}
                    <svg className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{quantityCart}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>

  )
}

export default HeaderIndex