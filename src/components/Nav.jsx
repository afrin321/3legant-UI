import React from 'react'
import logo from './../assets/Home/logo.png'
import menu from './../assets/Home/menu-line-horizontal.svg'
import searchnav from './../assets/Home/search-02.svg'
import bag from './../assets/Home/shopping-bag.svg'
import user from './../assets/Home/user-circle.svg'

function Nav() {
  return (
    <nav className='px-8 md:px-40 py-5 flex justify-between items-center gap-2'>
        <div className='flex justify-start gap-2'>
            <img src={menu} className='lg:hidden' />
            <img src={logo} />
        </div>
        
        <div className='hidden lg:flex gap-10'>
            <span className='text-[#141718] font-semibold drop-shadow-sm	'>Home</span>
            <span className='text-[#6C7275] font-semibold drop-shadow-sm	'>Shop</span>
            <span className='text-[#6C7275] font-semibold drop-shadow-sm	'>Product</span>
            <span className='text-[#6C7275] font-semibold drop-shadow-sm	'>Contact Us</span>
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