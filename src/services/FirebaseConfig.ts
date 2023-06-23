// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiCABM-SYyrNogT0ieoW7sgN_IvQo1t0E",
  authDomain: "practiceapp-200623.firebaseapp.com",
  projectId: "practiceapp-200623",
  storageBucket: "practiceapp-200623.appspot.com",
  messagingSenderId: "1092054795291",
  appId: "1:1092054795291:web:d7e520854a18e9e54ca4be"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)