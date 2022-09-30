// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0oogmTY1QEEubWwjZ9FEmrBfi2u6Cwgs",
  authDomain: "hiragana-713ba.firebaseapp.com",
  projectId: "hiragana-713ba",
  storageBucket: "hiragana-713ba.appspot.com",
  messagingSenderId: "182861931257",
  appId: "1:182861931257:web:72dc1a8320462d12c9f828"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)