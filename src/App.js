
import './App.css';

import React, {useState, useEffect} from 'react'
import SignIn from './components/SignIn';
import Main from './components/Main';
import SelectedGame from './components/SelectedGame';
import LevelSelect from './components/LevelSelect';
import QuizPage from './components/QuizPage';


import { BrowserRouter,Routes, Route } from "react-router-dom";
import Countries from './components/Countries';
import HardMode from './components/HardMode';

import {app} from './firebase/firebase';
import { getAuth,  onAuthStateChanged } from "firebase/auth";
import Difficulty from './components/Difficulty';


function App() {

  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const auth = getAuth(app);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserSignedIn(true);
        
        
        
      } else {
        setIsUserSignedIn(false);
      }
    });
    return onAuthStateChanged
  }, []);

  return (
    <BrowserRouter>
    <Routes>
      {isUserSignedIn ? (
        <>
        <Route path="/" element={<Main/>} />
        <Route path="/Game" element={<SelectedGame/>} />
        <Route path="/LevelSelect" element={<LevelSelect/>} />
        <Route path="/Easy" element={<QuizPage/>} />
        <Route path="/Hard" element={<HardMode/>} />
        <Route path="/ChooseDifficulty" element={<Difficulty/>} />
        </>


      ) : (
        <Route path="/" element={<SignIn/>} />
      )}

        
    </Routes>
  </BrowserRouter>
  )
}

export default App;
