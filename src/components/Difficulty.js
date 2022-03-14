import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";

import { useLocation } from 'react-router-dom'



function Difficulty() {

    const location = useLocation()
    const countries = location.state?.countries

  console.log(countries)

  return (
    <div className='w-screen h-screen p-5'>

        {/*BACK*/}
        <div className='flex flex-row items-center mb-5 '>
            <div className='w-12 mr-5'>
              <Link
              to="/"
              >
                <svg width="100%" height="auto" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.80761 11.0711 0.80761 10.4853 1.3934L0.939339 10.9393ZM33 10.5L2 10.5L2 13.5L33 13.5L33 10.5Z" fill="#6DE283"/>
                </svg>
              </Link>
               
            </div>
            <h1 className='font-extrabold text-[#6DE283] text-[25px] flex-1'>BACK</h1>
            
        </div>


        <h1 className='text-[#2C8D8D] font-bold text-3xl mb-3'>Choose Difficulty</h1>


        {/*EASY*/}

        {countries[1] ? (
             <Link
             to="/Easy"
             state = {{countries: countries}}
             >
              <div className='rounded-[10px] p-3 bg-[#49BB84] text-center mb-5 shadow-custom'>
                 <h1 className='text-white font-bold text-3xl'>Easy</h1>
             </div>            
             </Link>
        ) : (

          <div className='rounded-[10px] p-3 bg-[#49BB84] text-center mb-5'>
          <h1 className='text-white font-bold text-3xl'>Easy</h1>
      </div>   

        )}
       
       {/*HARD*/}


       {countries[1] ? (
             <Link
             to="/Hard"
             state = {{countries: countries, oldScore : location.state.oldScoreHard}}
             >
              <div className='rounded-[10px] p-3 bg-[#49BB84] text-center mb-5  shadow-custom'>
                 <h1 className='text-white font-bold text-3xl'>Hard</h1>
             </div>            
             </Link>
        ) : (

          <div className='rounded-[10px] p-3 bg-[#49BB84] text-center mb-5'>
          <h1 className='text-white font-bold text-3xl'>Hard</h1>
      </div>   

        )}
       
    </div>
  )
}

export default Difficulty

