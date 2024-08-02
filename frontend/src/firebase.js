// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tmhrealestate-87b89.firebaseapp.com",
  projectId: "tmhrealestate-87b89",
  storageBucket: "tmhrealestate-87b89.appspot.com",
  messagingSenderId: "1037847315675",
  appId: "1:1037847315675:web:7710dd99125bc9bed078fe",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
