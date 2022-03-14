import React, {useState, useEffect} from 'react'

const url = "https://restcountries.com/v3.1/all"



 const countries = async () => {
          const res = await fetch(url)
          const country = await res.json()
          return country
}



export default countries()