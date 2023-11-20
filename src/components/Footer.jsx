import React from 'react'

import email from './../assets/Home/email.png'
import logo from './../assets/Home/3legant.png'
import instagram from './../assets/Home/instagram.png'
import facebook from './../assets/Home/facebook.png'
import youtube from './../assets/Home/youtube.png'
import newsletter from './../assets/Home/Newsletter.png'

function Footer() {
  return (
    <>
        <section className='relative'>
            <img className='object-none object-center lg:object-cover min-h-[360px] lg:h-auto' src={newsletter} />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-6'>
            <div className='flex flex-col gap-2 items-center align-middle w-80 lg:w-max'>
                <span className='text-3xl font-semibold text-[#121212]'>Join Our Newsletter</span>
                <span className='lg:text-[18px] text-center'>Sign up for deals, new products and promotions</span>
            </div>
            <div className='flex justify-between text-[#6C7275] border-b-[#6C7275] border-b-[1px] w-80 lg:w-[400px] py-3'>
                <p className='flex gap-2'>
                <img src={email} />
                <input type="email" placeholder='Email address' className='border-0 outline-none bg-transparent' />
                </p>
                <button className='border-0 outline-none bg-transparent'>Signup</button>
            </div>
            </div>
        </section>
        <footer className='py-10 bg-[#141718] w-full px-8 md:px-40 flex flex-col gap-6 justify-center items-center'>
            <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-5 w-full items-center lg:items-start'>
                <p className='w-50 flex flex-col lg:flex-row  justify-between gap-7  items-center lg:items-start'>
                <img src={logo} className='w-max h-max' /> 
                <span className='hidden lg:block text-lg text-[#6C7275]'>|</span> 
                <span className='block lg:hidden w-[20px] border-l-[#6C7275] '></span>
                <span className='text-[#FEFEFE] whitespace-nowrap'>Gift & Decoration Store</span>
                </p>
                <p className='flex flex-col lg:flex-row  justify-between text-[#FEFEFE] gap-3 lg:gap-5 text-center'>
                <span>Home</span>
                <span>Shop</span>
                <span>Product</span>
                <span>Blog</span>
                <span>Contact Us</span>
                </p>
            </div>
            <div className='flex flex-col-reverse lg:flex-row justify-start lg:justify-between items-center lg:items-start border-t-[1px] my-5 pt-5 w-full border-t-[#6C7275] gap-3 lg:gap-0'>
                <p className='text-[#FEFEFE] text-sm flex flex-col-reverse lg:flex-row gap-5 items-center lg:items-start'>
                <span className=''>Copyright © 2023 3legant. All rights reserved</span>
                <span className='font-bold flex gap-3'><a>Privacy Policy</a> <a>Terms of Use</a></span>
                
                </p>
                <p className='flex gap-4'>
                <img src={instagram} />
                <img src={facebook} />
                <img src={youtube} />
                </p>
            </div>
        </footer>
    </>
  )
}

export default Footer