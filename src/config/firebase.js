// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0KJ8kcz9cSN4oDm3yicM4Z6JRGwrMaVc",
  authDomain: "royal-pearl-e3254.firebaseapp.com",
  projectId: "royal-pearl-e3254",
  storageBucket: "royal-pearl-e3254.appspot.com",
  messagingSenderId: "33553349390",
  appId: "1:33553349390:web:7ff79c1d1f1e3092b3755f",
  measurementId: "G-F7BSTZ6T4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
