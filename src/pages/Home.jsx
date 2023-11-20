import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import hero from './../assets/Home/hero.png'
import BedroomCard from './../assets/Home/BedroomCard.png'
import KitchenCard from './../assets/Home/KitchenCard.png'
import LivingRoomCard from './../assets/Home/LivingRoomCard.png'
import blackarrow from './../assets/Home/arrow-right-black.svg'
import delivery from './../assets/Home/fast-delivery.png'
import money from './../assets/Home/money.png'
import lock from './../assets/Home/lock.png'
import call from './../assets/Home/call.png'
import banner from './../assets/Home/banner.png'
import ProductHome from '../components/ProductHome'
import ArticleBox from '../components/ArticleBox'
import Footer from '../components/Footer'

function Home() {
  const [newProducts, setNewProducts] = useState([])

  useEffect(() => {
    
    axios.get('http://localhost:8081/api/product/new')
    
      .then(response => {
        console.log('2')
        setNewProducts(response.data);
      })
      .catch(error => {
        console.log('3')
        console.error('Error fetching data:', error);
    });

  }, [])

  return (
    <div className='w-100 p-0'>
        <Header />
        
        <section className='px-8 md:px-40 py-5 flex flex-col gap-8'>
                <img src={hero} />
                <div className='flex flex-col  lg:flex-row gap-6  lg:justify-center lg:items-center'>
                    <p className='text-5xl lg:text-7xl font-semibold drop-shadow-lg text-[#141718] lg:w-2/3 '>
                        <span>Simply Unique/</span>
                        <br/>
                        <span>Simply Better.</span>
                    </p>
                    <p className='lg:w-1/3 lg:mx-4 text-sm lg:text-lg text-[#121212] font-sm lg:font-semibold '><span className='font-bold lg:font-semibold'>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
                </div>
            </section>
            <section className='px-8 md:px-40 py-5 pb-7 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='relative'>
                    <img src={LivingRoomCard} />
                    <div className='absolute flex flex-col text-[#141718] font-semibold top-5 lg:top-10 left-10 visible z-10'>
                      <span className='text-3xl pb-3'>Living Room</span>
                      <p className='flex border-b-2 border-b-[#141718] w-max p-0 gap-1 cursor-pointer'>
                        <span className='text-md w-max font-semibold whitespace-nowrap'>Shop Now </span>
                        <img src={blackarrow} />
                      </p>
                    </div>
                </div>
                <div className=' grid grid-cols-1 gap-2'>
                  <div className='relative'>
                    <img src={BedroomCard} />
                    <div className='absolute flex flex-col text-[#141718] font-semibold top-20 lg:top-40 left-10 visible z-10'>
                      <span className='text-3xl pb-3'>Bedroom</span>
                      <p className='flex border-b-2 border-b-[#141718] w-max p-0 gap-1 cursor-pointer'>
                        <span className='text-md w-max  font-semibold whitespace-nowrap'>Shop Now </span>
                        <img src={blackarrow} />
                      </p>
                    </div>
                    
                  </div>
                  <div className='relative'>
                    <img src={KitchenCard} />
                    <div className='absolute flex flex-col text-[#141718] font-semibold top-20 lg:top-40 left-10 visible z-10'>
                      <span className='text-3xl pb-3'>Kitchen</span>
                      <p className='flex border-b-2 border-b-[#141718] w-max p-0 gap-1 cursor-pointer'>
                        <span className='text-md w-max font-semibold whitespace-nowrap'>Shop Now </span>
                        <img src={blackarrow} />
                      </p>
                    </div>
                  </div>
                </div>                
            </section>
            <section className='px-8 md:px-40 py-5 pb-5 flex flex-col'>
              <div className='flex justify-start lg:justify-between pe-3'>
                <span className='text-4xl font-semibold'>New <br/> Arrivals</span>
                <p className='hidden lg:flex border-b-2 border-b-[#141718] w-max p-0 gap-1 cursor-pointer justify-end items-end'>
                  <span className='text-sm w-max font-normal whitespace-nowrap'>More Products</span>
                  <img src={blackarrow} />
                </p>
              </div>
              <div className='py-6 h-350 flex gap-2 overflow-hidden'>
                <div className='py-6 px-2 min-w-full flex justify-start gap-4 overflow-y-hidden overflow-x-auto scrollbar-thin'>
                      { newProducts.map(product => <ProductHome key={product.productId} product={product} />)}
                      
                </div>
              </div>
              <p className='flex lg:hidden border-b-2 border-b-[#141718] w-max p-0 gap-1 cursor-pointer justify-end items-end'>
                  <span className='text-xs w-max font-normal whitespace-nowrap'>More Products</span>
                  <img src={blackarrow} />
              </p>
              
            </section>
            <section className='px-8 md:px-40 my-5 pb-5 flex flex-col'>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                  <div className='lg:border py-8 px-4 lg:py-12 lg:px-8 bg-[#F3F5F7] h-full'>
                    <img src={delivery} />
                    <p className='text-[#141718] pt-8 text-lg font-semibold'>Free Shipping</p>
                    <span className='font-normal text-sm text-[#6C7275]'>Order above $200</span>
                  </div>
                  <div className='lg:border py-8 px-4 lg:py-12 lg:px-8 bg-[#F3F5F7] h-full'>
                    <img src={money} />
                    <p className='text-[#141718] pt-8 text-lg font-semibold'>Money-back</p>
                    <span className='font-normal text-sm text-[#6C7275]'>30 days guarantee</span>
                  </div>
                  <div className='lg:border py-8 px-4 lg:py-12 lg:px-8 bg-[#F3F5F7] h-full'>
                    <img src={lock} />
                    <p className='text-[#141718] pt-8 text-lg font-semibold'>Secure Payments</p>
                    <span className='font-normal text-sm text-[#6C7275]'>Secured by Stripe</span>
                  </div>
                  <div className='lg:border py-8 px-4 lg:py-12 lg:px-8 bg-[#F3F5F7] h-full'>
                    <img src={call} />
                    <p className='text-[#141718] pt-8 text-lg font-semibold'>24/7 Support</p>
                    <span className='font-normal text-sm text-[#6C7275]'>Phone and Email support</span>
                  </div>
              </div>
            </section>
            <section className='my-5 pb-5 flex flex-col lg:flex-row gap-0'>
                <img src={banner}/>
                <div className='bg-[#F3F5F7] py-[40px] px-[32px]  lg:px-[80px] w-full flex flex-col justify-center gap-10'>
                  <div className=' flex flex-col justify-between gap-3 lg:gap-5'>
                    <p className='text-[#377DFF] text-md lg:text-xl font-semibold'>SALE UP TO 35% OFF</p>
                    <p className='text-[#141718] text-3xl lg:text-5xl font-semibold'>HUNDREDS of<br/> New lower prices!</p>
                    <p className='text-[#121212] text-lg lg:text-2xl font-normal'>It’s more affordable than ever to give every<br/> room in your home a stylish makeover</p>
                  </div>
                  <div className=''>
                    <p className='text-md lg:text-xl flex gap-2 cursor-pointer font-semibold border-b-[1px]  border-b-[#141718] w-max'>Shop now <img src={blackarrow} /></p>
                  </div>
                </div>
            </section>
            <section className='px-8 md:px-40 my-10 flex flex-col gap-5'>
              <div className='flex justify-between'>
                <span className='text-4xl font-semibold'>Articles</span>
                <p className='hidden lg:flex border-b-2 border-b-[#141718] w-max p-0 gap-1 cursor-pointer justify-end items-end'>
                  <span className='text-sm w-max font-normal whitespace-nowrap'>More Articles</span>
                  <img src={blackarrow} />
                </p>
              </div>
              <div className='flex flex-col lg:flex-row w-full justify-between gap-10 lg:gap-5'>
                  <ArticleBox />
                  <ArticleBox />
                  <ArticleBox />
              </div>
            </section>
            <Footer/>
            
    </div>
  )
}

export default Home