import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import {app} from '../firebase/firebase';


function Header() {

   //auth
   const auth = getAuth(app);

   const signOutGoogle = () =>{
    
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    

  }

  return (
    <div className='flex flex-row justify-between p-5'>
        {/*LOGO*/}
        <div className='w-[35px] mr-2'>
            <svg width="100%" height="auto"  viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 35H17.5L25.4327 26.5625L35 17.5V35Z" fill="#6DE283"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M34.4838 13.2637L16.3587 31.3941L3.50964 18.5414L9.08934 12.9601L16.3587 20.2315L30.6421 5.94392C27.4351 2.29959 22.7361 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35C27.165 35 35 27.165 35 17.5C35 16.0392 34.821 14.6202 34.4838 13.2637Z" fill="#6DE283"/>
            </svg>
        </div>
        {/*USER ICON*/}


        <div className='p-1 border-[#6DE283] border-2 rounded-full'>
            <img
            className='w-[30px] h-[30px] object-contain rounded-full'
            src={auth?.currentUser.photoURL}
            onClick={ () => signOutGoogle()}
            />
        </div>
    </div>
  )
}

export default Header