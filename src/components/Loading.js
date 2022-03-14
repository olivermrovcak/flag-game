import React from 'react'

function Loading() {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
    <div className="lds-facebook"><div></div><div></div><div></div></div>
    <h1 className='font-bold text-[#49bb84]'>LOADING</h1>
  </div>
  )
}

export default Loading