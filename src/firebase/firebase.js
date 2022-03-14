import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDtR82vxiQ2rIyjC41gujj06eAx6LMivmI",
  authDomain: "flagguess-66d53.firebaseapp.com",
  projectId: "flagguess-66d53",
  storageBucket: "flagguess-66d53.appspot.com",
  messagingSenderId: "166663963221",
  appId: "1:166663963221:web:5eb223ae96ddb9ce81cadc",
  measurementId: "G-P302Y3ZHE7"
};
  

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
  const db = getFirestore();
 
  
  
  
  

  
  export { app, db };