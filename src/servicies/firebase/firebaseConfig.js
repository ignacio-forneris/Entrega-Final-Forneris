import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyA0dum5NRx-xqySN-s12NCQspn9GHh8Ink",
  authDomain: "entregafinal-forneris-newrun.firebaseapp.com",
  projectId: "entregafinal-forneris-newrun",
  storageBucket: "entregafinal-forneris-newrun.appspot.com",
  messagingSenderId: "585794727372",
  appId: "1:585794727372:web:113ca3bba4bcb8f62a4169"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);