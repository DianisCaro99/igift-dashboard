// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu0nL8QvI-ZZdxAO1W5yIRrYWWKyMjvSY",
  authDomain: "igift-cf3ef.firebaseapp.com",
  projectId: "igift-cf3ef",
  storageBucket: "igift-cf3ef.appspot.com",
  messagingSenderId: "730969775876",
  appId: "1:730969775876:web:1cfb56f9c0e6fb980aba51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
