// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAasbjO8lbBrAwEPSUeKsKrt2106HmAy-o",
  authDomain: "reactyonetim.firebaseapp.com",
  projectId: "reactyonetim",
  storageBucket: "reactyonetim.appspot.com",
  messagingSenderId: "858863674366",
  appId: "1:858863674366:web:6063204cb5a843cc0856af",
  measurementId: "G-FYFFXF7G8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);