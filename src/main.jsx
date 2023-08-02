import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxP9c66M-FC7Q4vJI1-Sd6KmrHfJN2cYk",
  authDomain: "coderhouse-ecommerce-1d1eb.firebaseapp.com",
  projectId: "coderhouse-ecommerce-1d1eb",
  storageBucket: "coderhouse-ecommerce-1d1eb.appspot.com",
  messagingSenderId: "485313058388",
  appId: "1:485313058388:web:0764aee375a78cc006ffc1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
