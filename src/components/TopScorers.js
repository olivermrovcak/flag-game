import React, {useEffect,useState} from 'react'
import laurel from '../images/laurel.png'
import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from '../firebase/firebase';

function TopScorers() {

    const [topScorers , setTopScorers] = useState([])


    console.log([4,2,2,1].sort().reverse())

    useEffect(() => {

        const getHighestScore = async () => {

            var pom = 0;

            const q = query(collection(db, "users"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        
            
           console.log(doc.data().name)
          
        });

       


        }

        getHighestScore()
         

    }, [])

  return (
    <div className='p-5 pt-0'>
        <div className=' pt-0 flex flex-row items-center '>
            <h1 className='font-bold text-[25px] text-darkgreen flex-1'>Top scorers</h1>
            
                    
        </div>

        <div className='w-full pt-3 flex space-x-5'>
            <div className='w-[100px] shadow-custom h-[100px] flex items-center justify-around flex-col p-3 bg-[#D2F6D7] border-2 border-[#6DE283] rounded-xl'>
                <img
                className='w-12 h-12 object-contain rounded-full'
                src='https://api.sportnet.online/v1/users/5d65809e86dc8b72383187da/photo/8b2e2a40-23eb-432f-a752-e01b013fdb96'
                />

                <p className='font-bold text-sm text-darkgreen'>John Doe</p>
            </div>

            <div className='w-[100px] shadow-custom h-[100px] flex items-center justify-around flex-col p-3 bg-[#D2F6D7] border-2 border-[#6DE283] rounded-xl'>
                <img
                className='w-12 h-12 object-contain rounded-full'
                src='https://api.sportnet.online/v1/users/5d65809e86dc8b72383187da/photo/8b2e2a40-23eb-432f-a752-e01b013fdb96'
                />

                <p className='font-bold text-sm text-darkgreen'>John Doe</p>
            </div>

            <div className='w-[100px] shadow-custom h-[100px] flex items-center justify-around flex-col p-3 bg-[#D2F6D7] border-2 border-[#6DE283] rounded-xl'>
                <img
                className='w-12 h-12 object-contain rounded-full'
                src='https://api.sportnet.online/v1/users/5d65809e86dc8b72383187da/photo/8b2e2a40-23eb-432f-a752-e01b013fdb96'
                />

                <p className='font-bold text-sm text-darkgreen'>John Doe</p>
            </div>

            
        </div>

    </div>
  )
}

export default TopScorers