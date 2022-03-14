import React from 'react'

function OnlyForMobileDevices() {
  return (
    <div className='hidden md:flex relative h-screen w-screen '>
    <div className='flex flex-row justify-center absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full'>
    <header className='flex flex-col text-center   border-r-2 border-[#6DE283] pr-3 '>
            {/* LOGO */}
            <div className='flex flex-row justify-center items-baseline'>
                <div className='w-[35px] mr-2'>
                    <svg width="100%" height="auto" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35 35H17.5L25.4327 26.5625L35 17.5V35Z" fill="#6DE283"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M34.4838 13.2637L16.3587 31.3941L3.50964 18.5414L9.08934 12.9601L16.3587 20.2315L30.6421 5.94392C27.4351 2.29959 22.7361 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35C27.165 35 35 27.165 35 17.5C35 16.0392 34.821 14.6202 34.4838 13.2637Z" fill="#6DE283"/>
                    </svg>
                </div>
            {/* NAME */}
            <h1 className='font-extrabold text-[31px] '>
                FLAG-GUESS
            </h1>
            </div>
            <h6 className='-translate-x-[9px] -translate-y-2 text-gray-500 font-semibold'>GEOGRAFY GAME</h6>
        
        </header>
        <div className='p-3 pb-0 flex  items-end' >
        
            <h1 className=' font-bold  text-[#49BB84]  text-xl'>Only available for mobile devices for now </h1>

        </div>
    </div>
        
</div>
  )
}

export default OnlyForMobileDevices