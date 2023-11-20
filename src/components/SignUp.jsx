import React, {useState} from 'react'
import eye from './../assets/Auth/eye.svg'

function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  
  

  return (
    <div className='flex flex-col gap-2 w-80 justify-center align-middle items-start'>
        <span className='text-3xl font-semibold text-[#141718]'>Sign up</span>
        <p className='py-4 text-[#6C7275] text-md'>Already have an account? 
            <span className='text-[#38CB89] font-semibold'> Sign in</span>
        </p>
        <p className='border-b-[1px] w-full my-1'>
            <input type='text' placeholder='Your name' className='outline-none border-0 w-full h-10'/>
        </p>
        <p className='border-b-[1px] w-full my-1'>
            <input type='text' placeholder='Username' className='outline-none border-0 w-full h-10'/>
        </p>
        <p className='border-b-[1px] w-full my-1'>
            <input type='email' placeholder='Email address' className='outline-none border-0 w-full h-10'/>
        </p>
        <p className='border-b-[1px] w-full my-1 flex justify-between'>
            <input type={passwordVisible ? 'text' : 'password'} placeholder='Password' className='outline-none border-0 w-full h-10'/>
            <img src={eye} className='w-5 mt-2 cursor-pointer' onClick={togglePasswordVisibility} />
        </p>
        <p className='my-5 text-sm text-[#6C7275] flex gap-2'>
            <input type='checkbox' className='rounded border-[1px]'/>
            <span>I agree with <strong className='text-[#141718]'>Privacy Policy</strong> and <strong className='text-[#141718]'>Terms of Use</strong></span>
        </p>

        <button className='w-full bg-[#141718] text-white rounded h-12'>Sign Up</button>
    </div>
  )
}

export default SignUp