import React from 'react'
import product from './../assets/Home/product-dummy.png'
import wishlist from './../assets/Home/wishlist.svg'
import star from './../assets/Home/StarIcon.png'

function ProductHome() {
  return (
    <div className='flex flex-col'>
        <div className='relative h-full w-max group'>
            <img src={product} />
            <div className='absolute top-3 left-3 flex flex-col justify-between h-[20rem] w-[15rem]'>
                <div className='flex justify-between'>
                    <div className='flex flex-col justify-start gap-2'>
                        <label className='bg-white rounded text-sm font-bold text-center h-6 w-16 py-0.5'>NEW</label>
                        <label className='bg-[#38CB89] text-white text-sm font-bold text-center h-6 w-16 rounded py-0.5'>-50%</label>
                    </div>
                    <img className='hidden group-hover:block drop-shadow-xl' src={wishlist} />
                </div>
                <div>
                    <button className='hidden group-hover:block rounded bg-[#141718] h-10 text-[#fefefe] text-md w-full text-center font-semibold'>Add to cart</button>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-start'>
            <p className='flex py-1'>
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
            </p>
            <p className='text-md py-1 text-[#141718] font-semibold'>Loveseat Sofa</p>
            <p className='text-sm font-semibold'>
                <span className='text-[#141718]'>$199.00</span> <span className='text-[#6C7275] line-through px-1'>$400.00</span>
            </p>
        </div>

    </div>
  )
}

export default ProductHome