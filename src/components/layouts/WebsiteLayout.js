import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterIndex from '../FooterIndex'
import HeaderIndex from '../headerIndex'
const WebsiteLayout = () => {
  return (
    <div>
        <header>
            <HeaderIndex/>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <FooterIndex/>
        </footer>
    </div>
  )
}

export default WebsiteLayout