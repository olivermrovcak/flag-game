import React, { useEffect,useState } from 'react'

import { Link } from "react-router-dom";




function GameSelect({countries, oldScoreEasy, oldScoreHard}) {


  

  return (
    <div>
            <div className='p-5 pt-0 flex flex-row items-center '>
                <h1 className='font-bold text-[25px] text-[#2C8D8D] flex-1'>CATEGORIES</h1>
                <div className='bg-[#49BB84] rounded-xl px-2 shadow-custom'>
                  <p className='font-bold text-sm p-1 text-white cursor-pointer'>See all</p>
            </div>
                
            </div>
            

                  <Link  
                  
                  to={{ pathname: "/Hard" }} 
                  state={{countries: countries, oldScore: oldScoreHard}}
                  >
                  <div className='w-full p-5 pt-0 cursor-pointer  '>
                    
                    <div  className='bg-[#28DC61] flex items-center justify-around p-3 shadow-custom overflow-hidden  rounded-xl border-[#49BB84] border-2 h-[120px] bg-center bg-cover   bg-no-repeat '>
                          <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 -translate-x-[15%] " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" stroke='white'  />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke='white' />
                              </svg>
                              <h1 className='text-sm  font-bold text-white'>FLAGS FROM ALL <br/> AROUND THE WORLD</h1>
                              <p className='text-sm text-white font-semibold'>Difficulty: Hard</p>
                          </div>
                         
                          <img
                          className='w-32 h-18 rounded-xl'
                          src='https://flagcdn.com/w320/cz.png'
                          />
                    </div>
                  </div>
                  </Link>

                  <Link  
                  
                  to={{ pathname: "/Easy" }} 
                  state={{countries: countries}}
                  >
                  <div className='w-full p-5 pt-0 cursor-pointer  '>
                    
                    <div  className='bg-[#28DC61] flex items-center justify-around p-3 shadow-custom overflow-hidden  rounded-xl border-[#49BB84] border-2 h-[120px] bg-center bg-cover   bg-no-repeat '>
                          <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 -translate-x-[15%] " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" stroke='white'  />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke='white' />
                              </svg>
                              <h1 className='text-sm  font-bold text-white'>FLAGS FROM ALL <br/> AROUND THE WORLD</h1>
                              <p className='text-sm text-white font-semibold'>Difficulty: Easy</p>
                          </div>
                         
                          <img
                          className='w-32 h-18 rounded-xl'
                          src='https://flagcdn.com/w320/bi.png'
                          />
                    </div>
                  </div>
                  </Link>
    </div>
  )
}

export default GameSelect