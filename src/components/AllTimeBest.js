import React, {useEffect,useState} from 'react'
import laurel from '../images/laurel.png'

function AllTimeBest({bestOne}) {
    
    

  return (
    <div className='p-5 pt-0 '>
        <div className=' pt-0 flex flex-row items-center '>
            <h1 className='font-bold text-[25px] text-darkgreen flex-1'>All time best</h1>
        </div>

        <div className='bg-[#00B46C]  shadow-custom flex flex-row p-3 rounded-[10px] mt-5 w-full '>
            {/*LAUREL*/}
            <div className='relative w-20 h-20'>
                <img
                src={laurel}
                />

                <img
                className='w-10 h-10 object-contain rounded-full absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'
                src={bestOne?.photoUrl}
                />
            </div>
            {/*TEXT*/}
            <div>
                <h1 className='font-extrabold text-white text-2xl'>
                    {bestOne?.name}
                </h1>
                <h3 className='text-white font-extrabold leading-[0px] mt-4'>
                    Top score <br/>
                    in hardmode: <span className='text-2xl'>{bestOne?.scoreHard}</span>
                </h3>
                
            </div>
            
        </div>

        <div className='w-full h-12 rounded-xl bg-[#00B26A] shadow-custom mt-5 text-center flex items-center justify-center cursor-pointer'>
            <h1 className='text-white text-xl font-extrabold'>LEADERBOARD</h1>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" stroke='white' />
            </svg>
        </div>

    </div>
  )
}

export default AllTimeBest