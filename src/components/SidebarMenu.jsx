import React from 'react'
import { useSidebarMenu } from '../context/sidebarMenuContext'
import logo from './../assets/Home/logo.png'
import close from './../assets/Home/Union.svg'
import search from './../assets/Home/search-menu.png'
import chevron from './../assets/Home/chevron-down.png'
import bag from './../assets/Home/shopping-bag.svg'
import heart from './../assets/Home/Line.png'
import instagram from './../assets/Home/instagram-dark.png'
import facebook from './../assets/Home/facebook-dark.png'
import youtube from './../assets/Home/youtube-dark.png'

function SidebarMenu() {
  const { closeMenu } = useSidebarMenu();
  
  return (
    <div className='fixed top-0 left-0 z-50 bg-transparent h-screen w-full flex lg:hidden  '>
       <div className='flex basis-4/5 bg-white flex-col p-4 justify-between overflow-y-auto'>
        <section>
          <div className='flex justify-between mb-4'>
            <img src={logo} />
            <img src={close} className='w-3 h-3' onClick={closeMenu} />
          </div>
          <div className='flex flex-col gap-3'>
            <div className='rounded p-2 border border-[#6C7275] w-full h-10 flex justify-start gap-2'>
              <img src={search}/>
              <input type='text' placeholder='Search' className='border-0 outline-none' />
            </div>
            <div className='flex my-3 text-sm font-semibold flex-col items-start align-top gap-4'>
              <p className='h-10 border-b-[1px] border-b-[#E8ECEF] w-full'>Home</p>
              <p className='h-10 border-b-[1px] border-b-[#E8ECEF] w-full flex justify-between'>
                <span className=''>Shop</span>
                <img src={chevron} className='w-6 h-6 cursor-pointer' />
              </p>
              <p className='h-10 border-b-[1px] border-b-[#E8ECEF] w-full flex justify-between'>
                <span>Product</span>
                <img src={chevron} className='w-6 h-6 cursor-pointer' />
              </p>
              <p className='h-10 border-b-[1px] border-b-[#E8ECEF] w-full'>Contact Us</p>
            </div>
          </div>
        </section>
        <section>
            <div className='mb-5 flex flex-col text-lg text-[#6C7275]'>
              <p className='flex justify-between h-10 border-b-[1px] border-b-[#E8ECEF] w-full'>
                <span>Cart</span>
                <div className='flex gap-2'>
                  <img src={bag} className='w-6' />
                  <span className='rounded-full bg-black text-white w-6 h-6 mt-[7px] text-sm text-center'>2</span>
                </div>
              </p>
              <p className='flex justify-between h-10 border-b-[1px] border-b-[#E8ECEF] w-full'>
                <span>Wishlist</span>
                <div className='flex gap-2'>
                  <img src={heart} className='h-6 mt-[6px]' />
                  <span className='rounded-full bg-black text-white w-6 h-6 mt-[7px] text-sm text-center'>2</span>
                </div>
              </p>
            </div>
            <button className='h-12 rounded w-full bg-[#141718] text-white text-lg text-center'>Sign In</button>
            <div className='flex gap-3 py-4 px-1'>
              <img src={instagram} />
              <img src={facebook} />
              <img src={youtube} />
            </div>
        </section>
       </div>
       <div className='flex basis-1/5 bg-black bg-opacity-80' onClick={closeMenu}></div>
    </div>
  )
}

export default SidebarMenu