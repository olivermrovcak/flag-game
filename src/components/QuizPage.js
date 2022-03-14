import React, { useState, useEffect } from 'react'

import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

import {app} from '../firebase/firebase';
import { getAuth} from "firebase/auth";

import {collection, query,getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

import EndScreen from "./EndScreen"


const url = "https://restcountries.com/v3.1/all"

function QuizPage() {

  const auth = getAuth(app);


  const location = useLocation()
  const countriess = location.state?.countries
  
  const [completed, setCompleted] = useState(0)
  const [countries, setCountries] = useState(countriess)
  
  const [currCountry, setCurrCountry] = useState(null)
  const [askedCountries ,setAskedCountries] = useState([])
  const [asked, setAsked] = useState([])

  const [gameCompleted, setGameCompleted] = useState(false)


  const [activeButton, setActiveButton] = useState("");

  const [clicked, setClicked] = useState(false)

  const [lives, setLives] = useState(5)
  
  const [oldScore, setOldScore] = useState("")
  
  var arr = [];
  


  //load Old Score
  useEffect(() => {

    const getHighestScore = async () => {
        const q = query(collection(db, "users"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        
        if (doc.data().uid === auth?.currentUser.uid) {
            setOldScore(doc.data().scoreEasy)
        }
  
    });
    }

    getHighestScore()
     

}, [])



  useEffect(() => {

    
    const gameInit = () => {
      
      pickRandomCountriesToDisplay()
      
      nextOne()
      
      
  }

  gameInit()

  }, [])
  
  //pick 10 random countries to be displayed as answers
  const pickRandomCountriesToDisplay = () => {
    var i = 0;
    while(true) {
      var rand = Math.floor(Math.random() * 255);
      if (!arr.includes(countries[rand]?.name.common)) {
          if(countries[rand]?.name.common) {
            arr.push(countries[rand]?.name.common)
            i++
          }
          
      }
      if (i >= 10){
          break
      }
    }
  }

  //set next flag to display and pick another 10 answers
  const nextOne = () => {

    arr = [];
  pickRandomCountriesToDisplay()
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
  setAsked(arr)
  
  }
  

  //returns true if string contains 3 or more words 
  const countWord = (str) => {
    return str?.split(' ').length >= 3
   }


   //returns true if name equals to displayed countrys name
  const guess = (name) => {
      if(name === currCountry.name.common){
        
        setTimeout(() => {  
          nextOne()
          setCompleted(completed => completed + 1)

        }, 500);
        setActiveButton("")
        return true
        
      } else {
       
        setClicked(true)
        setTimeout(() => {
          finishGame(lives)
          nextOne()
          setClicked(false)
          

        }, 1000)
       
        return false
      }

      

  }

  const correctCountry = (index) => {
    setActiveButton(index)
      setTimeout(() => {  
      setActiveButton("")

    }, 600);

  }

  const changeColor = (name) => {
   if(name === currCountry?.name.common){
     return "#6DE283"
   }
   return "#FF7676"
  }



  const finishGame = (lives) =>{

    if (lives <= 0 ) {
      setGameCompleted(true)
  } else {
    setLives(lives => lives - 1)
  }

  }

  

  

  return (
    
    <div /*style={{backgroundImage:`url(${bottomBg})`}} */ className='relative h-screen bg-no-repeat bg-bottom bg-contain'>
      {gameCompleted ? (
        <EndScreen score={completed} mode={"easy"} oldScore={oldScore} />
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
      
        <div className=' pb-3 flex  flex-col relative  items-center '>
        <div className='flex  flex-row relative '>
              <div>
                <p className='font-bold text-green'>Lives : {lives}</p>
              </div>

            </div>
            <div className='rounded-xl w-[90%] p-3 bg-[#D2F6D7]  flex flex-col justify-center items-center '>
             
                <img
                className=' rounded-xl h-36 '
                
                src={currCountry && currCountry?.flags.png}

                />
            </div>

            <div className='text-center mt-3 h-6'><p className='font-semibold'>{clicked && currCountry?.name.common}</p></div>
        </div>

        
        <div className='w-screen flex items-center justify-center'>
          <div className='grid grid-cols-2 gap-4 p-5 z-1 max-w-[400px]'>
            {asked.map((name,index) => (
              <div key={index} style={{ backgroundColor: activeButton === index ? changeColor(name) : ""  }}  className='rounded-md ease-in-out duration-300 p-1 border shadow-md h-10 flex items-center justify-center'>
                <button 
                onClick={() => guess(name) ? correctCountry(index) : correctCountry(index)} 
                
                className={`text-white w-full h-full  leading-4 font-bold ${countWord(name) ? "text-[70%]" : "text-[100%]" } `}><span  className='text-black '>{name}</span></button>
            </div>
            ))}
          </div>

        </div>
        </div>

      )}
        

       
        
        
    </div>
  )
}

export default QuizPage