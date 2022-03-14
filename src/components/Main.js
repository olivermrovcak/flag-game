import React, {useState,useEffect} from 'react'
import Header from './Header'
import GameSelect from './GameSelect'
import Loading from './Loading'
import TopScorers from './TopScorers';
import AllTimeBest from './AllTimeBest';

import { collection, query, where, getDocs,setDoc, doc } from "firebase/firestore";
import { db } from '../firebase/firebase';

import {app} from '../firebase/firebase';
import { getAuth,  onAuthStateChanged } from "firebase/auth";
import OnlyForMobileDevices from './OnlyForMobileDevices';


const url = "https://restcountries.com/v3.1/all"

function Main() {

  const auth = getAuth(app);

  const [loaded, setLoaded] = useState(false)



  const [countries, setCountries] = useState([])
  const [bestOne, setBestOne] = useState(null)
  const [oldScoreEasy, setOldScoreEasy] = useState()
  const [oldScoreHard, setOldScoreHard] = useState()

  //set users curr score
  useEffect(() => {
    
        const getCurrScore = async () => {
            const q = query(collection(db, "users"));
    
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
           
            if (doc.data().uid === auth?.currentUser.uid) {
                
                if (!doc.data().scoreEasy) {
                  setOldScoreEasy(0)
                } else {
                  setOldScoreEasy(doc.data().scoreEasy)
                }

                if (!doc.data().scoreHard) {
                  setOldScoreHard(0)
                } else {
                  setOldScoreHard(doc.data().scoreHard)
                }
                
                
                
                
            } 
      
        });
        }
    
        getCurrScore()

  }, [])

  //load countries
  useEffect(() => {
    async function caller() {
      
      const res = await fetch(url)
      const countries = await res.json()
      setCountries(countries)
    }
    
    caller()
  }, [])


  //load all time best player in hardmode
    useEffect(() => {

        const getBestPlayer = async () => {

            var pom = 0;

            const q = query(collection(db, "users"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        
           
            if (doc.data().scoreHard > pom) {
              
                pom = doc.data().scoreHard;
                setBestOne(doc.data())
            }
          
        });

        }
        getBestPlayer()
         
    }, [])


  //set loaded when all data are fetched succesfuly
  useEffect(() => {
    
    if (countries[1] && bestOne  ) {
      setLoaded(true)
    }


  }, [countries,bestOne,oldScoreEasy,oldScoreHard])
  

  return (
    <div className=' w-screen h-screen '>
      <div className='md:hidden w-screen h-screen'>
         {loaded ? (
            <>
              <Header/>
              <GameSelect countries={countries} oldScoreHard={oldScoreHard} oldScoreEasy={oldScoreEasy}/>
              
              <AllTimeBest  bestOne={bestOne}/>
              
            </>

      ) : (
       <Loading  />
      )}
      </div>
      <OnlyForMobileDevices/>


        
    </div>
  )
}

export default Main