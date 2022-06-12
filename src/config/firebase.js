// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB79BgeYnqKInwhflM8PmnT_sptdwMODQU",
  authDomain: "budget-app-b0c19.firebaseapp.com",
  projectId: "budget-app-b0c19",
  storageBucket: "budget-app-b0c19.appspot.com",
  messagingSenderId: "491932043523",
  appId: "1:491932043523:web:81a9d745bc41c424150136",
  measurementId: "G-YH3F2K63BS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);