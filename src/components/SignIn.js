import React from 'react'

import SignInButton  from './SignInButton'
import OnlyForMobileDevices from "./OnlyForMobileDevices"


function SignIn() {
  return (

    <section className='bg-[#3EB171]'>
    <div className='h-screen relative overflow-y-hidden overflow-x-hidden lg:hidden'>
        <header className='flex flex-col text-center w-full absolute -translate-x-[50%] left-[50%] top-[30%]'>
            {/* LOGO */}
            <div className='flex flex-row justify-center items-baseline'>
                <div className='w-[35px] mr-2'>
                    <svg width="100%" height="auto" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35 35H17.5L25.4327 26.5625L35 17.5V35Z" fill="#6DE283"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M34.4838 13.2637L16.3587 31.3941L3.50964 18.5414L9.08934 12.9601L16.3587 20.2315L30.6421 5.94392C27.4351 2.29959 22.7361 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35C27.165 35 35 27.165 35 17.5C35 16.0392 34.821 14.6202 34.4838 13.2637Z" fill="#6DE283"/>
                    </svg>
                </div>
            {/* NAME */}
            <h1 className='font-extrabold text-[31px] text-white '>
                FLAG-GUESS
            </h1>
            </div>
            <h6 className='-translate-x-[9px] -translate-y-2 text-[#6DE283] font-semibold'>GEOGRAFY GAME</h6>
           
        </header>  
        {/*BUtton area*/}
        <div className='p-5 absolute w-full max-w-xl bottom-0 left-[50%] -translate-x-[50%]'>
        <div className=' w-full  bg-white rounded-xl p-7  '>
            <div className='flex justify-center   flex-col'>
                <p className='font-bold text-xl text-center'>Login or Sign up </p>
                <p className='text-gray-400 font-regular text-center m-0'>Signup with google to <br/> take geography quiz</p>
                <div className='space-y-3 pt-3'>
                 <SignInButton  bg={"#6DE283"} text={"Sign up"}/>
                <SignInButton  bg={"#d6d4d0"} text={"Login with"}/>

                </div>
            </div>    
        </div>
        </div>
       
        
    </div>



    {/*LG*/}
    <OnlyForMobileDevices/>
    </section>
  )
}

export default SignIn