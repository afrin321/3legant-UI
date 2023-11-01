import React, { useState } from 'react'
import ticket from  './../assets/Home/ticket-percent.svg'
import rightarrow from './../assets/Home/arrow-right.svg'
import close from './../assets/Home/Union.svg'
import hero from './../assets/Home/hero.png'
import Nav from './Nav'

function Header() {
  const [displayDiscount, isDisplayDiscount] = useState(true)


  return (
    <header>
        <div className='flex flex-col p-0 '>
            {displayDiscount && <div className='bg-[#F3F5F7] h-auto w-100 flex justify-center'>
                <div className='flex w-4/5 text-sm md:text-md md:w-2/3 px-4 py-2 justify-between drop-shadow-lg' >
                    <div className='flex w-4/5 gap-4 align-middle items-center'>
                        <img src={ticket} />
                        <span className='text-[#343839]'>30% off storewide — Limited time! </span>
                        
                        <p className='hidden lg:flex gap-2 border-b-2 border-[#377DFF] '>
                            <span className='text-[#377DFF] '>Shop Now</span>
                            <img src={rightarrow} />
                        </p>
                        
                    </div>
                    <div className='flex items-center align-middle'>
                        <img src={close} onClick={() => isDisplayDiscount(prev => !prev)} />
                    </div>
                </div>
            </div>}
            <Nav />
            <div className='px-8 md:px-40 py-5 flex flex-col gap-8'>
                <img src={hero} />
                <div className='flex flex-col  lg:flex-row gap-6  lg:justify-center lg:items-center'>
                    <p className='text-5xl lg:text-7xl font-semibold drop-shadow-lg text-[#141718] lg:w-2/3 pe-10'>
                        <span>Simply Unique/</span>
                        <br/>
                        <span>Simply Better.</span>
                    </p>
                    <p className='lg:w-1/3 lg:mx-4 text-lg text-[#121212] font-normal '><span className='font-bold'>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
                </div>
            </div>
        </div>
    </header> 
  )
}

export default Header