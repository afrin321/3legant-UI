import React, { useState } from 'react'
import ticket from  './../assets/Home/ticket-percent.svg'
import rightarrow from './../assets/Home/arrow-right.svg'
import close from './../assets/Home/Union.svg'

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
            
        </div>
    </header> 
  )
}

export default Header