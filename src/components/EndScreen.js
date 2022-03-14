import React, {useEffect,useState} from 'react'
import { Link } from "react-router-dom";

import {app} from '../firebase/firebase';
import { getAuth,  onAuthStateChanged } from "firebase/auth";

import { doc, getDoc, collection, setDoc, addDoc, serverTimestamp, query, where,getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';



function EndScreen({score, oldScore, mode}) {
  
  const auth = getAuth(app);
  

  const [processCompleted, setProcessCompleted] = useState(false)


 

  useEffect(() => {
    
    console.log(oldScore)
    

      if(score > oldScore || !oldScore ){
        const addToDatabase = async () =>{

          if (mode === "easy") {
            await setDoc(doc(db, "users",auth?.currentUser.uid.toString()), {
              name: auth.currentUser.displayName,
              email: auth.currentUser.email,
              photoUrl: auth.currentUser.photoURL,
              uid: auth.currentUser.uid,
              scoreEasy: score,

            },{ merge: true })
            
          } else {
            
            await setDoc(doc(db, "users",auth?.currentUser.uid.toString()), {
              name: auth.currentUser.displayName,
              email: auth.currentUser.email,
              photoUrl: auth.currentUser.photoURL,
              uid: auth.currentUser.uid,
              scoreHard: score,
            },{ merge: true })
          }
          
              
          
            }
           addToDatabase()

      }else {
      console.log("old score is greater")
    } 
      
    
      
    
  
  
  }, []);



const uselessText = (score) => {

  if (score < 10 ) {
      return (
        <p className='text-[#6DE283] font-bold text-center text-2xl'>Congrats You are an average American :)</p>
      )
  }
}



  return (
    <div className='h-screen w-screen p-5 flex flex-col justify-between '>
      {/*TOP BOX*/}
      <div className='rounded-[10px] p-3 bg-[#49BB84] text-center'>
        <h1 className='font-bold text-3xl text-white'> Your score is {score}</h1>
      </div>

      {/*USELESS TEXT :)) */}
      <div className='p-3 '>
        {uselessText(score)}
      </div>
      {/*EXIT BUTTON*/}

      <Link className='disabled'
              to="/"
              >
      <div className=' p-3 bg-[#6DE283] rounded-[10px] text-center'>
        <h1 className='text-white font-bold text-3xl'>
          EXIT
        </h1>
      </div>
               
      </Link>
      
    </div>
  )
}

export default EndScreen