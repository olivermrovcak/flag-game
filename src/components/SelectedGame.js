import React, {useEffect, useState} from 'react'

import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

function SelectedGame() {

    const location = useLocation()
    const game = location.state?.game

    




  return (
    <div className='relative h-screen'>
        <div className='flex flex-row items-center p-5'>
        <Link 
              to="/"
              >
                <div className='w-12 mr-5'>
                    <svg width="100%" height="auto" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.80761 11.0711 0.80761 10.4853 1.3934L0.939339 10.9393ZM33 10.5L2 10.5L2 13.5L33 13.5L33 10.5Z" fill="#6DE283"/>
                    </svg>
                </div>
                  </Link>
            
            <h1 className='font-extrabold text-[#6DE283] text-[25px]'>BACK</h1>
        </div>

        <div className='p-5 '>
            <h1 className='text-[40px] font-extrabold text-[#49BB84]'>{game}</h1>
            <div  className='rounded-xl w-full h-60 bg-center bg-cover  bg-no-repeat  border-2 border-[#49BB84]'>

            </div>
        </div>

        

        <div className='absolute w-screen bottom-0 '>
            <svg width="100%" height="auto" viewBox="0 0 320 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-146 31.9256C-115.869 26.9013 -55.6069 -3.87295 4.65509 6.80382C64.9171 17.4806 95.0481 85.6235 155.31 85.3095C215.572 84.9955 245.703 17.2712 305.965 5.23371C366.227 -6.80382 396.358 26.1686 456.62 25.1218C516.882 24.0751 577.144 5.02436 607.275 0V232.377H-146V31.9256Z" fill="#C5F4C7" fill-opacity="0.34"/>
                <path d="M-146 217.722C-95.7816 193.019 4.65509 98.8124 105.092 94.2067C205.529 89.6011 255.747 189.146 356.184 194.694C456.62 200.242 557.057 136.495 607.275 121.945V232.377H-146V217.722Z" fill="#6DE283" fill-opacity="0.2"/>
            </svg>
        </div>
        
        <div className='w-screen pt-[100px] cursor-pointer'>

        <Link 
              to="/LevelSelect"
              >
            <button className='flex bg-[#6DE283] p-3 rounded-xl shadow-2xl justify-center w-[80%] cursor-pointer absolute left-[50%] -translate-x-[50%]'>
                <p className='font-semibold text-white text-xl '>PLAY</p>
            </button>
        </Link>
           
        </div>
    </div>
  )
}

export default SelectedGame