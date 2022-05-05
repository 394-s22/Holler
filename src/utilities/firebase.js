// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCozThxPApmqASiVVkFBgYgcZRO5hkP1E",
  authDomain: "holler-8e6d5.firebaseapp.com",
  projectId: "holler-8e6d5",
  storageBucket: "holler-8e6d5.appspot.com",
  messagingSenderId: "1086848005499",
  appId: "1:1086848005499:web:b674eba4eb9882a696f9de",
  measurementId: "G-ZL9LL8DJNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

