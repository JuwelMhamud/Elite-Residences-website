// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJuDCXnULeITahg-XVJ0xOnr2bgTYfPkA",
  authDomain: "elite-residence-18aa0.firebaseapp.com",
  projectId: "elite-residence-18aa0",
  storageBucket: "elite-residence-18aa0.appspot.com",
  messagingSenderId: "98333503062",
  appId: "1:98333503062:web:caa60d06b4a06f126055f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;