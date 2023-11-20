import React from 'react'
import logo from './../assets/Home/logo.png'
import menu from './../assets/Home/menu-line-horizontal.svg'
import searchnav from './../assets/Home/search-02.svg'
import bag from './../assets/Home/shopping-bag.svg'
import user from './../assets/Home/user-circle.svg'
import SidebarMenu from './SidebarMenu'
import { useSidebarMenu } from '../context/sidebarMenuContext'
import { Link, useLocation, NavLink } from 'react-router-dom'

function Nav() {
  const { menuOpen, toggleMenuOpen } = useSidebarMenu();

  const { pathname: location } = useLocation()

    const activeLink = "text-[#141718] hover:text-[#141718] font-semibold drop-shadow-sm";
    const inactiveLink = "text-[#6C7275] hover:text-[#141718] font-semibold drop-shadow-sm";;

 
  
  return (
    <nav className='px-8 md:px-40 py-5 flex justify-between items-center gap-2'>
        { menuOpen && <SidebarMenu />}
        <div className='flex justify-start gap-2'>
            <img src={menu} onClick={toggleMenuOpen} className='lg:hidden' />
            <img src={logo} />
        </div>
        
        <div className='hidden lg:flex gap-10'>
            <NavLink to={'/'} className={`${location == '/' ? activeLink : inactiveLink}`}>Home</NavLink>
            <NavLink to={'/shop'} className={`${location == '/shop' ? activeLink : inactiveLink}`}>Shop</NavLink>
            <NavLink to={'/shop'} className={`${location == '/product' ? activeLink : inactiveLink}`}>Product</NavLink>
            <NavLink to={'/shop'} className={`${location == '/contactus' ? activeLink : inactiveLink}`}>Contact Us</NavLink>
        </div>
        <div className='flex gap-5'>
            <img className='hidden lg:block' src={searchnav} />
            <img className='hidden lg:block' src={user} />
            <p className='flex gap-2'>
                <img src={bag} />
                <span className=' flex justify-center items-center bg-black rounded-full text-white text-sm w-6 h-6'>2</span>
            </p>
        </div>
    </nav>
  )
}

export default Nav