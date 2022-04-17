// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZrZh1da_C3aiFx2knhxo63fWeQ61RPss",
  authDomain: "tennis-today-4d2f8.firebaseapp.com",
  projectId: "tennis-today-4d2f8",
  storageBucket: "tennis-today-4d2f8.appspot.com",
  messagingSenderId: "1031393179244",
  appId: "1:1031393179244:web:dbb77b844e24473ef3ca49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
