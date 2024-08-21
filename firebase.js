// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebase  } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQxMX3EsIetZWg-kz35TxV7hyUq-N3xaU",
  authDomain: "flashcardsaas-f058c.firebaseapp.com",
  projectId: "flashcardsaas-f058c",
  storageBucket: "flashcardsaas-f058c.appspot.com",
  messagingSenderId: "305745050951",
  appId: "1:305745050951:web:c775dba9887a0900e82062",
  measurementId: "G-VL4MH0DVXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}