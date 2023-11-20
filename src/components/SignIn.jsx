import React, {useState} from 'react'
import eye from './../assets/Auth/eye.svg'

function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className='flex flex-col gap-2 w-80 justify-center align-middle items-start'>
        <span className='text-3xl font-semibold text-[#141718]'>Sign In</span>
        <p className='py-4 text-[#6C7275] text-md'>Don’t have an accout yet?
            <span className='text-[#38CB89] font-semibold'> Sign up</span>
        </p>
        
        
        <p className='border-b-[1px] w-full my-1'>
            <input type='email' placeholder='Your username or Email address' className='outline-none border-0 w-full h-10'/>
        </p>
        <p className='border-b-[1px] w-full my-1 flex justify-between'>
            <input type={passwordVisible ? 'text' : 'password'} placeholder='Password' className='outline-none border-0 w-full h-10'/>
            <img src={eye} className='w-5 mt-2 cursor-pointer' onClick={togglePasswordVisibility} />
        </p>
        <p className='my-5 text-sm text-[#6C7275] flex flex-row w-full justify-between'>
            <span><input type='checkbox' className='rounded border-[1px]'/> Remember me</span>
            <strong className='text-[#141718]' >Forgot Password?</strong>
        </p>

        <button className='w-full bg-[#141718] text-white rounded h-12'>Sign In</button>
    </div>
  )
}

export default SignIn