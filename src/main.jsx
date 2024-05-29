import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC88MBIgoCn-KNnZiPvdo-uD1n_e1oyog8",
  authDomain: "coder-puerto-delicia.firebaseapp.com",
  projectId: "coder-puerto-delicia",
  storageBucket: "coder-puerto-delicia.appspot.com",
  messagingSenderId: "555012136070",
  appId: "1:555012136070:web:a7ae73f2dbe0803388c507"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)