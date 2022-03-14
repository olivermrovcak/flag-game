import React, { useState } from 'react'

import {app} from '../firebase/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";


function SignInButton({bg, text}) {

  

  const googleSignIn = () => {

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    

    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });

    
}

  return (
    
        <button onClick={googleSignIn} style={{backgroundColor: bg}} className={`flex   p-3 rounded-2xl  justify-center w-full cursor-pointer`}>
            <p className='font-semibold text-white '>{text}</p>
            <img className='w-5 h-5 ml-3 object-contain' src="https://firebasestorage.googleapis.com/v0/b/oliverminstaclone.appspot.com/o/posts%2FKNKeB0D93XMoe9JXsG9V%2Fimage?alt=media&token=6880fbd1-ad9e-481b-b2ed-b678e8518efb" alt="" />
        </button>
   
  )
}

export default SignInButton