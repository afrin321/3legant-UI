import React, { useRef } from 'react'
import image from './../assets/Auth/Left.png'
import SignUpDiv from '../components/SignUp'

function SignUp() {

  

    

  return (
    <div class="w-full h-screen flex flex-col lg:flex-row">
        <div className='w-screen lg:w-full bg-[#f3f5f7] h-30 lg:h-full flex justify-center'>
          <img src={image} className='w-[40%] lg:w-auto' />
        </div>
        <div className='p-8 lg: p-auto w-full h-70 lg:h-full flex justify-center align-middle'>
          <SignUpDiv />
        </div>
    </div>
    
  )
}

export default SignUp