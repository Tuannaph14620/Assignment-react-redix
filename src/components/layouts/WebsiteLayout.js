import React from 'react'
import { Outlet } from 'react-router-dom'
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
            Footer
        </footer>
    </div>
  )
}

export default WebsiteLayout