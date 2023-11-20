import React from 'react'
import wishlist from './../assets/Home/wishlist.svg'
import star from './../assets/Home/StarIcon.png'

function ProductHome(props) {
    const {product} = props
  return (
    <div className='flex flex-col'>
        <div className='relative h-full w-max group'>
            <img src={`data:image/png;base64,${product.productImage}`} />
            <div className='absolute top-3 left-3 flex flex-col justify-between h-[20rem] w-[15rem]'>
                <div className='flex justify-between'>
                    <div className='flex flex-col justify-start gap-2'>
                        <label className='bg-white rounded text-sm font-bold text-center h-6 w-16 py-0.5'>NEW</label>
                        <label className='bg-[#38CB89] text-white text-sm font-bold text-center h-6 w-16 rounded py-0.5'>-{product.discount}%</label>
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
                {
                    Array.apply(null, { length: parseInt(product.productRating) }).map((e, i) => (
                        <img src={star} key={i} />
                    ))
                }
            </p>
            <p className='text-md py-1 text-[#141718] font-semibold'>{product.productName}</p>
            <p className='text-sm font-semibold'>
                <span className='text-[#141718]'>${product.productPrice}</span> <span className='text-[#6C7275] line-through px-1'>{product.productPreviousPrice ? `$${product.productPreviousPrice}` : ''}</span>
            </p>
        </div>

    </div>
  )
}

export default ProductHome