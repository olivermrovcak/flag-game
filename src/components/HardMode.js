import React, { useState, useEffect } from 'react'

import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

import {app} from '../firebase/firebase';
import { getAuth } from "firebase/auth";

import {collection,query,getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

import EndScreen from './EndScreen';
function HardMode() {


    const auth = getAuth(app);

    const location = useLocation()
    const countriess = location.state?.countries

    
  
  
    
    
    const [completed, setCompleted] = useState(0)
    const [countries, setCountries] = useState(countriess)
    const [askedCountries ,setAskedCountries] = useState([])

    const [gameCompleted, setGameCompleted] = useState(false)

    const [currCountry, setCurrCountry] = useState(null)

    const [currStateName, setCurrStateName] = useState("")

    const [inputState, setInputState] = useState("")

    const [isCorrect, setIsCorrect] = useState("")

    const [lives, setLives] = useState(5)

    const [oldScore, setOldScore] = useState(location.state.oldScore)

    var arr = [];


    //set 1 random country to display
    const setCountry = () => {
      if (countries) {
        while(true) {
            var random = Math.floor(Math.random() * countries.length);
            console.log(countries[random].name.common)
            if (!askedCountries.includes(countries[random].name.common)) {
              setCurrCountry(countries[random])
              setAskedCountries(askedCountries => [...askedCountries, countries[random].name.common])
              arr[Math.floor(Math.random() * 9)] = countries[random].name.common;
              break
            } 
        
            if (askedCountries.length >= countries.length) {
              console.log("thats allô")
              setGameCompleted(true)
              break
            }
            
            
          }

      }

    }


    useEffect(() => {

    setCountry()
        
    
      }, [])

      
      const handleSubmit = (event) =>{
        
        event.preventDefault();
       
        if (currCountry.name.common.replace(/[^a-zA-Z ]/g, "") === inputState || currCountry.name.common.toLowerCase() === inputState.toLowerCase()) {
           //correct
           setIsCorrect("#6DE283")

          setTimeout(() => {  
            
            setCountry()
            setIsCorrect("")
            setInputState("")
            setCompleted(completed => completed + 1)
          }, 600);

          
          
        } else {
          //incorrect
          setIsCorrect("#FF7676")
          setCurrStateName(currCountry.name.common)

          setTimeout(() => {  
            
            setCountry()
            setIsCorrect("")
            setInputState("")
            
            if (lives <= 0 ) {
                setGameCompleted(true)
            } else {
              setLives(lives => lives - 1)
            }
            setCurrStateName("")
          }, 1000);
          
          
        }
        
      }

      
      // submit on pressing enter
      const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        handleSubmit();
      }
    };

   



  return (
   
    <div /*style={{backgroundImage:`url(${bottomBg})`}} */ className='relative h-screen bg-no-repeat bg-bottom bg-contain'>
    {gameCompleted ? (
      <EndScreen score={completed} mode={"hard"} oldScore={oldScore} />
    ) : (

      <div>
         <div className='flex flex-row items-center p-5'>
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
          <p className='font-extrabold text-[#6DE283]'>250 / {completed}</p>
      </div>

      <div className='p-10 pb-7   bg-[#D2F6D7]  '>
            <div className='flex flex-row relative'>
              <div>
                <p className='font-bold text-green'>Lives : {lives}</p>
              </div>

            </div>
          <div className='rounded-xl   flex flex-col justify-center items-center'>
              <img
              className=' rounded-xl w-[300px] h-[160px]'
              
              src={currCountry && currCountry.flags.png}

              />
              <p className='text-center h-7 mt-3'>{currStateName}</p>
          </div>

        
      </div>
            {/*INPUT*/}
            <div className='w-full flex flex-row  h-[100px] justify-center space-x-5 items-center'>
                <form onSubmit={handleSubmit} className='w-full flex flex-row justify-center space-x-5 items-center'>
                <div className='w-[60%] h-10 '>
                    <input style={{ backgroundColor: isCorrect  }} onChange={(e) => {setInputState(e.target.value)}}
                    onKeyPress={handleKeypress}
                    value={inputState}
                    className='w-full h-full pl-3 border rounded-xl shadow-custom duration-300 ease-in-out'
                    placeholder='Your guess...'

                    />
                </div>

                <button type="submit" className='w-[20%] h-10 bg-[#6DE283] rounded-xl shadow-custom flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                </button>

                </form>
            </div>
     
      
      </div>

    )}
      

     
      
      
  </div>

  )
}

export default HardMode